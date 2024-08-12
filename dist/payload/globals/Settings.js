"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Settings = void 0;
exports.Settings = {
    slug: 'settings',
    typescript: {
        interface: 'Settings',
    },
    graphQL: {
        name: 'Settings',
    },
    access: {
        read: function () { return true; },
    },
    fields: [
        {
            name: 'postsPage',
            type: 'relationship',
            relationTo: 'pages',
            label: 'Posts page',
        },
        {
            name: 'projectsPage',
            type: 'relationship',
            relationTo: 'pages',
            label: 'Projects page',
        },
    ],
};
//# sourceMappingURL=Settings.js.map