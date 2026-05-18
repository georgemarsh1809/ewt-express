export default function Contact() {
    return (
        <section
            id="contact"
            className="scroll-mt-24 py-24 md:py-32 border-t border-border bg-foreground text-background"
        >
            <div className="mx-auto max-w-[1280px] px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
                <div className="lg:col-span-5">
                    <div className="text-sm font-semibold text-accent uppercase tracking-widest">
                        Contact
                    </div>
                    <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                        Need a quote?
                        <br />
                        <span className="text-accent">We&apos;re here.</span>
                    </h2>
                    <p className="mt-6 text-base md:text-lg text-background/70 max-w-md leading-relaxed">
                        Speak to the team about a one-off run, regular work, or
                        storage. 24/7, every day of the year.
                    </p>
                </div>
                <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-8 gap-y-10 lg:pl-8">
                    <div>
                        <div className="text-xs uppercase tracking-widest text-background/50 font-semibold">
                            Phone
                        </div>
                        <div className="mt-2 space-y-1">
                            <a
                                href="tel:+441322276684"
                                className="block text-xl md:text-2xl font-semibold text-background hover:text-accent transition-colors"
                            >
                                01322 276684
                            </a>
                            <a
                                href="tel:+447523920294"
                                className="block text-xl md:text-2xl font-semibold text-background hover:text-accent transition-colors"
                            >
                                07523 920294
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="text-xs uppercase tracking-widest text-background/50 font-semibold">
                            Email
                        </div>
                        <div className="mt-2 space-y-1">
                            <a
                                href="mailto:sales@ewtexpress.co.uk"
                                className="block text-xl md:text-2xl font-semibold text-background hover:text-accent transition-colors"
                            >
                                sales@ewtexpress.co.uk
                            </a>
                            <a
                                href="mailto:awood@ewtdartford.co.uk"
                                className="block text-xl md:text-2xl font-semibold text-background hover:text-accent transition-colors"
                            >
                                awood@ewtdartford.co.uk
                            </a>
                        </div>
                    </div>
                    <ContactBlock
                        label="Website"
                        value="ewtdartford.co.uk"
                        href="https://www.ewtdartford.co.uk"
                    />
                    <ContactBlock
                        label="Based in"
                        value={'Dartford, Kent\nUnited Kingdom'}
                    />
                </div>
            </div>
        </section>
    );
}

function ContactBlock({
    label,
    value,
    href,
}: {
    label: string;
    value: string;
    href?: string;
}) {
    const content = (
        <>
            <div className="text-xs uppercase tracking-widest text-background/50 font-semibold">
                {label}
            </div>
            <div className="mt-2 text-xl md:text-2xl font-semibold whitespace-pre-line group-hover:text-accent transition-colors">
                {value}
            </div>
        </>
    );
    return href ? (
        <a
            href={href}
            className="group block border-t border-background/15 pt-5"
        >
            {content}
        </a>
    ) : (
        <div className="border-t border-background/15 pt-5">{content}</div>
    );
}
