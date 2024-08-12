"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var admins_1 = require("../../access/admins");
var anyone_1 = require("../../access/anyone");
var adminsAndUser_1 = __importDefault(require("./access/adminsAndUser"));
var checkRole_1 = require("./checkRole");
var ensureFirstUserIsAdmin_1 = require("./hooks/ensureFirstUserIsAdmin");
var loginAfterCreate_1 = require("./hooks/loginAfterCreate");
var Users = {
    slug: 'users',
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'email'],
    },
    access: {
        read: adminsAndUser_1.default,
        create: anyone_1.anyone,
        update: adminsAndUser_1.default,
        delete: admins_1.admins,
        admin: function (_a) {
            var user = _a.req.user;
            return (0, checkRole_1.checkRole)(['admin'], user);
        },
    },
    hooks: {
        afterChange: [loginAfterCreate_1.loginAfterCreate],
    },
    auth: true,
    fields: [
        {
            name: 'name',
            type: 'text',
        },
        {
            name: 'roles',
            type: 'select',
            hasMany: true,
            defaultValue: ['user'],
            options: [
                {
                    label: 'admin',
                    value: 'admin',
                },
                {
                    label: 'user',
                    value: 'user',
                },
            ],
            hooks: {
                beforeChange: [ensureFirstUserIsAdmin_1.ensureFirstUserIsAdmin],
            },
            access: {
                read: admins_1.admins,
                create: admins_1.admins,
                update: admins_1.admins,
            },
        },
    ],
    timestamps: true,
};
exports.default = Users;
//# sourceMappingURL=index.js.map