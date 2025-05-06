import banner from '../../../public/animatedhero.png';
import { motion } from "framer-motion"; // ✅ Fixed import
import 'animate.css';
import { Link } from 'react-scroll';

const Banner = () => {
    return (
        <div className="hero max-w-6xl mx-auto min-h-screen">
            <div className="hero-content gap-6 flex-col lg:flex-row-reverse">
                <div className='relative'>
                    <div className='absolute top-0 -left-4 mix-blend-multiply w-48 h-48 md:w-70 md:h-70 bg-primary-content rounded-full filter blur-xl opacity-70 animate-blob'></div>
                    <div className='absolute top-0 -right-2 mix-blend-multiply w-48 h-48 md:w-70 md:h-70 bg-secondary-content rounded-full filter blur-xl opacity-70 animate-blob animation-delay-2000'></div>
                    <div className='absolute -bottom-8 left-20 mix-blend-multiply w-48 h-48 md:w-70 md:h-70 bg-success-content rounded-full filter blur-xl opacity-70 animate-blob animation-delay-4000'></div>
                    <motion.img
                        src={banner}
                        alt="Animated Hero"
                        animate={{ y: [10, 50, 10] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="max-w-xs rounded-lg"
                    />
                </div>
                <div className='max-w-xl m-4 animate__animated animate__fadeInLeft'>
                    <h1 className="text-4xl font-code font-bold">MERN Stack Developer</h1>
                    <p className="py-6 font-exo">
                        Welcome to my creative corner! I'm <span className='font-bold'>Adil Rahman</span>, a passionate frontend developer dedicated
                        to building visually stunning, user-friendly, and responsive web experiences.
                    </p>
                    <p className='py-1 font-exo'>
                        Explore my projects, discover my skills, and let's collaborate to bring your next big
                        idea to life!
                    </p>
                    <div className='flex gap-2 flex-wrap mt-4'>
                        <a
                            href="https://drive.google.com/file/d/1aqDUKipt3PnilLaxJvIE-5ca-wRt2ZvJ/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn text-black rounded-full btn-info"
                        >
                            Resume
                        </a>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="btn text-black rounded-full btn-info"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
