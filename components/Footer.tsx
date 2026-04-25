import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import aboutme from "@/data/aboutme.json"

export default function Footer() {
    const socialLinks = [
        { href: aboutme.github, icon: faGithub },
        { href: aboutme.linkedin, icon: faLinkedin },
    ];
    return (
        <footer className="border-t border-gray-200 mt-16">
            <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">

            <div className="text-gray-500 text-center md:text-left">
                © {new Date().getFullYear()} Zoë Y. Valladares
            </div>

            <div className="flex gap-5 text-2xl">
                {socialLinks.map(({ href, icon }, i) => (
                    <a
                        key={i}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-70 transition-opacity"
                    >
                        <FontAwesomeIcon icon={icon} style={{ color: "#f514b6" }} />
                    </a>
                ))}
            </div>
        </div>
        </footer >
    );
}