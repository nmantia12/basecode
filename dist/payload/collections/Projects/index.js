"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Projects = void 0;
var admins_1 = require("../../access/admins");
var adminsOrPublished_1 = require("../../access/adminsOrPublished");
var ArchiveBlock_1 = require("../../blocks/ArchiveBlock");
var CallToAction_1 = require("../../blocks/CallToAction");
var Content_1 = require("../../blocks/Content");
var MediaBlock_1 = require("../../blocks/MediaBlock");
var hero_1 = require("../../fields/hero");
var slug_1 = require("../../fields/slug");
var populateArchiveBlock_1 = require("../../hooks/populateArchiveBlock");
var populatePublishedAt_1 = require("../../hooks/populatePublishedAt");
var revalidateProject_1 = require("./hooks/revalidateProject");
exports.Projects = {
    slug: 'projects',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'slug', 'updatedAt'],
        preview: function (doc) {
            return "".concat(process.env.PAYLOAD_PUBLIC_SERVER_URL, "/next/preview?url=").concat(encodeURIComponent("".concat(process.env.PAYLOAD_PUBLIC_SERVER_URL, "/projects/").concat(doc === null || doc === void 0 ? void 0 : doc.slug)), "&secret=").concat(process.env.PAYLOAD_PUBLIC_DRAFT_SECRET);
        },
    },
    hooks: {
        beforeChange: [populatePublishedAt_1.populatePublishedAt],
        afterChange: [revalidateProject_1.revalidateProject],
        afterRead: [populateArchiveBlock_1.populateArchiveBlock],
    },
    versions: {
        drafts: true,
    },
    access: {
        read: adminsOrPublished_1.adminsOrPublished,
        update: admins_1.admins,
        create: admins_1.admins,
        delete: admins_1.admins,
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'categories',
            type: 'relationship',
            relationTo: 'categories',
            hasMany: true,
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'publishedAt',
            type: 'date',
            admin: {
                position: 'sidebar',
            },
        },
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'Hero',
                    fields: [hero_1.hero],
                },
                {
                    label: 'Content',
                    fields: [
                        {
                            name: 'layout',
                            type: 'blocks',
                            required: true,
                            blocks: [CallToAction_1.CallToAction, Content_1.Content, MediaBlock_1.MediaBlock, ArchiveBlock_1.Archive],
                        },
                    ],
                },
            ],
        },
        {
            name: 'relatedProjects',
            type: 'relationship',
            relationTo: 'projects',
            hasMany: true,
            filterOptions: function (_a) {
                var id = _a.id;
                return {
                    id: {
                        not_in: [id],
                    },
                };
            },
        },
        (0, slug_1.slugField)(),
    ],
};
//# sourceMappingURL=index.js.map