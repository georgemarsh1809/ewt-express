import type { PortableTextBlock } from '@portabletext/react';

interface SanityImage {
    asset: { _ref: string };
    alt?: string;
}

export interface Hero {
    eyebrowText: string;
    headlinePrefix: string;
    highlightedWord: string;
    headlineSuffix: string;
    subheadline: string;
    primaryCtaText: string;
    secondaryCtaText: string;
    heroImage?: SanityImage;
}

export interface About {
    body: PortableTextBlock[];
    stats: Array<{ value: string; label: string }>;
}

export interface Services {
    heading: string;
    intro: string;
    items: Array<{ title: string; description: string }>;
}

export interface Fleet {
    heading: string;
    sideNotePrefix: string;
    sideNoteHighlight: string;
    sideNoteSuffix: string;
    vehicles: Array<{
        name: string;
        modelBadge: string;
        description: string;
        image?: SanityImage;
    }>;
}

export interface Contact {
    headingPrefix: string;
    headingHighlight: string;
    intro: string;
    phones: string[];
    emails: string[];
    website: string;
    address: string;
}
