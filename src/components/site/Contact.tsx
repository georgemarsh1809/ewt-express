import type { Contact as ContactType } from '@/lib/sanity-types';

export default function Contact({ data }: { data: ContactType }) {
    return (
        <section
            id="contact"
            className="scroll-mt-24 py-24 md:py-32 border-t border-border bg-foreground text-background"
        >
            <div className="mx-auto max-w-[1280px] px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
                <div className="lg:col-span-5">
                    <div className="text-lg font-semibold text-accent uppercase tracking-widest">
                        Contact
                    </div>
                    <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                        {data.headingPrefix}
                        <br />
                        <span className="text-accent">
                            {data.headingHighlight}
                        </span>
                    </h2>
                    <p className="mt-6 text-base md:text-lg text-background/70 max-w-md leading-relaxed">
                        {data.intro}
                    </p>
                </div>
                <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-8 gap-y-10 lg:pl-8">
                    <div>
                        <div className="text-xs uppercase tracking-widest text-background/50 font-semibold">
                            Phone
                        </div>
                        <div className="mt-2 space-y-1">
                            {data.phones.map((phone) => (
                                <a
                                    key={phone}
                                    href={`tel:${phone.replace(/\s/g, '')}`}
                                    className="block text-xl md:text-2xl font-semibold text-background hover:text-accent transition-colors"
                                >
                                    {phone}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="text-xs uppercase tracking-widest text-background/50 font-semibold">
                            Email
                        </div>
                        <div className="mt-2 space-y-1">
                            {data.emails.map((email) => (
                                <a
                                    key={email}
                                    href={`mailto:${email}`}
                                    className="block text-xl md:text-2xl font-semibold text-background hover:text-accent transition-colors"
                                >
                                    {email}
                                </a>
                            ))}
                        </div>
                    </div>
                    <ContactBlock label="Based in" value={data.address} />
                    <ContactBlock
                        label="LinkedIn"
                        value="EWT Express"
                        href="https://www.linkedin.com/company/ewt-express/"
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
            <div className="mt-2 flex items-center gap-2 text-xl md:text-2xl font-semibold whitespace-pre-line group-hover:text-accent transition-colors">
                {value}
                {href && (
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="flex-shrink-0"
                    >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                )}
            </div>
        </>
    );
    return href ? (
        <a
            href={href}
            className="group block border-t border-background/15 pt-5"
            target="blank"
        >
            {content}
        </a>
    ) : (
        <div className="border-t border-background/15 pt-5">{content}</div>
    );
}
