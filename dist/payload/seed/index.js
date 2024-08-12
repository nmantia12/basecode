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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var home_1 = require("./home");
var image_1_1 = require("./image-1");
var image_2_1 = require("./image-2");
var post_1_1 = require("./post-1");
var post_2_1 = require("./post-2");
var post_3_1 = require("./post-3");
var posts_page_1 = require("./posts-page");
var project_1_1 = require("./project-1");
var project_2_1 = require("./project-2");
var project_3_1 = require("./project-3");
var projects_page_1 = require("./projects-page");
var collections = ['categories', 'media', 'pages', 'posts', 'projects', 'comments'];
var globals = ['header', 'settings', 'footer'];
// Next.js revalidation errors are normal when seeding the database without a server running
// i.e. running `yarn seed` locally instead of using the admin UI within an active app
// The app is not running to revalidate the pages and so the API routes are not available
// These error messages can be ignored: `Error hitting revalidate route for...`
var seed = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
    var mediaDir, _a, demoAuthorID, demoUserID, _b, _c, _d, _e, image1Doc, image2Doc, _f, _g, _h, _j, technologyCategory, newsCategory, financeCategory, designCat, softwareCat, engineeringCat, _k, _l, _m, image1ID, image2ID, post1Doc, post2Doc, post3Doc, posts, _o, _p, _q, project1Doc, project2Doc, project3Doc, _r, _s, _t, postsPageDoc, projectsPageDoc, postsPageID, projectsPageID;
    return __generator(this, function (_u) {
        switch (_u.label) {
            case 0:
                payload.logger.info('Seeding database...');
                // we need to clear the media directory before seeding
                // as well as the collections and globals
                // this is because while `yarn seed` drops the database
                // the custom `/api/seed` endpoint does not
                payload.logger.info("\u2014 Clearing media...");
                mediaDir = path_1.default.resolve(__dirname, '../../media');
                if (fs_1.default.existsSync(mediaDir)) {
                    fs_1.default.rmdirSync(mediaDir, { recursive: true });
                }
                payload.logger.info("\u2014 Clearing collections and globals...");
                // clear the database
                return [4 /*yield*/, Promise.all(__spreadArray(__spreadArray([], collections.map(function (collection) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            return [2 /*return*/, payload.delete({
                                    collection: collection,
                                    where: {},
                                })];
                        });
                    }); }), true), globals.map(function (global) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            return [2 /*return*/, payload.updateGlobal({
                                    slug: global,
                                    data: {},
                                })];
                        });
                    }); }), true))];
            case 1:
                // clear the database
                _u.sent();
                payload.logger.info("\u2014 Seeding demo author and user...");
                return [4 /*yield*/, Promise.all(['demo-author@payloadcms.com', 'demo-user@payloadcms.com'].map(function (email) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, payload.delete({
                                        collection: 'users',
                                        where: {
                                            email: {
                                                equals: email,
                                            },
                                        },
                                    })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); }))];
            case 2:
                _u.sent();
                _c = (_b = Promise).all;
                return [4 /*yield*/, payload.create({
                        collection: 'users',
                        data: {
                            email: 'demo-author@payloadcms.com',
                            name: 'Demo Author',
                            password: 'password',
                            roles: ['admin'],
                        },
                    })];
            case 3:
                _d = [
                    _u.sent()
                ];
                return [4 /*yield*/, payload.create({
                        collection: 'users',
                        data: {
                            email: 'demo-user@payloadcms.com',
                            name: 'Demo User',
                            password: 'password',
                            roles: ['user'],
                        },
                    })];
            case 4: return [4 /*yield*/, _c.apply(_b, [_d.concat([
                        _u.sent()
                    ])])];
            case 5:
                _a = _u.sent(), demoAuthorID = _a[0].id, demoUserID = _a[1].id;
                payload.logger.info("\u2014 Seeding media...");
                _g = (_f = Promise).all;
                return [4 /*yield*/, payload.create({
                        collection: 'media',
                        filePath: path_1.default.resolve(__dirname, 'image-1.jpg'),
                        data: image_1_1.image1,
                    })];
            case 6:
                _h = [
                    _u.sent()
                ];
                return [4 /*yield*/, payload.create({
                        collection: 'media',
                        filePath: path_1.default.resolve(__dirname, 'image-2.jpg'),
                        data: image_2_1.image2,
                    })];
            case 7: return [4 /*yield*/, _g.apply(_f, [_h.concat([
                        _u.sent()
                    ])])];
            case 8:
                _e = _u.sent(), image1Doc = _e[0], image2Doc = _e[1];
                payload.logger.info("\u2014 Seeding categories...");
                _l = (_k = Promise).all;
                return [4 /*yield*/, payload.create({
                        collection: 'categories',
                        data: {
                            title: 'Technology',
                        },
                    })];
            case 9:
                _m = [
                    _u.sent()
                ];
                return [4 /*yield*/, payload.create({
                        collection: 'categories',
                        data: {
                            title: 'News',
                        },
                    })];
            case 10:
                _m = _m.concat([
                    _u.sent()
                ]);
                return [4 /*yield*/, payload.create({
                        collection: 'categories',
                        data: {
                            title: 'Finance',
                        },
                    })];
            case 11:
                _m = _m.concat([
                    _u.sent()
                ]);
                return [4 /*yield*/, payload.create({
                        collection: 'categories',
                        data: {
                            title: 'Design',
                        },
                    })];
            case 12:
                _m = _m.concat([
                    _u.sent()
                ]);
                return [4 /*yield*/, payload.create({
                        collection: 'categories',
                        data: {
                            title: 'Software',
                        },
                    })];
            case 13:
                _m = _m.concat([
                    _u.sent()
                ]);
                return [4 /*yield*/, payload.create({
                        collection: 'categories',
                        data: {
                            title: 'Engineering',
                        },
                    })];
            case 14: return [4 /*yield*/, _l.apply(_k, [_m.concat([
                        _u.sent()
                    ])])];
            case 15:
                _j = _u.sent(), technologyCategory = _j[0], newsCategory = _j[1], financeCategory = _j[2], designCat = _j[3], softwareCat = _j[4], engineeringCat = _j[5];
                image1ID = image1Doc.id;
                image2ID = image2Doc.id;
                if (payload.db.defaultIDType === 'text') {
                    image1ID = "\"".concat(image1Doc.id, "\"");
                    image2ID = "\"".concat(image2Doc.id, "\"");
                    demoAuthorID = "\"".concat(demoAuthorID, "\"");
                }
                payload.logger.info("\u2014 Seeding posts...");
                return [4 /*yield*/, payload.create({
                        collection: 'posts',
                        data: JSON.parse(JSON.stringify(__assign(__assign({}, post_1_1.post1), { categories: [technologyCategory.id] }))
                            .replace(/"\{\{IMAGE\}\}"/g, image1ID)
                            .replace(/"\{\{AUTHOR\}\}"/g, demoAuthorID)),
                    })];
            case 16:
                post1Doc = _u.sent();
                return [4 /*yield*/, payload.create({
                        collection: 'posts',
                        data: JSON.parse(JSON.stringify(__assign(__assign({}, post_2_1.post2), { categories: [newsCategory.id] }))
                            .replace(/"\{\{IMAGE\}\}"/g, image1ID)
                            .replace(/"\{\{AUTHOR\}\}"/g, demoAuthorID)),
                    })];
            case 17:
                post2Doc = _u.sent();
                return [4 /*yield*/, payload.create({
                        collection: 'posts',
                        data: JSON.parse(JSON.stringify(__assign(__assign({}, post_3_1.post3), { categories: [financeCategory.id] }))
                            .replace(/"\{\{IMAGE\}\}"/g, image1ID)
                            .replace(/"\{\{AUTHOR\}\}"/g, demoAuthorID)),
                    })];
            case 18:
                post3Doc = _u.sent();
                posts = [post1Doc, post2Doc, post3Doc];
                _p = (_o = Promise).all;
                return [4 /*yield*/, payload.update({
                        collection: 'posts',
                        id: post1Doc.id,
                        data: {
                            relatedPosts: [post2Doc.id, post3Doc.id],
                        },
                    })];
            case 19:
                _q = [
                    _u.sent()
                ];
                return [4 /*yield*/, payload.update({
                        collection: 'posts',
                        id: post2Doc.id,
                        data: {
                            relatedPosts: [post1Doc.id, post3Doc.id],
                        },
                    })];
            case 20:
                _q = _q.concat([
                    _u.sent()
                ]);
                return [4 /*yield*/, payload.update({
                        collection: 'posts',
                        id: post3Doc.id,
                        data: {
                            relatedPosts: [post1Doc.id, post2Doc.id],
                        },
                    })];
            case 21: 
            // update each post with related posts
            return [4 /*yield*/, _p.apply(_o, [_q.concat([
                        _u.sent()
                    ])])];
            case 22:
                // update each post with related posts
                _u.sent();
                payload.logger.info("\u2014 Seeding comments...");
                return [4 /*yield*/, Promise.all(posts.map(function (post, index) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, payload.create({
                                        collection: 'comments',
                                        data: {
                                            _status: 'published',
                                            comment: "This is a comment on post ".concat(index + 1, ". It has been approved by an admin and is now visible to the public. You can leave your own comment on this post using the form below."),
                                            user: demoUserID,
                                            doc: post.id,
                                        },
                                    })];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); }))];
            case 23:
                _u.sent();
                payload.logger.info("\u2014 Seeding projects...");
                return [4 /*yield*/, payload.create({
                        collection: 'projects',
                        data: JSON.parse(JSON.stringify(__assign(__assign({}, project_1_1.project1), { categories: [designCat.id] })).replace(/"\{\{IMAGE\}\}"/g, image2ID)),
                    })];
            case 24:
                project1Doc = _u.sent();
                return [4 /*yield*/, payload.create({
                        collection: 'projects',
                        data: JSON.parse(JSON.stringify(__assign(__assign({}, project_2_1.project2), { categories: [softwareCat.id] })).replace(/"\{\{IMAGE\}\}"/g, image2ID)),
                    })];
            case 25:
                project2Doc = _u.sent();
                return [4 /*yield*/, payload.create({
                        collection: 'projects',
                        data: JSON.parse(JSON.stringify(__assign(__assign({}, project_3_1.project3), { categories: [engineeringCat.id] })).replace(/"\{\{IMAGE\}\}"/g, image2ID)),
                    })
                    // update each project with related projects
                ];
            case 26:
                project3Doc = _u.sent();
                _s = (_r = Promise).all;
                return [4 /*yield*/, payload.update({
                        collection: 'projects',
                        id: project1Doc.id,
                        data: {
                            relatedProjects: [project2Doc.id, project3Doc.id],
                        },
                    })];
            case 27:
                _t = [
                    _u.sent()
                ];
                return [4 /*yield*/, payload.update({
                        collection: 'projects',
                        id: project2Doc.id,
                        data: {
                            relatedProjects: [project1Doc.id, project3Doc.id],
                        },
                    })];
            case 28:
                _t = _t.concat([
                    _u.sent()
                ]);
                return [4 /*yield*/, payload.update({
                        collection: 'projects',
                        id: project3Doc.id,
                        data: {
                            relatedProjects: [project1Doc.id, project2Doc.id],
                        },
                    })];
            case 29: 
            // update each project with related projects
            return [4 /*yield*/, _s.apply(_r, [_t.concat([
                        _u.sent()
                    ])])];
            case 30:
                // update each project with related projects
                _u.sent();
                payload.logger.info("\u2014 Seeding posts page...");
                return [4 /*yield*/, payload.create({
                        collection: 'pages',
                        data: JSON.parse(JSON.stringify(posts_page_1.postsPage).replace(/"\{\{IMAGE\}\}"/g, image1ID)),
                    })];
            case 31:
                postsPageDoc = _u.sent();
                payload.logger.info("\u2014 Seeding projects page...");
                return [4 /*yield*/, payload.create({
                        collection: 'pages',
                        data: JSON.parse(JSON.stringify(projects_page_1.projectsPage).replace(/"\{\{IMAGE\}\}"/g, image1ID)),
                    })];
            case 32:
                projectsPageDoc = _u.sent();
                postsPageID = postsPageDoc.id;
                projectsPageID = projectsPageDoc.id;
                if (payload.db.defaultIDType === 'text') {
                    postsPageID = "\"".concat(postsPageID, "\"");
                    projectsPageID = "\"".concat(projectsPageID, "\"");
                }
                payload.logger.info("\u2014 Seeding home page...");
                return [4 /*yield*/, payload.create({
                        collection: 'pages',
                        data: JSON.parse(JSON.stringify(home_1.home)
                            .replace(/"\{\{IMAGE_1\}\}"/g, image1ID)
                            .replace(/"\{\{IMAGE_2\}\}"/g, image2ID)
                            .replace(/"\{\{POSTS_PAGE_ID\}\}"/g, postsPageID)
                            .replace(/"\{\{PROJECTS_PAGE_ID\}\}"/g, projectsPageID)),
                    })];
            case 33:
                _u.sent();
                payload.logger.info("\u2014 Seeding settings...");
                return [4 /*yield*/, payload.updateGlobal({
                        slug: 'settings',
                        data: {
                            postsPage: postsPageDoc.id,
                            projectsPage: projectsPageDoc.id,
                        },
                    })];
            case 34:
                _u.sent();
                payload.logger.info("\u2014 Seeding header...");
                return [4 /*yield*/, payload.updateGlobal({
                        slug: 'header',
                        data: {
                            navItems: [
                                {
                                    link: {
                                        type: 'reference',
                                        reference: {
                                            relationTo: 'pages',
                                            value: postsPageDoc.id,
                                        },
                                        label: 'Posts',
                                    },
                                },
                                {
                                    link: {
                                        type: 'reference',
                                        reference: {
                                            relationTo: 'pages',
                                            value: projectsPageDoc.id,
                                        },
                                        label: 'Projects',
                                    },
                                },
                            ],
                        },
                    })];
            case 35:
                _u.sent();
                payload.logger.info('Seeded database successfully!');
                return [2 /*return*/];
        }
    });
}); };
exports.seed = seed;
//# sourceMappingURL=index.js.map