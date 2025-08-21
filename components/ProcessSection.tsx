"use client";

import { motion } from "framer-motion";

const steps = [
  "Setting Investment Objectives",
  "Understanding Your Risk Profile",
  "Exploring Investment Products",
  "Connecting with Licensed Intermediaries",
];

export default function Process() {
  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-3xl font-semibold mb-12">Investment Process</h2>
      <div className="space-y-6 max-w-xl mx-auto">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="p-4 bg-blue-50 rounded-lg shadow"
          >
            {step}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
