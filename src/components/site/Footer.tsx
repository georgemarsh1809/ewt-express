import logo from '@/assets/express-logo.png';

const links = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#fleet', label: 'Fleet' },
    { href: '#contact', label: 'Contact' },
];

export default function Footer() {
    return (
        <footer className="py-12 border-t border-border">
            <div className="mx-auto max-w-[1280px] px-6 lg:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                <div className="flex items-center gap-4">
                    <img src={logo} alt="EWT Express" className="h-7 w-auto" />
                    <span className="text-sm text-muted-foreground hidden sm:inline">
                        Refrigerated transport, 24/7.
                    </span>
                </div>
                <nav className="flex flex-wrap gap-x-8 gap-y-2">
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>
                <div className="text-xs text-muted-foreground">
                    © {new Date().getFullYear()} EWT Express. All rights
                    reserved.
                </div>
            </div>
        </footer>
    );
}
