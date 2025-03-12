import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaDiscord, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";

const Contact = () => {
    const handleType = (count) => {
        console.log(count);
    };

    const handleDone = () => {
        console.log(`Done after 5 loops!`);
    };
    return (
        <div className="flex flex-col justify-center items-center py-20">
            <div className="mb-4 text-center font-code text-3xl lg:text-4xl font-exo font-bold">
                Contact 
                <Typewriter
                words={[" Me", " Coded-Adil", " Adil Rahman", " Myself"]}
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
                <a href="https://github.com/Coded-Adil" className="text-5xl hover:border hover:rounded-full p-4" target="block"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/coded-adil" className="text-5xl hover:border hover:rounded-full p-4" target="block"><FaLinkedin /></a>
                <a href="https://discord.com/channels/@__akuma.__" className="text-5xl hover:border hover:rounded-full p-4" target="block"><FaDiscord /></a>
                <a href="https://www.instagram.com/_.adil_rahman._" className="text-5xl hover:border hover:rounded-full p-4" target="block"><FaInstagram /></a>
                <a href="https://x.com/adil_xr" className="text-5xl hover:border hover:rounded-full p-4" target="block"><FaXTwitter /></a>
                <a href="mailto:itsadil2022@gmail.com?subject=Inquiry&body=Hello, I would like 
                to know more about..." className="text-5xl hover:border hover:rounded-full p-4" target="block"><SiGmail /></a>
            </div>
        </div>
    );
};

export default Contact;