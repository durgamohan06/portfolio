"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="text-center mb-10">
        <h2 className="section-title">
          My <span className="accent-text">Skills</span>
        </h2>
        <p className="section-subtitle mx-auto">
          Technologies and tools I work with to bring ideas to life
        </p>
        <div className="section-divider mx-auto" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {skillCategories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="card group cursor-default"
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "var(--accent-light)" }}
                >
                  <Icon size={16} style={{ color: "var(--accent)" }} />
                </div>
                <h3 className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-badge">{skill}</span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
