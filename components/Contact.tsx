"use client";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

export const Contact = () => {
  const sectionRef = useRevealOnScroll<HTMLDivElement>();
  const [open, setOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    message: "",
    email: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  useGSAP(() => {
    if (!open || !formRef.current) return;

    const fields = formRef.current.querySelectorAll(".contact-field");

    const tl = gsap.timeline();
    tl.fromTo(
      formRef.current,
      { opacity: 0, y: -24, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.55,
        ease: "expo.out",
        force3D: true,
      },
    ).fromTo(
      fields,
      { opacity: 0, y: 16 },
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: "power3.out",
        stagger: 0.07,
      },
      "-=0.35",
    );
  }, [open]);

  const closeForm = () => {
    if (!formRef.current) {
      setOpen(false);
      return;
    }
    gsap.to(formRef.current, {
      opacity: 0,
      y: -24,
      scale: 0.95,
      duration: 0.3,
      ease: "power3.in",
      onComplete: () => setOpen(false),
    });
  };

  const toggleForm = () => {
    if (open) {
      closeForm();
    } else {
      setOpen(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      ref={sectionRef}
      id="contact"
      className="flex flex-col items-center gap-6"
    >
      <button
        data-reveal
        type="button"
        onClick={toggleForm}
        aria-expanded={open}
        className="rounded-full bg-accent/20 py-2 px-6 font-semibold text-white border border-accent/30 transition-colors hover:bg-accent/30 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-base cursor-pointer"
      >
        {open ? "Close" : "Contact Me"}
      </button>

      {open && (
        <form
          onSubmit={handleSubmit}
          className="glass w-full max-w-md p-6 rounded-2xl"
        >
          <h3 className="contact-field mb-6 text-3xl font-bold tracking-tight text-white">
            Contact
          </h3>
          <div className="contact-field mb-5">
            <label htmlFor="name" className="mr-6">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              aria-label="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              id="name"
              className="w-full rounded-lg border border-line bg-base/60 px-3 py-2 text-neutral-100 placeholder:text-neutral-600 focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/30"
            />
          </div>

          <div className="contact-field mb-5">
            <label htmlFor="mail" className="mr-6">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your Email"
              aria-label="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              id="mail"
              className="w-full rounded-lg border border-line bg-base/60 px-3 py-2 text-neutral-100 placeholder:text-neutral-600 focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/30"
            />
          </div>

          <div className="contact-field mb-6">
            <label htmlFor="message" className="mr-6">
              Message
            </label>
            <textarea
              placeholder="Enter your message"
              aria-label="Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              id="message"
              className="w-full rounded-lg border border-line bg-base/60 px-3 py-2 text-neutral-100 placeholder:text-neutral-600 focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/30"
            />
          </div>

          <div className="contact-field flex justify-center">
            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-accent/20 hover:bg-accent/30 text-white font-semibold py-2 px-6 rounded-full border border-accent/30 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-base transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </div>

          {status === "sent" && (
            <p className="mt-4 text-sm text-emerald-400">
              Message sent! I&apos;ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-sm text-red-400">
              Something went wrong. Try again.
            </p>
          )}
        </form>
      )}
    </div>
  );
};
