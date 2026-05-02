"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar } from "react-icons/fi";
import SectionWrapper from "./SectionWrapper";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="text-center mb-10">
        <h2 className="section-title">
          Work <span className="accent-text">Experience</span>
        </h2>
        <p className="section-subtitle mx-auto">
          Professional experiences that shaped my career
        </p>
        <div className="section-divider mx-auto" />
      </div>

      <div className="max-w-2xl mx-auto relative">
        {/* Timeline line */}
        <div
          className="absolute left-5 sm:left-6 top-0 bottom-0 w-px"
          style={{ background: "linear-gradient(180deg, var(--accent-secondary), var(--border-color), transparent)" }}
        />

        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative mb-8 ml-12 sm:ml-14"
          >
            {/* Timeline dot */}
            <div
              className="absolute top-5 -left-[30px] sm:-left-[34px] w-2.5 h-2.5 rounded-full z-10"
              style={{ background: "var(--accent)", boxShadow: "0 0 0 3px var(--bg-primary), 0 0 0 4px var(--border-color)" }}
            />

            <div className="card">
              <div className="flex items-center gap-2 mb-1.5">
                <FiBriefcase size={14} style={{ color: "var(--accent)" }} />
                <h3 className="font-bold text-sm sm:text-base" style={{ color: "var(--text-primary)" }}>
                  {exp.role}
                </h3>
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
                <span className="text-xs sm:text-sm font-semibold" style={{ color: "var(--accent)" }}>
                  {exp.company}
                </span>
                <span className="flex items-center gap-1 text-xs" style={{ color: "var(--text-secondary)" }}>
                  <FiCalendar size={11} /> {exp.period}
                </span>
              </div>
              <ul className="space-y-1.5 mb-3">
                {exp.description.map((point, i) => (
                  <li key={i} className="text-xs sm:text-sm flex items-start gap-2" style={{ color: "var(--text-secondary)" }}>
                    <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--accent)" }} />
                    {point}
                  </li>
                ))}
              </ul>
              {exp.techStack && (
                <div className="flex flex-wrap gap-1.5">
                  {exp.techStack.map((tech) => (
                    <span key={tech} className="skill-badge text-[11px]">{tech}</span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
