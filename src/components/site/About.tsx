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
            <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
                <div>
                    <div className="text-sm font-semibold text-primary uppercase tracking-widest">
                        About
                    </div>
                </div>
                <div className="mt-6 space-y-6 text-lg md:text-xl text-foreground/85 leading-relaxed">
                    <p>
                        EWT Express is part of the EWT Group, originally established in 1968 as East Wickham Transport. Built on decades of experience within the transport and logistics industry, EWT Express was created to provide a fast, flexible and reliable temperature-controlled delivery solution for businesses across London and the UK.
                    </p>
                    <p>
                        Based in Dartford, Kent, we are strategically located just outside London, allowing us to provide rapid response times and efficient access into the capital. Our specialist fleet of temperature-controlled vehicles includes refrigerated vans, 18T HGVs and 26T HGVs, enabling us to handle everything from urgent last-minute deliveries to larger scheduled distribution requirements.
                    </p>
                    <p>
                        EWT Express was founded to support around-the-clock transport demands, offering a 24/7 service for ad hoc, direct and time-critical deliveries. Our smaller temperature-controlled vehicles also allow us to access delivery locations throughout London that artic lorries cannot reach, making us the ideal partner for last-mile and city-based refrigerated transport.
                    </p>
                    <p>
                        Alongside our transport services, EWT Express also operates a chilled warehouse facility with capacity for up to 3,000 pallets. Our storage solutions are ideal for companies importing goods into the UK for onward distribution, as well as growers and producers requiring reliable chilled storage space as part of their supply chain.
                    </p>
                    <p>
                        With a commitment to reliability, professionalism, and customer service, EWT Express delivers temperature-controlled logistics solutions you can depend on.
                    </p>
                </div>
            </div>
            <div className="mx-auto max-w-[1280px] px-6 lg:px-10 mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
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
