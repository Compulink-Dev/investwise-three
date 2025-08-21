"use client";

import { motion } from "framer-motion";

const products = [
  {
    name: "Private Equity",
    description: "High-value investment opportunities.",
  },
  {
    name: "Venture Capital",
    description: "Support startups and growth businesses.",
  },
  { name: "Growth Capital", description: "Funding for expanding businesses." },
];

export default function InvestmentProducts() {
  return (
    <section className="py-20 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-semibold mb-12">Investment Products</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-xl shadow-md"
          >
            <h3 className="text-xl font-bold mb-2">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
