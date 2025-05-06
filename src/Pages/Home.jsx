import About from "../Components/About/About";
import Banner from "../Components/Banner/Banner";
import Contact from "../Components/Contact/Contact";
import Projects from "../Components/Projects/Projects";
import Skills from "../Components/Skills/Skills";


const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;