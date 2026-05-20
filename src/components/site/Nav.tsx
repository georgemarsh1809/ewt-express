import { useState } from 'react';
import logo from '@/assets/express-logo.png';

const links = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#fleet', label: 'Fleet' },
    { href: '#contact', label: 'Contact' },
];

export default function Nav() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 inset-x-0 z-50 bg-white border-b border-border shadow-[0_1px_0_rgba(0,0,0,0.02)]">
            <div className="mx-auto max-w-[1280px] px-6 lg:px-10 h-16 md:h-20 flex items-center justify-between">
                <a
                    href="#top"
                    className="flex flex-col items-center"
                    aria-label="EWT Express home"
                >
                    <img
                        src={logo}
                        alt="EWT Express"
                        className="h-7 md:h-11 w-auto"
                    />
                    <span className="text-[0.68rem] text-primary font-semibold uppercase tracking-widest mt-0.5">
                        Temperature Controlled Transport
                    </span>
                </a>
                <nav className="hidden md:flex items-center gap-9">
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                        >
                            {l.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="inline-flex items-center rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-semibold hover:bg-foreground/90 transition-colors"
                    >
                        Get in touch
                    </a>
                </nav>
                <button
                    className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-foreground"
                    aria-label="Toggle menu"
                    onClick={() => setOpen((o) => !o)}
                >
                    <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        {open ? (
                            <path d="M6 6l12 12M18 6L6 18" />
                        ) : (
                            <>
                                <path d="M4 7h16" />
                                <path d="M4 17h16" />
                            </>
                        )}
                    </svg>
                </button>
            </div>
            {open && (
                <div className="md:hidden border-t border-border bg-background">
                    <div className="px-6 py-4 flex flex-col gap-1">
                        {links.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                onClick={() => setOpen(false)}
                                className="py-3 text-base font-medium text-foreground"
                            >
                                {l.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setOpen(false)}
                            className="mt-2 inline-flex items-center justify-center rounded-full bg-foreground text-background px-5 py-3 text-sm font-semibold"
                        >
                            Get a Quote
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
