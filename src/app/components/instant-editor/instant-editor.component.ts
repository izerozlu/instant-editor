import {
	AfterViewInit,
	Component,
	ElementRef,
	HostBinding,
	OnDestroy,
	SecurityContext,
	ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { ScriptAnalyzerHttpService } from '../../services/script-analyzer-http.service';
import { debounceTime, tap } from 'rxjs/operators';
import { ScriptAnalysis } from '../../models/script-analysis';
import ResizeObserver from 'resize-observer-polyfill';
import { CLASS_NAMES } from '../../constants/class-names.constant';
import { SubscriptionHandlerService } from '../../services/subscription-handler.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'instant-editor',
	templateUrl: './instant-editor.component.html',
	styleUrls: ['./instant-editor.component.scss'],
})
export class InstantEditorComponent implements AfterViewInit, OnDestroy {
	@HostBinding('class.instant-editor')
	private instantEditorComponentClass = true;

	@ViewChild('editor')
	private editorElementRef: ElementRef;

	@ViewChild('editorBackground')
	private editorBackgroundElementRef: ElementRef;

	private scriptAnalysis: ScriptAnalysis;
	private caretPosition: number;
	private hostElement: HTMLElement;
	private editorElement: HTMLTextAreaElement;
	private editorBackgroundElement: HTMLDivElement;
	private editorResizeObserver: ResizeObserver;

	public editorString: string;

	constructor(
		private elementRef: ElementRef,
		private scriptAnalysisHttpService: ScriptAnalyzerHttpService,
		private subscriptionHandlerService: SubscriptionHandlerService,
		private domSanitizer: DomSanitizer
	) {}

	ngAfterViewInit(): void {
		this.extractComponentNativeElements();
		this.listenEditorInput();
		this.listenEditorScroll();
		this.listenEditorResize();
	}

	ngOnDestroy(): void {
		this.subscriptionHandlerService.clearSubscriptions();
		this.editorResizeObserver.disconnect();
	}

	/**
	 * Listens editor element's resize event to synchronize editor element's dimensions with editorBackgroundElement and hostElement.
	 */
	private listenEditorResize(): void {
		this.editorResizeObserver = new ResizeObserver(() => {
			const { offsetHeight, offsetWidth } = this.editorElement;
			this.editorBackgroundElement.style.height = `${offsetHeight}px`;
			this.editorBackgroundElement.style.width = `${offsetWidth}px`;
			this.hostElement.style.height = `${offsetHeight}px`;
			this.hostElement.style.width = `${offsetWidth}px`;
		});
		this.editorResizeObserver.observe(this.editorElement);
	}

	/**
	 * Listens editor's scroll event to synchronize editorBackgroundElement's scroll with the editor's scroll.
	 */
	private listenEditorScroll(): void {
		const subscription = fromEvent(this.editorElement, 'scroll').subscribe(() => {
			const { scrollLeft, scrollTop } = this.editorElement;
			this.editorBackgroundElement.scrollTo(scrollLeft, scrollTop);
		});
		this.subscriptionHandlerService.addSubscription(subscription);
	}

	/**
	 * Listens editor's input event to process its value. The listening process has two goals.
	 * <br>
	 * First one is synchronizing the editorBackground's content with the editor's content.
	 * <br>
	 * Second is to retrieve the ScriptAnalysis result of the editor's content.
	 * <br>
	 * As a side effect, saves and loads the caret position to not disturb the user's writing
	 * experience.
	 */
	private listenEditorInput(): void {
		const subscription = fromEvent(this.editorElement, 'input')
			.pipe(
				tap(() => this.processAndSyncScript(this.editorElement.value)),
				debounceTime(500)
			)
			.subscribe(async () => {
				this.saveCaretPosition();
				const script = this.editorElement.value;
				this.scriptAnalysis = await this.scriptAnalysisHttpService.postScriptAnalysis(script).toPromise();
				this.processAndSyncScript(this.scriptAnalysis.phrase);
				this.editorElement.value = this.scriptAnalysis.phrase;
				this.loadCaretPosition();
			});
		this.subscriptionHandlerService.addSubscription(subscription);
	}

	/**
	 * Saves three native elements for further usage.
	 * <br>
	 * These are: component's host element, editor's element and editorBackground's element.
	 */
	private extractComponentNativeElements(): void {
		this.hostElement = this.elementRef.nativeElement;
		this.editorElement = this.editorElementRef.nativeElement;
		this.editorBackgroundElement = this.editorBackgroundElementRef.nativeElement;
	}

	/**
	 * Processes given constructedScript to mark/unmark graylisted, blacklisted and undefined
	 * words.
	 * <br>
	 * After the processing is complete synchronizes editor's content with the editorBackground's
	 * content.
	 * @param constructedScript Script to process through scriptAnalysis.
	 */
	private processAndSyncScript(constructedScript: string): void {
		if (this.scriptAnalysis) {
			[
				[this.scriptAnalysis.blackListed, CLASS_NAMES.BLACKLIST],
				[this.scriptAnalysis.grayListed, CLASS_NAMES.GRAYLIST],
				[this.scriptAnalysis.undefinedList, CLASS_NAMES.UNDEFINED],
			].forEach(([list, className]: [string[], string]) => {
				constructedScript = this.processPhrase(list, constructedScript, className);
			});
		}
		// DomSanitizer service of the Angular Frameworks helps with the sanitization of strings again XSS attacks.
		this.editorString = this.domSanitizer.sanitize(SecurityContext.HTML, constructedScript);
	}

	/**
	 * Decides where to process and after that constructs graylisted, blacklisted and undefined parts' html strings.
	 * <br>
	 * Decision making mechanism relies on RegExp tests and given className variable.
	 * <br>
	 * Construction part is mostly same for three different classes. But graylisted html parts require an extra
	 * segment.
	 * @param list List of items to mark. List's type might be blacklisted, graylisted or undefined.
	 * @param script String to build upon or replace on.
	 * @param className CSS class name to assign to constructed html part.
	 * @returns Processed and constructed html string.
	 */
	private processPhrase(list: string[], script: string, className: string): string {
		let grayListedCount = 0;
		return list.reduce((processedString: string, listItem: string) => {
			const replacementRegExp = new RegExp(listItem, 'gi');
			return processedString.replace(replacementRegExp, (match: string) => {
				let replacement = `<span class="${className}">${match}`;
				if (className === CLASS_NAMES.GRAYLIST) {
					replacement += `<sub class="editor__count-marker">${++grayListedCount}</sub>`;
				}
				return replacement + '</span>';
			});
		}, script);
	}

	/**
	 * Saves the editorElement's caret position.
	 */
	private saveCaretPosition(): void {
		this.caretPosition = this.editorElement.selectionStart;
	}

	/**
	 * Loads the editorElement's caret position.
	 */
	private loadCaretPosition(): void {
		this.editorElement.selectionStart = this.caretPosition;
		this.editorElement.selectionEnd = this.caretPosition;
	}
}
