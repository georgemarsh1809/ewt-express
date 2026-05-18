import { PortableText } from '@portabletext/react';
import type { About as AboutType } from '@/lib/sanity-types';

export default function About({ data }: { data: AboutType }) {
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
                    <PortableText
                        value={data.body}
                        components={{
                            block: {
                                normal: ({ children }) => <p>{children}</p>,
                            },
                        }}
                    />
                </div>
            </div>
            <div className="mx-auto max-w-[1280px] px-6 lg:px-10 mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                {data.stats.map((s) => (
                    <div
                        key={s.label}
                        className="bg-background/60 backdrop-blur-sm border border-border rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                            {s.value}
                        </div>
                        <div className="mt-3 text-sm text-muted-foreground font-medium">
                            {s.label}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
