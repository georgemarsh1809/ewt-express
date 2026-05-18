import { createClient } from '@sanity/client';

export const sanityClient = createClient({
    projectId: 'gl7ri06g',
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: true,
});

// Helper to get a full image URL from a Sanity image reference
export function urlFor(
    source: { asset?: { _ref?: string } } | null | undefined,
): string | null {
    if (!source?.asset?._ref) return null;
    // _ref format: image-{id}-{dimensions}-{format}
    // e.g. image-abc123-2000x1500-jpg
    const ref = source.asset._ref;
    const [, id, dimensions, format] = ref.split('-');
    return `https://cdn.sanity.io/images/gl7ri06g/production/${id}-${dimensions}.${format}`;
}
