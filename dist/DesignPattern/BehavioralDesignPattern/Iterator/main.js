"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BrowseHistory_1 = require("./BrowseHistory");
const history = new BrowseHistory_1.BrowseHistory();
history.push(1);
history.push(2);
history.push(3);
const iterator = history.createIterator();
while (iterator.hasNext()) {
    const url = iterator.current();
    console.log(url);
    iterator.next();
}
//# sourceMappingURL=main.js.map