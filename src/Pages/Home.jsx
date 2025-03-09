import banner from '../../public/animatedhero.png'
import { motion } from "motion/react"
import 'animate.css';

const Home = () => {
    return (
        <div className="hero bg-base-200 max-w-6xl mx-auto min-h-screen">
            <div className="hero-content gap-6 flex-col lg:flex-row-reverse">
                <motion.img
                src={banner}
                animate={{y: [10, 50, 10]}}
                transition={{duration: 10, repeat: Infinity}}
                className="max-w-xs rounded-lg" />
                <div className='max-w-xl m-4 animate__animated animate__fadeInLeft'>
                    <h1 className="text-5xl font-code font-bold">Frontend Developer</h1>
                    <p className="py-6 font-exo">
                    Welcome to my creative corner! I'm Adil Rahman, a passionate frontend developer dedicated 
                    to building visually stunning, user-friendly, and responsive web experiences. With a keen 
                    eye for design and a love for clean, efficient code, I transform ideas into interactive 
                    realities that captivate and engage.
                    </p>
                    <p className='py-2 font-exo'>Explore my projects, discover my skills, and let's collaborate to bring your next big 
                        idea to life!
                    </p>
                    <button className="my-6 font-exo btn btn-info">Contact</button>
                </div>
            </div>
        </div>
    );
};

export default Home;