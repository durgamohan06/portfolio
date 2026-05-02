"use client";

import { motion } from "framer-motion";
import { FiUser, FiCode, FiTarget } from "react-icons/fi";
import SectionWrapper from "./SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="flex items-center justify-center min-h-[72vh] px-2 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-5xl mx-auto text-center"
        >
          <h2 className="section-title mb-4 sm:mb-5">
            About <span className="accent-text">Me</span>
          </h2>
          <div className="section-divider mx-auto mb-8 sm:mb-10" />

          <p
            className="text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 mx-auto max-w-4xl"
            style={{ color: "var(--text-secondary)" }}
          >
            I&apos;m a detail-oriented Software Engineering student with a
            passion for building{" "}
            <span
              className="font-semibold text-white/90"
              style={{ color: "var(--accent)" }}
            >
              scalable, intelligent applications
            </span>
            . My journey spans{" "}
            <span
              className="font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              full-stack development
            </span>{" "}
            and{" "}
            <span
              className="font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              AI/ML engineering
            </span>
            , where I combine clean code practices with innovative
            problem-solving.
          </p>
          <p
            className="text-base sm:text-lg leading-relaxed mb-12 sm:mb-16 mx-auto max-w-4xl"
            style={{ color: "var(--text-secondary)" }}
          >
            From crafting intuitive user interfaces with{" "}
            <span
              className="font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              React and Next.js
            </span>{" "}
            to building robust backend systems with{" "}
            <span
              className="font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              FastAPI and Python
            </span>
            , I thrive at the intersection of design and engineering. I&apos;m
            particularly passionate about leveraging{" "}
            <span className="font-semibold" style={{ color: "var(--accent)" }}>
              AI
            </span>{" "}
            to create products that make a real-world impact.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto px-2 sm:px-0">
            {[
              { icon: FiCode, label: "Full Stack", desc: "End-to-end dev" },
              { icon: FiUser, label: "AI / ML", desc: "Smart solutions" },
              { icon: FiTarget, label: "Problem Solver", desc: "Systematic" },
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(34, 197, 94, 0.2)",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <item.icon
                  size={28}
                  style={{ color: "var(--accent)" }}
                  className="mb-4 mx-auto drop-shadow-md"
                />
                <h4
                  className="font-bold text-lg sm:text-xl mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {item.label}
                </h4>
                <p
                  className="text-sm sm:text-base font-medium uppercase tracking-wider"
                  style={{ color: "var(--accent)", opacity: 0.8 }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
