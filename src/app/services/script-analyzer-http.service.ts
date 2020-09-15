import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HTTP_PATHS } from "../constants/http-paths.constant";
import { Observable } from "rxjs";
import { RawScriptAnalysis, ScriptAnalysis } from "../models/script-analysis";
import { map } from "rxjs/operators";

@Injectable({
	providedIn: "root",
})
export class ScriptAnalyzerHttpService {
	constructor(private httpClient: HttpClient) {}

	public postScriptAnalysis(script: string): Observable<ScriptAnalysis> {
		return this.httpClient
			.post<RawScriptAnalysis>(HTTP_PATHS.SCRIPT_ANALYSIS, script)
			.pipe(
				map((response: RawScriptAnalysis) => {
					return new ScriptAnalysis({
						...response,
						undefinedList: response.undefined,
					});
				})
			);
	}
}
