"use strict";
var Option = (function () {
    function Option(fields) {
        this.id = '';
        this.text = '';
        if (fields)
            Object.assign(this, fields);
    }
    return Option;
}());
exports.Option = Option;
//# sourceMappingURL=option.class.js.map