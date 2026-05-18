const services = [
    {
        n: '01',
        t: 'Modern Temperature-Controlled Fleet',
        d: 'Our fleet of refrigerated vans, 18T HGVs and 26T HGVs can operate across ambient, chilled and frozen temperatures from -20°C to +20°C. All vehicles have split temperature capability to maximise efficiency and convenience.',
    },
    {
        n: '02',
        t: 'Dedicated Distribution',
        d: 'We offer dedicated transport solutions for businesses requiring regular scheduled deliveries, ensuring your goods are delivered safely, efficiently and on time.',
    },
    {
        n: '03',
        t: 'Ad Hoc & Urgent Deliveries',
        d: 'Need a last-minute transport solution? EWT Express was built to handle urgent and time-critical deliveries, with rapid response services available around the clock.',
    },
    {
        n: '04',
        t: 'Pallet Network Distribution',
        d: 'We provide pallet network services for customers looking for cost-effective nationwide pallet distribution, supported by our strategically located Dartford operation.',
    },
    {
        n: '05',
        t: '3,000 Pallet Chilled Warehouse',
        d: 'Our chilled warehouse facility offers storage capacity for up to 3,000 pallets, ideal for importers, growers, and businesses needing flexible warehousing and onward distribution support.',
    },
    {
        n: '06',
        t: 'London & Nationwide Coverage',
        d: 'Strategically based just outside London in Dartford, Kent, we provide fast access into the capital while offering efficient nationwide delivery coverage throughout the UK.',
    },
];

export default function Services() {
    return (
        <section
            id="services"
            className="scroll-mt-24 py-24 md:py-32 bg-muted/40 border-y border-border"
        >
            <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
                <div className="max-w-3xl mb-6">
                    <div className="text-sm font-semibold text-primary uppercase tracking-widest">
                        Services
                    </div>
                    <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                        What we do, end&nbsp;to&nbsp;end.
                    </h2>
                    <p className="mt-6 text-lg text-foreground/85 leading-relaxed">
                        At EWT Express, we provide flexible temperature-controlled logistics solutions tailored to the needs of businesses across London and the UK. Whether you require a one-off urgent delivery or ongoing distribution support, our experienced team and modern fleet are available 24/7 to keep your supply chain moving.
                    </p>
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
