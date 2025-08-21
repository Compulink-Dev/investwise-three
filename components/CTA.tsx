"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function CTA() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-20 px-6 bg-blue-600 text-white text-center"
    >
      <h2 className="text-3xl font-semibold mb-4">
        Ready to start your investment journey?
      </h2>
      <Button size="lg">Schedule a Consultation</Button>
    </motion.section>
  );
}
