"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  BarChart3,
  Shield,
  Users,
  TrendingUp,
  BookOpen,
  Globe,
  Award,
  Lightbulb,
  Target,
  HeartHandshake,
  BadgeCheck,
  Star,
} from "lucide-react";

export function InvestmentProducts() {
  const products = [
    {
      name: "Private Equity",
      description:
        "Access to high-value investment opportunities in growing businesses.",
      icon: <BarChart3 className="h-10 w-10 text-yellow-600" />,
      color: "bg-yellow-50",
    },
    {
      name: "Venture Capital",
      description:
        "Support innovative startups and emerging businesses with growth potential.",
      icon: <TrendingUp className="h-10 w-10 text-green-600" />,
      color: "bg-green-50",
    },
    {
      name: "Growth Capital",
      description:
        "Fuel business expansion with strategic capital investments.",
      icon: <ArrowRight className="h-10 w-10 text-purple-600" />,
      color: "bg-purple-50",
    },
    {
      name: "Asset Management",
      description: "Professional management of diverse investment portfolios.",
      icon: <Shield className="h-10 w-10 text-yellow-600" />,
      color: "bg-yellow-50",
    },
    {
      name: "Retirement Planning",
      description:
        "Secure your future with tailored retirement investment strategies.",
      icon: <BookOpen className="h-10 w-10 text-red-600" />,
      color: "bg-red-50",
    },
    {
      name: "Education Funds",
      description:
        "Invest in future generations with education-focused portfolios.",
      icon: <Users className="h-10 w-10 text-indigo-600" />,
      color: "bg-indigo-50",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Investment Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our diverse range of investment solutions tailored to your
            financial goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-2xl shadow-md hover:shadow-lg transition-all ${product.color}`}
            >
              <div className="mb-6">{product.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-6">{product.description}</p>
              <Button
                variant="link"
                className="p-0 text-yellow-600 hover:text-yellow-800"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700">
            Explore All Products
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
