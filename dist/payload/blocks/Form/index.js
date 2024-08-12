"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormBlock = void 0;
var richText_1 = __importDefault(require("../../fields/richText"));
exports.FormBlock = {
    slug: 'formBlock',
    labels: {
        singular: 'Form Block',
        plural: 'Form Blocks',
    },
    graphQL: {
        singularName: 'FormBlock',
    },
    fields: [
        {
            name: 'form',
            type: 'relationship',
            relationTo: 'forms',
            required: true,
        },
        {
            name: 'enableIntro',
            label: 'Enable Intro Content',
            type: 'checkbox',
        },
        (0, richText_1.default)({
            name: 'introContent',
            label: 'Intro Content',
            admin: {
                condition: function (_, _a) {
                    var enableIntro = _a.enableIntro;
                    return Boolean(enableIntro);
                },
            },
        }),
    ],
};
//# sourceMappingURL=index.js.map