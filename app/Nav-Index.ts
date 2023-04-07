export type Item = {
    name: string;
    slug: string;
    description?: string;
    icon: string;
};

export const NavIndex: { items: Item[] }[] = [
    {
        items: [
            {
            name: 'Flux',
            slug: 'flux',
            description: 'string',
            icon: 'flux',
            },
        ],
    },
    {
        items: [
            {
            name: 'The World',
            slug: 'the-world',
            description: 'string',
            icon: 'theworld',
            },
        ],
    },
    {
        items: [
            {
            name: 'Artifact Database',
            slug: 'artifact-database',
            description: 'string',
            icon: 'artifactdatabase',
            },
        ],
    },
    {
        items: [
            {
            name: 'Developer Log',
            slug: 'dev-log',
            description: 'string',
            icon: 'devlog',
            },
        ],
    },
];