import { GiPenguin } from 'react-icons/gi';
import adil from '../../../public/adil.jpg'
import { Typewriter } from "react-simple-typewriter";
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
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
                        Hello! I’m Adil Rahman, a passionate MERN Stack Developer with 8-9 months of hands-on experience 
                        in building modern, scalable web applications. Currently pursuing my BSc in Computer Science and Engineering, 
                        I’ve built a strong foundation in programming with C, C++, and Java (OOP), which honed my problem-solving skills 
                        and sparked my love for coding.
                        <br />
                        <br />
                        I specialize in creating efficient, well-structured, and user-friendly applications. I enjoy every 
                        step of the development process. I’m quick to learn new technologies and thrive on organizing projects to ensure 
                        they are scalable and maintainable.
                        <br />
                        <br />
                        Let’s connect and create something amazing together!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;