import { Typewriter } from "react-simple-typewriter";
import 'animate.css';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
import { div } from "motion/react-client";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("https://formsubmit.co/ajax/itsadil2022@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                toast.success("Message submitted successfully!");
                setFormData({ name: '', email: '', message: '' });
            } else {
                toast.error("Failed to submit message.");
            }
        } catch (err) {
            toast.error("Something went wrong!");
            console.error(err);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center p-8 bg-gradient-to-tr from-[#1e3a8a] to-[#0f172a] rounded-2xl">
            <div className="mb-4 text-center font-code text-3xl lg:text-4xl font-exo font-bold text-white">
                Contact
                <Typewriter
                    words={[" Me", " Coded-Adil", " Adil Rahman"]}
                    loop={50}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </div>

            <form
                onSubmit={handleSubmit}
                className="w-full max-w-xl bg-white/20 backdrop-blur-lg p-6 rounded-xl shadow-md space-y-4"
            >
                <div>
                    <label className="block text-white font-semibold mb-1">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                        className="w-full p-3 rounded-md bg-white/60 text-black placeholder-gray-700 outline-none focus:ring-2 focus:ring-blue-300"
                    />
                </div>

                <div>
                    <label className="block text-white font-semibold mb-1">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email"
                        className="w-full p-3 rounded-md bg-white/60 text-black placeholder-gray-700 outline-none focus:ring-2 focus:ring-blue-300"
                    />
                </div>

                <div>
                    <label className="block text-white font-semibold mb-1">Message</label>
                    <textarea
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Write your message..."
                        className="w-full p-3 rounded-md bg-white/60 text-black placeholder-gray-700 outline-none focus:ring-2 focus:ring-blue-300"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 transition-all text-white font-bold rounded-md shadow-lg"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;
