"use client";

import { useState } from "react";
import { profile } from "@/data/profile";

export default function ContactPanel() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const subject = encodeURIComponent(formData.subject.trim() || "Inquiry");
  const body = encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
  );
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${encodeURIComponent(
    profile.email
  )}&su=${subject}&body=${body}`;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      alert("Email copied!");
    } catch {
      alert(`Email: ${profile.email}`);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="text-xs text-cyan block mb-1">name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="your name"
          className="w-full bg-term-bg border border-term-green text-term-fg px-3 py-2 rounded text-sm"
        />
      </div>

      <div>
        <label className="text-xs text-cyan block mb-1">email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className="w-full bg-term-bg border border-term-green text-term-fg px-3 py-2 rounded text-sm"
        />
      </div>

      <div>
        <label className="text-xs text-cyan block mb-1">subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="subject"
          className="w-full bg-term-bg border border-term-green text-term-fg px-3 py-2 rounded text-sm"
        />
      </div>

      <div>
        <label className="text-xs text-cyan block mb-1">message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="your message..."
          rows={4}
          className="w-full bg-term-bg border border-term-green text-term-fg px-3 py-2 rounded text-sm"
        />
      </div>

      <div className="flex gap-2">
        <a
          href={gmailComposeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-term-green text-term-bg px-4 py-2 rounded font-bold text-center text-sm"
        >
          Send Email
        </a>
        <button
          type="button"
          onClick={handleCopyEmail}
          className="flex-1 border border-term-cyan text-term-cyan px-4 py-2 rounded text-sm"
        >
          Copy Email
        </button>
      </div>
      <p className="text-xs text-term-fg/70">
        Send Email opens Gmail with this message addressed to {profile.email}.
      </p>
    </div>
  );
}
