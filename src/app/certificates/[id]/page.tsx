"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowLeft, FiExternalLink, FiDownload } from "react-icons/fi";
import { certifications } from "@/data/certifications";

export default function CertificatePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const certificate = certifications.find((cert) => cert.id === id);

  if (!certificate) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center px-6"
        style={{ background: "var(--bg-primary)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Certificate Not Found
          </h1>
          <p className="mb-8" style={{ color: "var(--text-secondary)" }}>
            The certificate you're looking for doesn't exist.
          </p>
          <Link href="/#certifications">
            <button
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer hover:shadow-lg"
              style={{
                background: "var(--accent)",
                color: "var(--bg-primary)",
              }}
            >
              <FiArrowLeft size={18} /> Back to Certifications
            </button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div
      style={{ background: "var(--bg-primary)" }}
      className="min-h-screen flex flex-col pt-8 pb-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col flex-1">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6"
        >
          <Link href="/#certifications">
            <button
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer hover:shadow-lg"
              style={{
                background: "var(--accent)",
                color: "var(--bg-primary)",
              }}
            >
              <FiArrowLeft size={20} /> Back to Certifications
            </button>
          </Link>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 flex-1">
          {/* Left Column - Certificate Image (Takes 7 columns) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex items-center justify-center h-full"
          >
            <div className="relative rounded-2xl overflow-hidden border border-green-500/20 bg-white/5 backdrop-blur-md w-full h-full min-h-[500px] lg:min-h-[700px] p-4 sm:p-6 flex items-center justify-center">
              {certificate.type === "pdf" ? (
                <iframe
                  src={certificate.image}
                  className="w-full h-full rounded-lg"
                  title={certificate.title}
                />
              ) : (
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-full rounded-lg shadow-2xl object-contain"
                />
              )}
            </div>
          </motion.div>

          {/* Right Column - Certificate Details (Takes 5 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-start py-4 lg:py-8"
          >
            {/* Header Section */}
            <div className="space-y-2 pb-3 border-b border-green-500/10">
              <div>
                <h1
                  className="text-3xl sm:text-4xl lg:text-5xl font-black mb-2 leading-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  {certificate.title}
                </h1>
                <div
                  className="h-1.5 w-24 rounded-full"
                  style={{ background: "var(--accent)" }}
                />
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ background: "var(--accent)" }}
                  />
                  <p
                    className="text-lg font-bold"
                    style={{ color: "var(--accent)" }}
                  >
                    {certificate.issuer}
                  </p>
                </div>
                {certificate.date && (
                  <div className="flex items-center gap-3">
                    <span style={{ color: "var(--accent)" }}>✓</span>
                    <p
                      className="text-base font-semibold"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      Completed in {certificate.date}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Description Section */}
            {certificate.description && (
              <div className="py-3 space-y-2 border-b border-green-500/10">
                <h2
                  className="text-lg font-bold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  About This Certification
                </h2>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {certificate.description}
                </p>
              </div>
            )}

            {/* Skills Section */}
            {certificate.skills && certificate.skills.length > 0 && (
              <div className="pt-3 pb-0 border-none space-y-2">
                <h2
                  className="text-lg font-bold mb-3"
                  style={{ color: "var(--text-primary)" }}
                >
                  Skills & Knowledge
                </h2>
                <div className="flex flex-wrap gap-3">
                  {certificate.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.08 }}
                      className="px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 cursor-pointer hover:shadow-md"
                      style={{
                        background: "rgba(34, 197, 94, 0.15)",
                        border: "1.5px solid rgba(34, 197, 94, 0.4)",
                        color: "var(--accent)",
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            )}

            {/* Actions Section */}
            <div
              className="flex flex-col gap-4 sm:flex-row"
              style={{ marginTop: "5px" }}
            >
              {certificate.link && (
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-bold transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-105"
                  style={{
                    background: "var(--accent)",
                    color: "var(--bg-primary)",
                  }}
                >
                  <FiExternalLink size={20} /> Verify Certificate
                </a>
              )}
              <a
                href={certificate.image}
                download
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-bold transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-105"
                style={{
                  background: "rgba(34, 197, 94, 0.15)",
                  border: "1.5px solid rgba(34, 197, 94, 0.4)",
                  color: "var(--accent)",
                }}
              >
                <FiDownload size={20} /> Download Certificate
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
