import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal mt-8 footer-center bg-gray-600 text-white p-4">
            <aside className="flex">
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Adil Rahman. Github
                </p>
                <a href="https://github.com/Coded-Adil" target="_blank"><FaGithub /></a>
            </aside>
        </footer>
    );
};

export default Footer;