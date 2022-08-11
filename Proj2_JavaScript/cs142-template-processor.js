'use strict';

function Cs142TemplateProcessor (template) {
    this.template = template;
}

Cs142TemplateProcessor.prototype.fillIn = function (dictionary) {
    const regex = /\{\{[^{}]*\}\}/g;
    const str = this.template.replace(regex, (match) => {
        const property = match.slice(2, match.length - 2);
        const alternative = dictionary[property];
        if (alternative === undefined) {
            return "";
        }
        else {
            return alternative;
        }
    });
    return str;
};