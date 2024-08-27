"use strict";
class Searchableproduct {
    _name;
    _title;
    constructor(_name, _title) {
        this._name = _name;
        this._title = _title;
    }
    set name(_name) {
        this._name = _name;
    }
    set title(_title) {
        this._title = _title;
    }
    get name() {
        return this._name;
    }
    get title() {
        return this._title;
    }
}
const searchableProduct = new Searchableproduct('Apple', 'A product for vitamin use');
class SearchableStore {
    _name;
    _title;
    _location;
    constructor(_name, _title, _location) {
        this._name = _name;
        this._title = _title;
        this._location = _location;
    }
    displayInfo() {
        console.log(`${this._name} ${this._title} ${this._location}`);
    }
    set name(_name) {
        this._name = _name;
    }
    set location(_location) {
        this._location = _location;
    }
    set title(_title) {
        this._title = _title;
    }
}
//# sourceMappingURL=Product.js.map