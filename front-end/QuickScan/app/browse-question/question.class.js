"use strict";
var option_class_1 = require('./option.class');
var Question = (function () {
    function Question(fields) {
        this.id = '';
        this.level = '';
        this.type = '';
        this.categoryId = '';
        this.title = '';
        this.options = new option_class_1.Option[];
        if (fields)
            Object.assign(this, fields);
    }
    return Question;
}());
exports.Question = Question;
//# sourceMappingURL=question.class.js.map