export default class Building {

    constructor(sqft) {
        if (typeof sqft !== 'number') {
            throw new TypeError('Square feet must be a number');
        }
        this._sqft = sqft;
    }

    get sqft() {
        return this._sqft;
    }

    evacuationWarningMessage() {
        throw new Error('Class extending Building must override');
    }
}