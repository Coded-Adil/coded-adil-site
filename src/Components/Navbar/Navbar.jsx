import { Link } from 'react-scroll';

const Navbar = () => {
    const navLinks = (
        <>
            <li><Link to="home" smooth={true} duration={500} offset={-70}>Home</Link></li>
            <li><Link to="about" smooth={true} duration={500} offset={-70}>About</Link></li>
            <li><Link to="skills" smooth={true} duration={500} offset={-70}>Skills</Link></li>
            <li><Link to="projects" smooth={true} duration={500} offset={-70}>Projects</Link></li>
            <li><Link to="contact" smooth={true} duration={500} offset={-70}>Contact</Link></li>
        </>
    );

    return (
        <div className="navbar sticky top-0 z-10 bg-transparent backdrop-blur-xl font-exo">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow text-black">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/" className="text-2xl font-semibold px-2">Coded-Adil</Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end gap-2">
                <a
                    href="https://drive.google.com/file/d/1aqDUKipt3PnilLaxJvIE-5ca-wRt2ZvJ/view?usp=drive_link" // Replace with actual resume link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn text-black rounded-full btn-info"
                >
                    Resume
                </a>
            </div>
        </div>
    );
};

export default Navbar;
