import van from '@/assets/van-sprinter.png';

export default function Hero() {
    return (
        <section
            id="top"
            className="relative pt-28 md:pt-32 pb-20 md:pb-28 overflow-hidden"
        >
            <div className="mx-auto max-w-[1280px] px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
                <div className="lg:col-span-6 relative z-10">
                    <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Dartford · Kent · Nationwide
                    </div>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.02] tracking-tight text-foreground">
                        Refrigerated transport.
                        <br />
                        <span className="text-primary">Fast.</span> Reliable.
                        24/7.
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                        Last-mile deliveries into London and nationwide
                        coverage. Temperature-controlled from −20°C to +20°C —
                        ambient, chilled, or frozen.
                    </p>
                    <div className="mt-9 flex flex-wrap gap-3">
                        <a
                            href="#contact"
                            className="inline-flex items-center rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-semibold hover:bg-foreground/90 transition-colors"
                        >
                            Get a Quote
                        </a>
                        <a
                            href="#fleet"
                            className="inline-flex items-center rounded-full border border-border bg-background px-7 py-3.5 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
                        >
                            Our Fleet
                        </a>
                    </div>
                </div>
                <div className="lg:col-span-6 relative">
                    <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/10 via-transparent to-accent/15 blur-2xl" />
                    <div className="relative rounded-2xl overflow-hidden bg-muted">
                        <img
                            src={van}
                            alt="EWT Express refrigerated Mercedes Sprinter van"
                            className="w-full h-[420px] sm:h-[520px] lg:h-[600px] object-cover"
                            loading="eager"
                            fetchPriority="high"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
