"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowseHistory = void 0;
class BrowseHistory {
    _urls = [];
    set urls(value) {
        this._urls = value;
    }
    push(url) {
        this._urls.push(url);
    }
    pop() {
        let lastUrl = this.urls.pop();
        return lastUrl;
    }
    createIterator() {
        return new this.ArrayIterator(this);
    }
    ArrayIterator = class {
        _history;
        _index = 0;
        constructor(_history) {
            this._history = _history;
        }
        next() {
            this._index++;
        }
        current() {
            return this._history._urls[this._index];
        }
        hasNext() {
            return this._index < this._history._urls.length;
        }
    };
}
exports.BrowseHistory = BrowseHistory;
//# sourceMappingURL=BrowseHistory.js.map