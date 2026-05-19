import logo from '@/assets/express-logo.png';

export default function Footer() {
    return (
        <footer className="py-12 border-t border-border">
            <div className="mx-auto max-w-[1280px] px-6 lg:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                <div className="flex items-center gap-4">
                    <img
                        src={logo}
                        alt="EWT Express"
                        className="h-5 md:h-8 w-auto"
                    />
                    <span className="text-sm text-muted-foreground hidden sm:inline">
                        Refrigerated transport, 24/7.
                    </span>
                </div>

                <div className="text-xs text-muted-foreground">
                    © {new Date().getFullYear()} EWT Express. All rights
                    reserved.
                </div>
            </div>
        </footer>
    );
}
