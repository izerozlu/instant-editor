import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HTTP_PATHS } from '../constants/http-paths.constant';
import { Observable, of } from 'rxjs';
import { RawScriptAnalysis, ScriptAnalysis } from '../models/script-analysis';
import { catchError, map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class ScriptAnalyzerHttpService {
	constructor(private httpClient: HttpClient) {}

	public postScriptAnalysis(script: string): Observable<ScriptAnalysis> {
		return this.httpClient.post<RawScriptAnalysis>(HTTP_PATHS.SCRIPT_ANALYSIS, script).pipe(
			catchError((error: HttpErrorResponse) => {
				return of(error);
			}),
			map((response: RawScriptAnalysis | HttpErrorResponse) => {
				if (response instanceof HttpErrorResponse) {
					return ScriptAnalysis.generateEmpty();
				} else {
					return new ScriptAnalysis({
						...response,
						undefinedList: response.undefined,
					});
				}
			})
		);
	}
}
