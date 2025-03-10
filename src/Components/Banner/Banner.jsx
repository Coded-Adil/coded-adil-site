import banner from '../../../public/animatedhero.png'
import { motion } from "motion/react"
import 'animate.css';

const Banner = () => {
    return (
        <div className="hero max-w-6xl mx-auto min-h-screen">
            <div className="hero-content gap-6 flex-col lg:flex-row-reverse">
                <div className='relative'>
                    <div className='absolute top-0 -left-4 mix-blend-multiply w-48 h-48 md:w-70 md:h-70 bg-purple-300 rounded-full filter blur-xl opacity-70 animate-blob'></div>
                    <div className='absolute top-0 -right-2 mix-blend-multiply w-48 h-48 md:w-70 md:h-70 bg-sky-300 rounded-full filter blur-xl opacity-70 animate-blob animation-delay-2000'></div>
                    <div className='absolute -bottom-8 left-20 mix-blend-multiply w-48 h-48 md:w-70 md:h-70 bg-pink-300 rounded-full filter blur-xl opacity-70 animate-blob animation-delay-4000'></div>
                    <motion.img
                    src={banner}
                    animate={{y: [10, 50, 10]}}
                    transition={{duration: 10, repeat: Infinity}}
                    className="max-w-xs rounded-lg" />
                </div>
                <div className='max-w-xl m-4 animate__animated animate__fadeInLeft'>
                    <h1 className="text-5xl font-code font-bold">Frontend Developer</h1>
                    <p className="py-6 font-exo">
                        Welcome to my creative corner! I'm <span className='font-bold'>Adil Rahman</span>, a passionate frontend developer dedicated 
                        to building visually stunning, user-friendly, and responsive web experiences. With a keen 
                        eye for design and a love for clean, efficient code, I transform ideas into interactive 
                        realities that captivate and engage.
                    </p>
                    <p className='py-1 font-exo'>
                        Explore my projects, discover my skills, and let's collaborate to bring your next big 
                        idea to life!
                    </p>
                    <button className="my-6 font-exo btn btn-info">Contact</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;