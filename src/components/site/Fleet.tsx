import { urlFor } from '@/lib/sanity';
import type { Fleet as FleetType } from '@/lib/sanity-types';

export default function Fleet({ data }: { data: FleetType }) {
    return (
        <section id="fleet" className="scroll-mt-24 py-24 md:py-32">
            <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 max-w-3xl">
                    <div>
                        <div className="text-sm font-semibold text-primary uppercase tracking-widest">
                            Fleet
                        </div>
                        <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                            {data.heading}
                        </h2>
                    </div>
                    <p className="text-sm text-muted-foreground md:max-w-xs">
                        {data.sideNotePrefix}{' '}
                        <span className="font-semibold text-foreground">
                            {data.sideNoteHighlight}
                        </span>{' '}
                        {data.sideNoteSuffix}
                    </p>
                </div>

                <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
                    {data.vehicles.map((v) => {
                        const imageUrl = urlFor(v.image);
                        return (
                            <article
                                key={v.name}
                                className="group flex flex-col"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                                    {imageUrl ? (
                                        <img
                                            src={imageUrl}
                                            alt={v.image?.alt || v.name}
                                            loading="lazy"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-secondary text-muted-foreground text-sm">
                                            Photo coming soon
                                        </div>
                                    )}
                                </div>
                                <div className="mt-6 flex items-baseline justify-between gap-4">
                                    <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                                        {v.name}
                                    </h3>
                                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                                        {v.modelBadge}
                                    </span>
                                </div>
                                <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                                    {v.description}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
