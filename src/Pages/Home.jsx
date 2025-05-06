import About from "../Components/About/About";
import Banner from "../Components/Banner/Banner";
import Contact from "../Components/Contact/Contact";
import Projects from "../Components/Projects/Projects";
import Skills from "../Components/Skills/Skills";

const Home = () => {
    return (
        <div className="container mx-auto">
            <div id="home">
                <Banner />
            </div>
            <div id="about">
                <About />
            </div>
            <div id="skills">
                <Skills />
            </div>
            <div id="projects">
                <Projects />
            </div>
            <div id="contact">
                <Contact />
            </div>
        </div>
    );
};

export default Home;
