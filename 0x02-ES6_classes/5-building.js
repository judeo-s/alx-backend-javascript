export default class Building {
    _sqft;

    constructor(sqft) {
        if (typeof sqft !== 'number') {
            throw new TypeError('Square feet must be a number');
        }
        this._sqft = sqft;
    }

    get sqft() {
        return this._sqft;
    }

    set sqft(sqft) {
        if (typeof sqft !== 'number') {
            throw new TypeError('Square feet must be a number');
        }
        this._sqft = sqft;
    }

    evacuationWarningMessage() {
        throw new Error('Class extending Building must override');
    }
}