export interface RawScriptAnalysis {
	phrase: string;
	grayListed: string[];
	blackListed: string[];
	undefined: string[];
}

export class ScriptAnalysis {
	private _phrase: string;
	private _grayListed: string[];
	private _blackListed: string[];
	private _undefinedList: string[];

	constructor({
		phrase,
		grayListed,
		blackListed,
		undefinedList,
	}: {
		phrase: string;
		grayListed: string[];
		blackListed: string[];
		undefinedList: string[];
	}) {
		this._phrase = phrase;
		this._grayListed = grayListed;
		this._blackListed = blackListed;
		this._undefinedList = undefinedList;
	}

	get phrase(): string {
		return this._phrase;
	}

	set phrase(value: string) {
		this._phrase = value;
	}

	get grayListed(): string[] {
		return this._grayListed;
	}

	set grayListed(value: string[]) {
		this._grayListed = value;
	}

	get blackListed(): string[] {
		return this._blackListed;
	}

	set blackListed(value: string[]) {
		this._blackListed = value;
	}

	get undefinedList(): string[] {
		return this._undefinedList;
	}

	set undefinedList(value: string[]) {
		this._undefinedList = value;
	}
}
