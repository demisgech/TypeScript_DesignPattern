"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayIterator = void 0;
class ArrayIterator {
    _history;
    _index = 0;
    constructor(_history) {
        this._history = _history;
    }
    next() {
        this._index++;
    }
    current() {
        return this._history.urls[this._index];
    }
    hasNext() {
        return this._index < this._history.urls.length;
    }
}
exports.ArrayIterator = ArrayIterator;
//# sourceMappingURL=ArrayIterator.js.map