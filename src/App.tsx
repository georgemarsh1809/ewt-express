import Nav from './components/site/Nav';
import Hero from './components/site/Hero';
import About from './components/site/About';
import Services from './components/site/Services';
import Fleet from './components/site/Fleet';
import Contact from './components/site/Contact';
import Footer from './components/site/Footer';

function App() {
    return (
        <>
            <Nav />
            <main>
                <Hero />
                <About />
                <Services />
                <Fleet />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default App;
