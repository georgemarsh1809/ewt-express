import van from '@/assets/van-sprinter.png';
import truck18 from '@/assets/truck-18t.jpeg';

const fleet = [
    {
        t: 'Refrigerated Vans',
        s: 'Mercedes Sprinter',
        d: 'Modern, fully equipped refrigerated vans for last-mile and same-day delivery.',
        img: van,
        alt: 'EWT Express Mercedes Sprinter refrigerated van',
    },
    {
        t: '18T HGVs',
        s: 'Volvo FL',
        d: 'Reliable 18-tonne rigids for larger loads and multi-drop routes.',
        img: truck18,
        alt: 'EWT Express Volvo FL 18 tonne refrigerated lorry',
    },
    {
        t: '26T HGVs',
        s: 'High-capacity',
        d: 'High-capacity 26-tonne vehicles for maximum payload and efficiency.',
        img: null,
        alt: '26 tonne refrigerated HGV',
    },
];

export default function Fleet() {
    return (
        <section id="fleet" className="scroll-mt-24 py-24 md:py-32">
            <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 max-w-3xl">
                    <div>
                        <div className="text-sm font-semibold text-primary uppercase tracking-widest">
                            Fleet
                        </div>
                        <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                            A vehicle for every load.
                        </h2>
                    </div>
                    <p className="text-sm text-muted-foreground md:max-w-xs">
                        All vehicles are{' '}
                        <span className="font-semibold text-foreground">
                            split-temperature capable
                        </span>{' '}
                        — carry chilled and frozen on the same run.
                    </p>
                </div>

                <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
                    {fleet.map((f) => (
                        <article key={f.t} className="group flex flex-col">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                                {f.img ? (
                                    <img
                                        src={f.img}
                                        alt={f.alt}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                    />
                                ) : (
                                    // 26T HGV — real photo to be added
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-secondary text-muted-foreground text-sm">
                                        Photo coming soon
                                    </div>
                                )}
                            </div>
                            <div className="mt-6 flex items-baseline justify-between gap-4">
                                <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                                    {f.t}
                                </h3>
                                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                                    {f.s}
                                </span>
                            </div>
                            <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                                {f.d}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
