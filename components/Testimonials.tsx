"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Jane D.",
    feedback: "InvestWise helped me grow my investments safely.",
  },
  { name: "John M.", feedback: "Professional guidance and excellent support." },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-semibold mb-12">Testimonials</h2>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.3 }}
            className="p-6 bg-white rounded-xl shadow-md max-w-xs"
          >
            <p className="text-gray-700 mb-2">"{t.feedback}"</p>
            <p className="font-bold">{t.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
