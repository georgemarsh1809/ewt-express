import { useEffect, useState } from 'react';
import { sanityClient } from './lib/sanity';
import type {
    Hero as HeroType,
    About as AboutType,
    Services as ServicesType,
    Fleet as FleetType,
    Contact as ContactType,
} from './lib/sanity-types';
import Nav from './components/site/Nav';
import Hero from './components/site/Hero';
import About from './components/site/About';
import Services from './components/site/Services';
import Fleet from './components/site/Fleet';
import Contact from './components/site/Contact';
import Footer from './components/site/Footer';

interface SiteContent {
    hero: HeroType;
    about: AboutType;
    services: ServicesType;
    fleet: FleetType;
    contact: ContactType;
}

function App() {
    const [content, setContent] = useState<SiteContent | null>(null);

    useEffect(() => {
        sanityClient
            .fetch<SiteContent>(
                `{
        "hero": *[_type == "hero"][0],
        "about": *[_type == "about"][0],
        "services": *[_type == "services"][0],
        "fleet": *[_type == "fleet"][0],
        "contact": *[_type == "contact"][0]
      }`,
            )
            .then(setContent)
            .catch((err) => console.error('Sanity fetch failed:', err));
    }, []);

    if (!content) {
        return null; // Or a minimal loading state if you prefer
    }

    return (
        <>
            <Nav />
            <main>
                <Hero data={content.hero} />
                <About data={content.about} />
                <Services data={content.services} />
                <Fleet data={content.fleet} />
                <Contact data={content.contact} />
            </main>
            <Footer />
        </>
    );
}

export default App;
