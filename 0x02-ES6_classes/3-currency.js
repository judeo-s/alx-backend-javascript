export default class Currency {
    _code;
    _name;

    constructor(code, name) {
        if (typeof code !== 'string') {
            throw new TypeError('Code must be a string');
        }
        if (typeof name !== 'string') {
            throw new TypeError('Name must be a string');
        }
        this._code = code;
        this._name = name;
    }

    get code() {
        return this._code;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        if (typeof name !== 'string') {
            throw new TypeError('Name must be a string');
        }
        this._name = name;
    }

    set code(code) {
        if (typeof code !== 'string') {
            throw new TypeError('Code must be a string');
        }
        this._code = code;
    }

    displayFullCurrency() {
        return `${this._name} (${this._code})`;
    }
}