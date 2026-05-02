"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: "var(--bg-primary)" }}
        >
          <div className="flex flex-col items-center gap-6">
            {/* Animated Logo */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center relative overflow-hidden"
                style={{ background: "var(--accent)" }}
              >
                <span className="text-3xl font-black text-white relative z-10">
                  DM
                </span>
              </div>
              {/* Subtle glow ring */}
              <motion.div
                className="absolute -inset-4 rounded-3xl"
                style={{
                  background: "var(--accent)",
                  opacity: 0.08,
                  filter: "blur(24px)",
                }}
                animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.15, 0.08] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* Loading bar */}
            <div
              className="w-48 h-1 rounded-full overflow-hidden"
              style={{ background: "var(--bg-tertiary)" }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{ background: "var(--accent)" }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.3, ease: "easeInOut" }}
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-sm font-medium"
              style={{ color: "var(--text-secondary)" }}
            >
              Loading portfolio...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
