"use client";
import { useState } from "react";

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    message: "",
    email: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

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
    <form
      onSubmit={handleSubmit}
      className="max-w-md p-6 shadow-md rounded-lg "
    >
      <h3 className="text-3xl mb-6">Contact</h3>
      <div className="mb-8">
        <label htmlFor="name" className="mr-6">
          Name
        </label>
        <input
          type="text"
          placeholder="Enter your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          id="name"
          className="border border-solid rounded"
        />
      </div>

      <div className="mb-8">
        <label htmlFor="mail" className="mr-6">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter your Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          id="mail"
          className="border border-solid rounded"
        />
      </div>

      <div className="mb-8">
        <label htmlFor="message" className="mr-6">
          Message
        </label>
        <textarea
          placeholder="Enter your message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          id="message"
          className="border border-solid rounded"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-green-500 
                                   hover:bg-blue-700 
                                   text-white font-bold
                                   py-2 px-4 rounded-3xl 
                                   focus:outline-none 
                                   focus:shadow-outline"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "sent" && (
        <p>Message sent! I&apos;ll get back to you soon.</p>
      )}
      {status === "error" && <p>Something went wrong. Try again.</p>}
    </form>
  );
};
