"use client";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (isOpen) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: -20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "power3.out" },
      );
    }
  }, [isOpen]);

  return (
    <header className="relative flex items-center justify-end py-12">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white z-50"
        aria-label="Toggle menu"
      >
        {isOpen ? "✕" : "☰"}
      </button>
      {isOpen && (
        <nav
          className="absolute top-full right-0 w-xs bg-white border-t border-neutral-800 flex flex-col items-center gap-6 py-8 rounded-3xl text-black font-semibold"
          ref={menuRef}
        >
          <a href="#skills" onClick={() => setIsOpen(false)}>
            Skills
          </a>
          <a href="#projects" onClick={() => setIsOpen(false)}>
            Projects
          </a>
          <a
            href="/resume.pdf"
            download="Afsal_TK_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 "
          >
            Download Resume
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </nav>
      )}
    </header>
  );
};
