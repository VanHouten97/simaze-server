"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function UCFirst(text) {
    let splited = text.trim().toLowerCase().split(' ');
    let newText = '';
    splited.forEach((item) => {
        newText += ' ' + item.substr(0, 1).toUpperCase() + item.substr(1);
    });
    return newText.trim();
}
exports.UCFirst = UCFirst;
;
function isString(obj) {
    if (Array.isArray(obj)) {
        for (let i = 0; i < obj.length; i++) {
            if (typeof obj[i] !== 'string')
                return false;
        }
    }
    else {
        if (typeof obj !== 'string')
            return false;
    }
    return true;
}
exports.isString = isString;
