"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";
import { HiOutlinePhotograph } from "react-icons/hi";
import Link from "next/link";
import SectionWrapper from "./SectionWrapper";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <div className="text-center mb-12">
        <h2 className="section-title">
          <span className="accent-text">Certifications</span>
        </h2>
        <p className="section-subtitle mx-auto">
          Industry-recognized credentials validating my expertise
        </p>
        <div className="section-divider mx-auto" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
        {certifications.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="group h-full"
          >
            <Link href={`/certificates/${cert.id}`}>
              <div className="relative h-full overflow-hidden rounded-xl border border-green-500/20 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-green-500/50 hover:bg-white/10 hover:shadow-lg hover:scale-105 cursor-pointer">
                {/* Image Container */}
                <div className="relative h-40 sm:h-48 overflow-hidden bg-gradient-to-br from-green-900/20 to-black/40">
                  <img
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  {/* Fallback icon */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition">
                    <HiOutlinePhotograph
                      size={32}
                      style={{ color: "var(--text-secondary)", opacity: 0.3 }}
                    />
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/50 transition duration-300">
                    <div className="flex items-center gap-2 text-green-400 font-medium text-sm">
                      View Details <FiArrowRight size={16} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 pl-6 sm:pl-8 flex flex-col gap-3 h-full">
                  <div className="flex-1">
                    <h3
                      className="font-bold text-sm sm:text-base mb-1 line-clamp-2 transition-colors duration-300 group-hover:text-green-400"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {cert.title}
                    </h3>
                    <p
                      className="text-xs sm:text-sm mb-3"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {cert.issuer}
                    </p>

                    {/* Skills Tags */}
                    {cert.skills && cert.skills.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {cert.skills.slice(0, 2).map((skill) => (
                          <span
                            key={skill}
                            className="inline-block px-2 py-0.5 text-[10px] sm:text-xs rounded-full bg-green-500/10 border border-green-500/30 text-green-300"
                          >
                            {skill}
                          </span>
                        ))}
                        {cert.skills.length > 2 && (
                          <span className="text-[10px] text-green-300/60">
                            +{cert.skills.length - 2}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Date */}
                    {cert.date && (
                      <p
                        className="text-[10px] sm:text-xs"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        Completed: {cert.date}
                      </p>
                    )}
                  </div>

                  {/* External Link if available */}
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[10px] sm:text-xs font-medium transition-all hover:scale-105"
                      style={{
                        background: "rgba(34, 197, 94, 0.1)",
                        border: "1px solid rgba(34, 197, 94, 0.3)",
                        color: "var(--accent)",
                      }}
                    >
                      <FiExternalLink size={12} /> Verify
                    </a>
                  )}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
