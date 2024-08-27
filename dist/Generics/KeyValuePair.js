"use strict";
class KeyValuePair {
    key;
    vlaue;
    constructor(key, vlaue) {
        this.key = key;
        this.vlaue = vlaue;
    }
    log() {
        console.log(this.key, this.vlaue);
    }
}
const keyValuePair = new KeyValuePair('Name', 'Demis');
keyValuePair.log();
//# sourceMappingURL=KeyValuePair.js.map