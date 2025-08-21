"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-20 px-6 text-center"
    >
      <h2 className="text-3xl font-semibold mb-6">About Us</h2>
      <p className="max-w-2xl mx-auto text-gray-700">
        Guiding you through every step of your investment journey. Integrity,
        Transparency, Innovation.
      </p>
    </motion.section>
  );
}
