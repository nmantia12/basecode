"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Posts = void 0;
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
var populateAuthors_1 = require("./hooks/populateAuthors");
var revalidatePost_1 = require("./hooks/revalidatePost");
exports.Posts = {
    slug: 'posts',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'slug', 'updatedAt'],
        preview: function (doc) {
            return "".concat(process.env.PAYLOAD_PUBLIC_SERVER_URL, "/next/preview?url=").concat(encodeURIComponent("".concat(process.env.PAYLOAD_PUBLIC_SERVER_URL, "/posts/").concat(doc === null || doc === void 0 ? void 0 : doc.slug)), "&secret=").concat(process.env.PAYLOAD_PUBLIC_DRAFT_SECRET);
        },
    },
    hooks: {
        beforeChange: [populatePublishedAt_1.populatePublishedAt],
        afterChange: [revalidatePost_1.revalidatePost],
        afterRead: [populateArchiveBlock_1.populateArchiveBlock, populateAuthors_1.populateAuthors],
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
                date: {
                    pickerAppearance: 'dayAndTime',
                },
            },
            hooks: {
                beforeChange: [
                    function (_a) {
                        var siblingData = _a.siblingData, value = _a.value;
                        if (siblingData._status === 'published' && !value) {
                            return new Date();
                        }
                        return value;
                    },
                ],
            },
        },
        {
            name: 'authors',
            type: 'relationship',
            relationTo: 'users',
            hasMany: true,
            admin: {
                position: 'sidebar',
            },
        },
        // This field is only used to populate the user data via the `populateAuthors` hook
        // This is because the `user` collection has access control locked to protect user privacy
        // GraphQL will also not return mutated user data that differs from the underlying schema
        {
            name: 'populatedAuthors',
            type: 'array',
            admin: {
                readOnly: true,
                disabled: true,
            },
            access: {
                update: function () { return false; },
            },
            fields: [
                {
                    name: 'id',
                    type: 'text',
                },
                {
                    name: 'name',
                    type: 'text',
                },
            ],
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
                        {
                            name: 'enablePremiumContent',
                            label: 'Enable Premium Content',
                            type: 'checkbox',
                        },
                        {
                            name: 'premiumContent',
                            type: 'blocks',
                            access: {
                                read: function (_a) {
                                    var req = _a.req;
                                    return req.user;
                                },
                            },
                            blocks: [CallToAction_1.CallToAction, Content_1.Content, MediaBlock_1.MediaBlock, ArchiveBlock_1.Archive],
                        },
                    ],
                },
            ],
        },
        {
            name: 'relatedPosts',
            type: 'relationship',
            relationTo: 'posts',
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