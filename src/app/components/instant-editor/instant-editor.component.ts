import {
	AfterViewInit,
	Component,
	ElementRef,
	HostBinding,
	ViewChild,
} from "@angular/core";
import { fromEvent } from "rxjs";
import { ScriptAnalyzerHttpService } from "../../services/script-analyzer-http.service";
import { debounceTime, tap } from "rxjs/operators";
import { ScriptAnalysis } from "../../models/script-analysis";
import ResizeObserver from "resize-observer-polyfill";
import { CLASS_NAMES } from "../../constants/class-names.constant";

@Component({
	selector: "instant-editor",
	templateUrl: "./instant-editor.component.html",
	styleUrls: ["./instant-editor.component.scss"],
})
export class InstantEditorComponent implements AfterViewInit {
	@HostBinding("class.instant-editor")
	private instantEditorComponentClass = true;

	@ViewChild("editor")
	private editorElementRef: ElementRef;

	@ViewChild("editorBackground")
	private editorBackgroundElementRef: ElementRef;

	private scriptAnalysis: ScriptAnalysis;
	public editorString: string;

	constructor(
		private elementRef: ElementRef,
		private scriptAnalysisHttpService: ScriptAnalyzerHttpService
	) {}

	ngAfterViewInit(): void {
		const hostElement: HTMLElement = this.elementRef.nativeElement;
		const editorElement: HTMLTextAreaElement = this.editorElementRef
			.nativeElement;
		const editorBackgroundElement: HTMLDivElement = this
			.editorBackgroundElementRef.nativeElement;
		fromEvent(editorElement, "input")
			.pipe(
				tap(() => this.copyAndProcessScript(editorElement.value)),
				debounceTime(500)
			)
			.subscribe(async () => {
				const script = editorElement.value;
				this.scriptAnalysis = await this.scriptAnalysisHttpService
					.postScriptAnalysis(script)
					.toPromise();
				this.copyAndProcessScript(this.scriptAnalysis.phrase);
				editorElement.value = this.scriptAnalysis.phrase;
			});

		fromEvent(editorElement, "scroll").subscribe(() => {
			const { scrollLeft, scrollTop } = editorElement;
			editorBackgroundElement.scrollTo(scrollLeft, scrollTop);
		});

		new ResizeObserver(() => {
			const { offsetHeight, offsetWidth } = editorElement;
			editorBackgroundElement.style.height = `${offsetHeight}px`;
			editorBackgroundElement.style.width = `${offsetWidth}px`;
			hostElement.style.height = `${offsetHeight}px`;
			hostElement.style.width = `${offsetWidth}px`;
		}).observe(editorElement);
	}

	private copyAndProcessScript(constructedScript: string): void {
		if (this.scriptAnalysis) {
			[
				[this.scriptAnalysis.blackListed, CLASS_NAMES.BLACKLIST],
				[this.scriptAnalysis.grayListed, CLASS_NAMES.GRAYLIST],
				[this.scriptAnalysis.undefinedList, CLASS_NAMES.UNDEFINED],
			].forEach(([list, className]: [string[], string]) => {
				constructedScript = this.processPhrase(
					list,
					constructedScript,
					className
				);
			});
		}
		this.editorString = constructedScript;
	}

	private processPhrase(
		list: string[],
		script: string,
		className: string
	): string {
		let grayListedCount = 0;
		return list.reduce((processedString: string, listItem: string) => {
			const replacementRegExp = new RegExp(listItem, "gi");
			return processedString.replace(
				replacementRegExp,
				(match: string) => {
					let replacement = `<span class="${className}">${match}`;
					if (className === CLASS_NAMES.GRAYLIST) {
						replacement += `<sub class="editor__count-marker">${++grayListedCount}</sub>`;
					}
					return replacement + "</span>";
				}
			);
		}, script);
	}
}
