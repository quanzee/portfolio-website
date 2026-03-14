import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Writing from "../components/Writing";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Writing />
            <Contact />
            <Footer />
        </main>
    );
}

export default Home;