"use client";

import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer
      className="relative"
      style={{
        background: "var(--bg-primary)",
        borderTop: "1px solid rgba(34, 197, 94, 0.2)",
      }}
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* 1. BRAND SECTION */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg"
                style={{ background: "var(--accent)" }}
              >
                DM
              </div>
              <div>
                <h3
                  className="font-bold text-lg"
                  style={{ color: "var(--text-primary)" }}
                >
                  Durga Mohan
                </h3>
                <p className="text-xs" style={{ color: "var(--accent)" }}>
                  Developer
                </p>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Software Developer & AI/ML Enthusiast building innovative
              solutions with modern technologies.
            </p>
          </div>

          {/* 2. QUICK LINKS */}
          <div className="space-y-5">
            <h4
              className="font-bold text-base"
              style={{ color: "var(--text-primary)" }}
            >
              Navigation
            </h4>
            <div className="space-y-3 flex flex-col">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm transition-all duration-300 cursor-pointer hover:translate-x-1"
                  style={{ color: "var(--text-secondary)" }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLAnchorElement).style.color =
                      "var(--accent)")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLAnchorElement).style.color =
                      "var(--text-secondary)")
                  }
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* 3. RESOURCES */}
          <div className="space-y-5">
            <h4
              className="font-bold text-base"
              style={{ color: "var(--text-primary)" }}
            >
              Resources
            </h4>
            <div className="space-y-3 flex flex-col">
              {[
                { label: "GitHub", href: SOCIAL_LINKS.github },
                { label: "LinkedIn", href: SOCIAL_LINKS.linkedin },
                { label: "Resume", href: "#" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label !== "Resume" ? "_blank" : undefined}
                  rel={
                    item.label !== "Resume" ? "noopener noreferrer" : undefined
                  }
                  className="text-sm transition-all duration-300 cursor-pointer hover:translate-x-1"
                  style={{ color: "var(--text-secondary)" }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLAnchorElement).style.color =
                      "var(--accent)")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLAnchorElement).style.color =
                      "var(--text-secondary)")
                  }
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* 4. CONNECT / CONTACT */}
          <div className="space-y-5">
            <h4
              className="font-bold text-base"
              style={{ color: "var(--text-primary)" }}
            >
              Connect
            </h4>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: FiGithub, href: SOCIAL_LINKS.github, label: "GitHub" },
                {
                  icon: FiLinkedin,
                  href: SOCIAL_LINKS.linkedin,
                  label: "LinkedIn",
                },
                {
                  icon: FiMail,
                  href: `mailto:${SOCIAL_LINKS.email}`,
                  label: "Email",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.label !== "Email" ? "_blank" : undefined}
                  rel={
                    social.label !== "Email" ? "noopener noreferrer" : undefined
                  }
                  className="w-11 h-11 rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110 hover:shadow-lg"
                  style={{
                    background: "rgba(34, 197, 94, 0.1)",
                    border: "1.5px solid rgba(34, 197, 94, 0.3)",
                    color: "var(--accent)",
                  }}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>

            {/* Email Link */}
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="text-sm break-all transition-all duration-300 cursor-pointer"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) =>
                ((e.target as HTMLAnchorElement).style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLAnchorElement).style.color =
                  "var(--text-secondary)")
              }
            >
              {SOCIAL_LINKS.email}
            </a>
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-10 lg:my-14"
          style={{ borderTop: "1px solid rgba(34, 197, 94, 0.2)" }}
        />

        {/* Copyright Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-sm flex items-center gap-2"
            style={{ color: "var(--text-secondary)" }}
          >
            © {new Date().getFullYear()} Durga Mohan Pendem. Built with passion
            using Next.js
          </p>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
