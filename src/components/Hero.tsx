"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiDownload, FiMail } from "react-icons/fi";
import { PERSONAL_INFO } from "@/lib/constants";
// removed 3D graph
// growth blocks (bar chart) removed

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-b from-[#020617] to-[#030a1e]" />
      <div className="max-w-6xl mx-auto px-6 w-full pt-20 pb-12 sm:pt-24 sm:pb-16 flex items-center justify-center min-h-[calc(100vh-5rem)]">
        <div className="w-full flex items-center justify-center mx-auto">
          {/* Left — Text Content */}
          <div className="order-2 lg:order-1 z-10 flex flex-col items-center text-center lg:items-center lg:text-center max-w-5xl w-full px-6">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
              style={{
                background: "var(--accent-lighter)",
                border: "1px solid var(--border-color)",
              }}
            >
              <span className="relative flex h-3 w-3">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                  style={{ background: "var(--accent)" }}
                />
                <span
                  className="relative inline-flex h-3 w-3 rounded-full"
                  style={{ background: "var(--accent)" }}
                />
              </span>
              <span
                className="text-xs font-medium"
                style={{ color: "var(--text-secondary)" }}
              >
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl font-black mb-3 tracking-tight leading-[1.1]"
              style={{ color: "var(--text-primary)" }}
            >
              Hi, I&apos;m{" "}
              <span className="accent-text-gradient">
                {PERSONAL_INFO.name.split(" ")[0]}
              </span>
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              <span className="accent-text-gradient">
                {PERSONAL_INFO.name.split(" ").slice(1).join(" ")}
              </span>
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg font-medium mb-4"
              style={{ color: "var(--accent)" }}
            >
              {PERSONAL_INFO.title}
            </motion.p>

            {/* Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-md text-sm sm:text-base leading-relaxed mb-8 mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              Building scalable applications and intelligent systems with
              Python, React, and modern AI technologies. Passionate about
              turning complex problems into elegant solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3 justify-center"
            >
              <a href="#projects" className="btn-primary" id="cta-projects">
                View Projects <FiArrowRight size={15} />
              </a>
              <a href="#contact" className="btn-outline" id="cta-contact">
                <FiMail size={15} /> Contact Me
              </a>
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                id="cta-resume"
              >
                <FiDownload size={15} /> Resume
              </a>
            </motion.div>
          </div>

          {/* Right column removed — hero content centered */}
        </div>
      </div>
    </section>
  );
}
