"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.project3 = void 0;
exports.project3 = {
    title: 'Project 3',
    slug: 'project-3',
    _status: 'published',
    meta: {
        title: 'Project 1',
        description: 'This is the third project.',
        image: '{{IMAGE}}',
    },
    hero: {
        type: 'lowImpact',
        links: null,
        richText: [
            {
                children: [
                    {
                        text: 'Project 3',
                    },
                ],
                type: 'h1',
            },
        ],
        media: null,
    },
    layout: [
        {
            blockType: 'content',
            columns: [
                {
                    size: 'twoThirds',
                    richText: [
                        {
                            children: [
                                {
                                    text: "This content is completely dynamic using custom layout building blocks configured in the CMS. This can be anything you'd like from rich text and images, to highly designed, complex components.",
                                },
                            ],
                        },
                    ],
                    link: {
                        reference: null,
                        url: '',
                        label: '',
                    },
                },
            ],
        },
    ],
    relatedProjects: [], // this is populated by the seed script
};
//# sourceMappingURL=project-3.js.map