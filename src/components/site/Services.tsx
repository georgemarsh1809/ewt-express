import type { Services as ServicesType } from '@/lib/sanity-types';

export default function Services({ data }: { data: ServicesType }) {
    return (
        <section
            id="services"
            className="scroll-mt-24 py-24 md:py-32 bg-muted/40 border-y border-border"
        >
            <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
                <div className="max-w-3xl mb-6">
                    <div className="text-2xl font-semibold text-primary uppercase tracking-widest">
                        Services
                    </div>
                    <h2 className="mt-4 text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                        {data.heading}
                    </h2>
                    <p className="mt-6 text-lg text-foreground leading-relaxed">
                        {data.intro}
                    </p>
                </div>
                <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
                    {data.items.map((s, i) => {
                        const iconClasses = [
                            'fa-snowflake', // Temperature-Controlled Fleet
                            'fa-cube', // Dedicated Distribution
                            'fa-bolt', // Ad Hoc & Urgent Deliveries
                            'fa-cubes', // Pallet Network Distribution
                            'fa-warehouse', // 3,000 Pallet Chilled Warehouse
                            'fa-map', // London & Nationwide Coverage
                        ];
                        return (
                            <div
                                key={s.title}
                                className="bg-background p-8 md:p-10 flex flex-col gap-6 min-h-[260px] rounded-2xl border-2 border-gray-300 shadow-md hover:shadow-lg transition-shadow"
                            >
                                <div className="flex items-start justify-between">
                                    <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground flex-1">
                                        {s.title}
                                    </h3>
                                    <i
                                        className={`fas ${iconClasses[i]} text-2xl text-gray-600 ml-4 flex-shrink-0`}
                                    ></i>
                                </div>
                                <p className="text-base text-foreground/75 leading-relaxed">
                                    {s.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
