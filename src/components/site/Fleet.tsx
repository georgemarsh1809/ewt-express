import { urlFor } from '@/lib/sanity';
import type { Fleet as FleetType } from '@/lib/sanity-types';

export default function Fleet({ data }: { data: FleetType }) {
    return (
        <section id="fleet" className="scroll-mt-24 py-24 md:py-32 bg-slate-50">
            <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
                <div className="flex flex-col gap-6 max-w-3xl">
                    <div>
                        <div className="text-2xl font-semibold text-primary uppercase tracking-widest">
                            Fleet
                        </div>
                        <h2 className="mt-4 text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                            {data.heading}
                        </h2>
                    </div>
                    <p className="text-lg text-foreground leading-relaxed">
                        {data.sideNotePrefix}{' '}
                        <span className="font-semibold text-foreground">
                            {data.sideNoteHighlight}
                        </span>{' '}
                        {data.sideNoteSuffix}
                    </p>
                </div>

                <div className="mt-8 grid md:grid-cols-3 gap-8 lg:gap-10">
                    {data.vehicles.map((v) => {
                        const imageUrl = urlFor(v.image);
                        return (
                            <article
                                key={v.name}
                                className="group flex flex-col border-2 rounded-2xl p-4 border-transparent"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted shadow-md group-hover:shadow-lg transition-shadow border-2 border-gray-400">
                                    {imageUrl ? (
                                        <img
                                            src={imageUrl}
                                            alt={v.image?.alt || v.name}
                                            loading="lazy"
                                            className="w-full h-full object-cover scale-125"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-secondary text-muted-foreground text-sm">
                                            Photo coming soon
                                        </div>
                                    )}
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                                        {v.name}{' '}
                                        <span className="text-xs font-mono text-foreground/70 uppercase tracking-wider whitespace-nowrap ml-2">
                                            {v.modelBadge}
                                        </span>
                                    </h3>
                                </div>
                                <p className="mt-3 text-base text-foreground/75 leading-relaxed">
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
