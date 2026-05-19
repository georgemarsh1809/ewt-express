import { urlFor } from '@/lib/sanity';
import type { Hero as HeroType } from '@/lib/sanity-types';

export default function Hero({ data }: { data: HeroType }) {
    const imageUrl = urlFor(data.heroImage);

    return (
        <section
            id="top"
            className="relative pt-28 md:pt-32 min-h-[85vh] overflow-hidden flex items-center justify-center"
        >
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt={
                        data.heroImage?.alt ||
                        'EWT Express refrigerated van'
                    }
                    className="absolute inset-0 w-full h-full object-cover -z-20"
                    loading="eager"
                    fetchPriority="high"
                    aria-hidden="true"
                    style={{ filter: 'saturate(0.8) brightness(0.85)' }}
                />
            )}

            {!imageUrl && (
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 -z-20" />
            )}

            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 -z-10" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium text-white mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {data.eyebrowText}
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.02] tracking-tight text-white">
                    {data.headlinePrefix}
                    <br />
                    <span className="text-accent">
                        {data.highlightedWord}
                    </span>{' '}
                    {data.headlineSuffix}
                </h1>
                <p className="mt-6 text-lg md:text-xl text-white/85 max-w-xl mx-auto leading-relaxed">
                    {data.subheadline}
                </p>
                <div className="mt-9 flex flex-wrap gap-3 justify-center">
                    <a
                        href="#contact"
                        className="inline-flex items-center rounded-full bg-white text-black px-7 py-3.5 text-sm font-semibold hover:bg-white/90 transition-colors"
                    >
                        {data.primaryCtaText}
                    </a>
                    <a
                        href="#fleet"
                        className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
                    >
                        {data.secondaryCtaText}
                    </a>
                </div>
            </div>
        </section>
    );
}
