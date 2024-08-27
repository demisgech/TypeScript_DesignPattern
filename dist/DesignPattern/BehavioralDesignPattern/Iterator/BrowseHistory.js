"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowseHistory = void 0;
class BrowseHistory {
    _urls = [];
    get urls() {
        return this._urls;
    }
    set urls(value) {
        this._urls = value;
    }
    push(url) {
        this.urls.push(url);
    }
    pop() {
        let lastUrl = this.urls.pop();
        return lastUrl;
    }
}
exports.BrowseHistory = BrowseHistory;
//# sourceMappingURL=BrowseHistory.js.map