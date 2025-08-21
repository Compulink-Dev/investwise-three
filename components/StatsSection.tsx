import React from "react";
import { motion } from "framer-motion";
import { Award, Globe, Star, Users } from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      value: "10K+",
      label: "Investors Educated",
      icon: <Users className="h-8 w-8" />,
    },
    {
      value: "15+",
      label: "Years of Experience",
      icon: <Award className="h-8 w-8" />,
    },
    {
      value: "98%",
      label: "Satisfaction Rate",
      icon: <Star className="h-8 w-8" />,
    },
    {
      value: "360°",
      label: "Financial Guidance",
      icon: <Globe className="h-8 w-8" />,
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-blue-600 mb-4 flex justify-center">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
