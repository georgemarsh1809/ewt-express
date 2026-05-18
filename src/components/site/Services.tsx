const services = [
    {
        n: '01',
        t: 'Chilled Warehouse',
        d: 'Secure, temperature-controlled storage with capacity for up to 3,000 pallets.',
    },
    {
        n: '02',
        t: 'Ad Hoc Transport',
        d: 'Vehicles available at short notice — day or night, weekends and holidays.',
    },
    {
        n: '03',
        t: 'Pallet Jobs',
        d: 'Single pallets to full loads, handled with care and delivered on time.',
    },
];

export default function Services() {
    return (
        <section
            id="services"
            className="scroll-mt-24 py-24 md:py-32 bg-muted/40 border-y border-border"
        >
            <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
                <div className="max-w-2xl">
                    <div className="text-sm font-semibold text-primary uppercase tracking-widest">
                        Services
                    </div>
                    <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                        What we do, end&nbsp;to&nbsp;end.
                    </h2>
                </div>
                <div className="mt-16 grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
                    {services.map((s) => (
                        <div
                            key={s.n}
                            className="bg-background p-8 md:p-10 flex flex-col gap-6 min-h-[260px]"
                        >
                            <div className="text-sm font-mono text-muted-foreground">
                                {s.n}
                            </div>
                            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
                                {s.t}
                            </h3>
                            <p className="text-base text-muted-foreground leading-relaxed mt-auto">
                                {s.d}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
