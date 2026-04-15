import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin
}
from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import aboutme from "@/data/aboutme.json"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const socialLinks = [
    { href: aboutme.github, icon: faGithub },
    { href: aboutme.linkedin, icon: faLinkedin },
  ];

  const navLinks = [
    { href: "/projects", label: "/projects" },
    { href: "https://myphotos.com/", label: "/photolio" },
  ];
//top-0 z-50 bg-white/80 backdrop-blur-md
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md flex justify-between items-center p-4 border-b border-gray-200">
        {/* NAME */}
      <Link href="/">
        <h1 className="text-3xl font-bold">{aboutme.full_name.toUpperCase()}</h1>
      </Link>

        {/* FULL SCREEN HEADER */}
      <div className="flex justify-between items-center p-2 max-w-6xl mx-auto">
        <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl focus:outline-none"
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} style={{ color: "#f514b6" }} />
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-6 text-3xl">
          <div className="hidden md:flex gap-6">
            {navLinks.map(({ href, label }, i) => (
              <Link
                key={i}
                href={href}
                className="hover:text-pink-500 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white/80 backdrop-blur-md shadow-md p-4 flex flex-col gap-4 text-center md:hidden z-50">
          {/* Social icons */}
          <div className="flex justify-center gap-6 text-2xl">
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

          {/* Nav links */}
          <div className="flex flex-col gap-2 text-lg">
            {navLinks.map(({ href, label }, i) => (
              <Link
                key={i}
                href={href}
                className="hover:text-pink-500 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
