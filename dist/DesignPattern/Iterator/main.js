"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BrowseHistory_1 = require("./BrowseHistory");
const history = new BrowseHistory_1.BrowseHistory();
history.push('a');
history.push('b');
history.push('c');
history.urls.forEach(item => console.log(item));
//# sourceMappingURL=main.js.map