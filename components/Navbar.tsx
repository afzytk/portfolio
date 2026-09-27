"use client";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

const navLinkClass =
  "relative cursor-pointer transition-colors duration-300 hover:text-accent-soft " +
  "after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full " +
  "after:origin-left after:scale-x-0 after:rounded-full after:bg-accent " +
  "after:transition-transform after:duration-300 hover:after:scale-x-100";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const headerRef = useRevealOnScroll<HTMLElement>();

  useGSAP(() => {
    if (isOpen) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: -20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "expo.out", force3D: true },
      );
    }
  }, [isOpen]);

  return (
    <header
      ref={headerRef}
      className="relative flex items-center justify-end py-12"
    >
      <button
        data-reveal
        onClick={() => setIsOpen(!isOpen)}
        className="text-neutral-100 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-line/80 bg-elevated/60 backdrop-blur-md transition-colors hover:border-accent/60 hover:text-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-base"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="site-nav"
      >
        {isOpen ? "✕" : "☰"}
      </button>
      {isOpen && (
        <nav
          id="site-nav"
          aria-label="Main navigation"
          className="glass absolute top-full right-0 z-50 mt-3 w-xs flex flex-col items-center gap-6 py-8 rounded-3xl text-neutral-100 font-semibold shadow-2xl shadow-black/60"
          ref={menuRef}
        >
          <a
            href="#skills"
            onClick={() => setIsOpen(false)}
            className={navLinkClass}
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className={navLinkClass}
          >
            Projects
          </a>
          <a
            href="/resume.pdf"
            download="Afsal_TK_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={navLinkClass}
          >
            Download Resume
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className={navLinkClass}
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
};
