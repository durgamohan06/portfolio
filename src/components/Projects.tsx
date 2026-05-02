"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { HiOutlinePhotograph } from "react-icons/hi";
import SectionWrapper from "./SectionWrapper";
import TiltCard from "./TiltCard";
import { projects, filterOptions, ProjectCategory } from "@/data/projects";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");
  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category.includes(activeFilter));

  return (
    <SectionWrapper id="projects">
      <div className="text-center mb-10">
        <h2 className="section-title">
          Featured <span className="accent-text">Projects</span>
        </h2>
        <p className="section-subtitle mx-auto">
          A selection of projects that showcase my skills and passion
        </p>
        <div className="section-divider mx-auto" />
      </div>

      {/* Filter buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {filterOptions.map((opt) => (
          <button
            key={opt.value}
            onClick={() => setActiveFilter(opt.value)}
            className="px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300"
            style={{
              background:
                activeFilter === opt.value
                  ? "var(--accent)"
                  : "var(--bg-tertiary)",
              color:
                activeFilter === opt.value ? "#fff" : "var(--text-secondary)",
              border: `1px solid ${activeFilter === opt.value ? "var(--accent)" : "var(--border-color)"}`,
            }}
            id={`filter-${opt.value}`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        <AnimatePresence mode="wait">
          {filtered.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="h-full"
            >
              <TiltCard className="h-full">
                <div className="card group overflow-hidden h-full flex flex-col">
                  <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-5 img-placeholder shrink-0">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover relative z-10"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <HiOutlinePhotograph
                        size={32}
                        style={{
                          color: "var(--text-secondary)",
                          opacity: 0.15,
                        }}
                      />
                    </div>
                  </div>

                  <h3
                    className="font-bold text-base sm:text-[1.05rem] leading-snug mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="skill-badge text-[11px]">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-2 mb-5 flex-1">
                    {project.description.map((point, i) => (
                      <li
                        key={i}
                        className="text-xs sm:text-sm flex items-start gap-2"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        <span
                          className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                          style={{ background: "var(--accent)" }}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div
                    className="mt-auto flex items-center gap-2 pt-4"
                    style={{ borderTop: "1px solid var(--border-color)" }}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all hover:scale-105"
                      style={{
                        background: "var(--bg-tertiary)",
                        border: "1px solid var(--border-color)",
                        color: "var(--text-primary)",
                      }}
                    >
                      <FiGithub size={13} /> GitHub
                    </a>
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all hover:scale-105"
                        style={{ background: "var(--accent)", color: "#fff" }}
                      >
                        <FiExternalLink size={13} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
