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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bundler_webpack_1 = require("@payloadcms/bundler-webpack"); // bundler-import
var db_mongodb_1 = require("@payloadcms/db-mongodb"); // database-adapter-import
var plugin_cloud_1 = require("@payloadcms/plugin-cloud");
var plugin_nested_docs_1 = __importDefault(require("@payloadcms/plugin-nested-docs"));
var plugin_redirects_1 = __importDefault(require("@payloadcms/plugin-redirects"));
var plugin_seo_1 = __importDefault(require("@payloadcms/plugin-seo"));
var richtext_slate_1 = require("@payloadcms/richtext-slate"); // editor-import
var dotenv_1 = __importDefault(require("dotenv"));
var path_1 = __importDefault(require("path"));
var config_1 = require("payload/config");
var plugin_form_builder_1 = __importDefault(require("@payloadcms/plugin-form-builder"));
var Categories_1 = __importDefault(require("./collections/Categories"));
// import Comments from './collections/Comments'
var Media_1 = require("./collections/Media");
var Pages_1 = require("./collections/Pages");
var Posts_1 = require("./collections/Posts");
var Projects_1 = require("./collections/Projects");
var Users_1 = __importDefault(require("./collections/Users"));
// import BeforeDashboard from './components/BeforeDashboard'
// import BeforeLogin from './components/BeforeLogin'
var seed_1 = require("./endpoints/seed");
var Footer_1 = require("./globals/Footer");
var Header_1 = require("./globals/Header");
var Settings_1 = require("./globals/Settings");
var generateTitle = function () {
    return 'My Website';
};
dotenv_1.default.config({
    path: path_1.default.resolve(__dirname, '../../.env'),
});
exports.default = (0, config_1.buildConfig)({
    admin: {
        user: Users_1.default.slug,
        bundler: (0, bundler_webpack_1.webpackBundler)(),
        components: {
        // The `BeforeLogin` component renders a message that you see while logging into your admin panel.
        // Feel free to delete this at any time. Simply remove the line below and the import `BeforeLogin` statement on line 15.
        // beforeLogin: [BeforeLogin],
        // The `BeforeDashboard` component renders the 'welcome' block that you see after logging into your admin panel.
        // Feel free to delete this at any time. Simply remove the line below and the import `BeforeDashboard` statement on line 15.
        // beforeDashboard: [BeforeDashboard],
        },
        webpack: function (config) {
            var _a;
            return (__assign(__assign({}, config), { resolve: __assign(__assign({}, config.resolve), { alias: __assign(__assign({}, config.resolve.alias), (_a = { dotenv: path_1.default.resolve(__dirname, './dotenv.js') }, _a[path_1.default.resolve(__dirname, './endpoints/seed')] = path_1.default.resolve(__dirname, './emptyModuleMock.js'), _a)) }) }));
        },
    },
    editor: (0, richtext_slate_1.slateEditor)({}),
    // database-adapter-config-start
    db: (0, db_mongodb_1.mongooseAdapter)({
        url: process.env.DATABASE_URI,
    }),
    // database-adapter-config-end
    serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
    collections: [Pages_1.Pages, Posts_1.Posts, Projects_1.Projects, Media_1.Media, Categories_1.default, Users_1.default],
    globals: [Settings_1.Settings, Header_1.Header, Footer_1.Footer],
    typescript: {
        outputFile: path_1.default.resolve(__dirname, 'payload-types.ts'),
    },
    graphQL: {
        schemaOutputFile: path_1.default.resolve(__dirname, 'generated-schema.graphql'),
    },
    cors: [process.env.PAYLOAD_PUBLIC_SERVER_URL || ''].filter(Boolean),
    csrf: [process.env.PAYLOAD_PUBLIC_SERVER_URL || ''].filter(Boolean),
    endpoints: [
        // The seed endpoint is used to populate the database with some example data
        // You should delete this endpoint before deploying your site to production
        {
            path: '/seed',
            method: 'get',
            handler: seed_1.seed,
        },
    ],
    plugins: [
        (0, plugin_redirects_1.default)({
            collections: ['pages', 'posts'],
        }),
        (0, plugin_nested_docs_1.default)({
            collections: ['categories'],
        }),
        (0, plugin_seo_1.default)({
            collections: ['pages', 'posts', 'projects'],
            generateTitle: generateTitle,
            uploadsCollection: 'media',
        }),
        (0, plugin_cloud_1.payloadCloud)(),
        (0, plugin_form_builder_1.default)({
            fields: {
                text: true,
                textarea: true,
                select: true,
                email: true,
                state: true,
                country: true,
                checkbox: true,
                number: true,
                message: true,
                payment: false
            }
        })
    ],
});
//# sourceMappingURL=payload.config.js.map