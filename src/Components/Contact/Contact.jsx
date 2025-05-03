import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaDiscord, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";
import 'animate.css';

const Contact = () => {
    const handleType = (count) => {
        console.log(count);
    };

    const handleDone = () => {
        console.log(`Done after 5 loops!`);
    };
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="mb-4 text-center font-code text-3xl lg:text-4xl font-exo font-bold">
                Contact 
                <Typewriter
                words={[" Me", " Coded-Adil", " Adil Rahman"]}
                loop={50}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={handleDone}
                onType={handleType}
                />
            </div>
            <div className="flex flex-col md:flex-row gap-6 mx-auto my-6">
                <a href="https://github.com/Coded-Adil" className="social animate__animated animate__zoomIn text-5xl bg-gradient-to-tr from-sky-300 to-blue-500 rounded-full shadow-2xl p-4" target="block"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/coded-adil" className="social animate__animated animate__zoomIn text-5xl bg-gradient-to-tr from-sky-300 to-blue-500 rounded-full shadow-2xl p-4" target="block"><FaLinkedin /></a>
                <a href="https://discord.com/channels/@__akuma.__" className="social animate__animated animate__zoomIn text-5xl bg-gradient-to-tr from-sky-300 to-blue-500 rounded-full shadow-2xl p-4" target="block"><FaDiscord /></a>
                <a href="https://www.instagram.com/_.adil_rahman._" className="social animate__animated animate__zoomIn text-5xl bg-gradient-to-tr from-sky-300 to-blue-500 rounded-full shadow-2xl p-4" target="block"><FaInstagram /></a>
                <a href="https://x.com/adil_xr" className="social animate__animated animate__zoomIn text-5xl bg-gradient-to-tr from-sky-300 to-blue-500 rounded-full shadow-2xl p-4" target="block"><FaXTwitter /></a>
                <a href="mailto:itsadil2022@gmail.com?subject=Inquiry&body=Hello, I would like 
                to know more about..." className="social animate__animated animate__zoomIn text-5xl bg-gradient-to-tr from-sky-300 to-blue-500 rounded-full shadow-2xl p-4" target="block"><SiGmail /></a>
            </div>
        </div>
    );
};

export default Contact;