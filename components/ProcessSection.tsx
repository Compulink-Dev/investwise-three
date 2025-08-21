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

export function ProcessSection() {
  const steps = [
    {
      title: "Setting Investment Objectives",
      description: "Define your financial goals and investment timeline",
      icon: <Target className="h-8 w-8" />,
    },
    {
      title: "Understanding Your Risk Profile",
      description: "Assess your risk tolerance and investment preferences",
      icon: <BarChart3 className="h-8 w-8" />,
    },
    {
      title: "Exploring Investment Products",
      description:
        "Discover options that align with your goals and risk profile",
      icon: <BookOpen className="h-8 w-8" />,
    },
    {
      title: "Connecting with Licensed Intermediaries",
      description:
        "Work with accredited professionals to execute your strategy",
      icon: <Users className="h-8 w-8" />,
    },
    {
      title: "Monitoring & Adjusting",
      description: "Regularly review and optimize your investment portfolio",
      icon: <TrendingUp className="h-8 w-8" />,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Investment Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A structured approach to building and managing your investment
            portfolio
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-200 hidden md:block"></div>

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div
                  className={`md:w-1/2 p-6 ${
                    idx % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <Card className="bg-slate-50 border-none shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start mb-4">
                        <div className="bg-yellow-100 p-3 rounded-full mr-4">
                          <div className="text-yellow-600">{step.icon}</div>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 mt-2">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-yellow-600 text-white font-bold z-10 mx-4">
                  {idx + 1}
                </div>

                {/* Spacer for alternating sides */}
                <div className="md:w-1/2 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
