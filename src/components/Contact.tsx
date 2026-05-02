"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from "react-icons/fi";
import SectionWrapper from "./SectionWrapper";
import { SOCIAL_LINKS, PERSONAL_INFO } from "@/lib/constants";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${SOCIAL_LINKS.email}?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.name} (${formData.email})`;
    window.open(mailtoLink);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <SectionWrapper id="contact">
      <div className="text-center mb-10">
        <h2 className="section-title">
          Get In <span className="accent-text">Touch</span>
        </h2>
        <p className="section-subtitle mx-auto">
          Have a project in mind or just want to say hi? Let&apos;s connect!
        </p>
        <div className="section-divider mx-auto" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-bold text-lg mb-4" style={{ color: "var(--text-primary)" }}>
            Let&apos;s build something amazing together
          </h3>
          <p className="text-xs sm:text-sm mb-6 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="space-y-3 mb-6">
            {[
              { icon: FiMail, label: "Email", value: SOCIAL_LINKS.email, href: `mailto:${SOCIAL_LINKS.email}` },
              { icon: FiPhone, label: "Phone", value: SOCIAL_LINKS.phone },
              { icon: FiMapPin, label: "Location", value: PERSONAL_INFO.location },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "var(--accent-light)" }}>
                  <item.icon size={16} style={{ color: "var(--accent)" }} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-xs sm:text-sm font-medium truncate block hover:underline" style={{ color: "var(--text-primary)" }}>{item.value}</a>
                  ) : (
                    <p className="text-xs sm:text-sm font-medium truncate" style={{ color: "var(--text-primary)" }}>{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            {[
              { icon: FiGithub, href: SOCIAL_LINKS.github, label: "GitHub" },
              { icon: FiLinkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                style={{ background: "var(--bg-tertiary)", border: "1px solid var(--border-color)", color: "var(--text-secondary)" }}
                aria-label={s.label}>
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSubmit} className="card space-y-4">
            <div>
              <label htmlFor="contact-name" className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-primary)" }}>Name</label>
              <input id="contact-name" type="text" required value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="form-input" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-primary)" }}>Email</label>
              <input id="contact-email" type="email" required value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="form-input" placeholder="your@email.com" />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-primary)" }}>Message</label>
              <textarea id="contact-message" required rows={4} value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="form-input resize-none" placeholder="Tell me about your project..." />
            </div>
            <button type="submit" className="btn-primary w-full justify-center" id="contact-submit">
              {submitted ? "Message Sent! ✓" : <><FiSend size={14} /> Send Message</>}
            </button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
