"use client";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        <nav className="absolute top-full left-0 w-full bg-black border-t border-neutral-800 flex flex-col items-center gap-6 py-8">
          <a href="#skills" onClick={() => setIsOpen(false)}>
            Skills
          </a>
          <a href="#projects" onClick={() => setIsOpen(false)}>
            Projects
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-4 py-2 border border-white rounded"
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
