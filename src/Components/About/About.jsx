import { GiPenguin } from 'react-icons/gi';
import adil from '../../../public/adil.jpg'
import { Typewriter } from "react-simple-typewriter";
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';
const About = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(
        mouseYSpring,
        [-0.5, 0.5],
        ["17.5deg", "-17.5deg"]
    );
    const rotateY = useTransform(
        mouseXSpring,
        [-0.5, 0.5],
        ["-17.5deg", "17.5deg"]
    );

    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    const handleType = (count) => {
        console.log(count);
    };

    const handleDone = () => {
        console.log(`Done after 5 loops!`);
    };

    return (
        <div className="hero max-w-6xl mx-auto my-8">
            <div className="hero-content gap-6 flex-col lg:flex-row">
                <motion.div
                    className='relative h-[340px] w-[340px] grid place-content-center bg-sky-300 rounded-xl'
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        rotateX,
                        rotateY,
                        transformStyle: 'preserve-3d'
                    }}>
                    <img
                        src={adil}
                        style={{
                            transform: "translateZ(75px)",
                        }}
                        className="max-w-xs rounded-lg shadow-2xl" />
                </motion.div>
                <div className='max-w-xl m-4 animate__animated animate__fadeInRight'>
                    <h1 className=" flex gap-2 text-4xl font-bold font-code"><GiPenguin />
                        About
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
                    </h1>
                    <p className="py-6 font-exo">
                        Hi! I’m Adil Rahman, a MERN Stack Developer with 8–9 months of experience in building scalable web applications.
                        I'm pursuing a BSc in CSE and have a strong background in C, C++, and Java (OOP), which sharpened my problem-solving skills.
                        <br /><br />
                        I love creating clean, efficient, and user-friendly apps, and I'm always eager to learn new technologies and build impactful projects.
                        <br /><br />
                        Let’s connect and build something awesome!
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 mx-auto my-6">
                        <a href="https://github.com/Coded-Adil" className="social animate__animated animate__zoomIn text-2xl mx-auto bg-gradient-to-tr from-sky-300 to-blue-500 rounded-full shadow-2xl p-4" target="block"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/coded-adil" className="social animate__animated animate__zoomIn mx-auto text-2xl bg-gradient-to-tr from-sky-300 to-blue-500 rounded-full shadow-2xl p-4" target="block"><FaLinkedin /></a>
                        <a href="https://discord.com/channels/@__akuma.__" className="social animate__animated animate__zoomIn mx-auto text-2xl bg-gradient-to-tr from-sky-300 to-blue-500 rounded-full shadow-2xl p-4" target="block"><FaDiscord /></a>
                        <a href="https://www.instagram.com/_.adil_rahman._" className="social animate__animated animate__zoomIn mx-auto text-2xl bg-gradient-to-tr from-sky-300 to-blue-500 rounded-full shadow-2xl p-4" target="block"><FaInstagram /></a>
                        <a href="https://x.com/adil_xr" className="social animate__animated animate__zoomIn text-2xl mx-auto bg-gradient-to-tr from-sky-300 to-blue-500 rounded-full shadow-2xl p-4" target="block"><FaXTwitter /></a>
                        <a href="mailto:itsadil2022@gmail.com?subject=Inquiry&body=Hello, I would like to know more about..." className="social animate__animated animate__zoomIn mx-auto text-2xl bg-gradient-to-tr from-sky-300 to-blue-500 rounded-full shadow-2xl p-4" target="block"><SiGmail /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;