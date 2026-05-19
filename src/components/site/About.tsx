import { PortableText } from '@portabletext/react';
import adamImage from '@/assets/adam.jpeg';
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
                <div className="mt-6 space-y-6 text-base md:text-lg text-foreground leading-relaxed">
                    <img
                        src={adamImage}
                        alt="Adam"
                        className="float-left w-60 h-60 md:w-80 md:h-80 rounded-full object-cover mr-8 mb-6"
                    />
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
                        className="border-gray-300 bg-gray-100 border-2 rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center justify-center text-center"
                    >
                        <div className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                            {s.value}
                        </div>
                        <div className="mt-4 text-sm text-foreground/75 font-medium">
                            {s.label}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
