const stats = [
    { v: '24/7', l: 'Operation' },
    { v: '3,000', l: 'Pallet capacity' },
    { v: '−20° / +20°C', l: 'Temperature range' },
    { v: 'UK-wide', l: 'Coverage' },
];

export default function About() {
    return (
        <section
            id="about"
            className="scroll-mt-24 py-24 md:py-32 border-t border-border"
        >
            <div className="mx-auto max-w-[1280px] px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
                <div className="lg:col-span-4">
                    <div className="text-sm font-semibold text-primary uppercase tracking-widest">
                        About
                    </div>
                </div>
                <div className="lg:col-span-8 space-y-6 text-lg md:text-xl text-foreground/85 leading-relaxed max-w-2xl">
                    <p>
                        EWT Express is a Dartford-based refrigerated transport
                        company, specialising in last-mile deliveries into
                        London and operating nationwide.
                    </p>
                    <p>
                        We run around the clock, every day of the year — keeping
                        your goods at the right temperature from −20°C to +20°C,
                        whether you need ambient, chilled, or frozen.
                    </p>
                    <p>
                        Modern fleet. Trained drivers. A 3,000-pallet chilled
                        warehouse on site. Built for businesses that can&apos;t
                        afford to wait.
                    </p>
                </div>
            </div>
            <div className="mx-auto max-w-[1280px] px-6 lg:px-10 mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((s) => (
                    <div
                        key={s.l}
                        className="bg-background/60 backdrop-blur-sm border border-border rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                            {s.v}
                        </div>
                        <div className="mt-3 text-sm text-muted-foreground font-medium">
                            {s.l}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
