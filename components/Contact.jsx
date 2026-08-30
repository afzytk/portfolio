"use client";
import { useState } from "react";

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    message: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 border-black max-w-sm space-y-3 justify-center items-center"
    >
      <input
        type="text"
        placeholder="Enter your name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        type="text"
        placeholder="Enter your Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <textarea
        placeholder="Enter your message"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />

      <button type="submit">Send Message</button>
    </form>
  );
};
