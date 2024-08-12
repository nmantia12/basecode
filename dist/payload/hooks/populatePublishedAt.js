"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.populatePublishedAt = void 0;
var populatePublishedAt = function (_a) {
    var data = _a.data, req = _a.req, operation = _a.operation;
    if (operation === 'create' || operation === 'update') {
        if (req.body && !req.body.publishedAt) {
            var now = new Date();
            return __assign(__assign({}, data), { publishedAt: now });
        }
    }
    return data;
};
exports.populatePublishedAt = populatePublishedAt;
//# sourceMappingURL=populatePublishedAt.js.map