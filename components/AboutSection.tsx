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

export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About <span className="text-yellow-600">InvestWise Zimbabwe</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              We are dedicated to empowering Zimbabweans with financial
              knowledge and investment opportunities. Our mission is to
              demystify the world of investing and provide accessible pathways
              to financial growth.
            </p>
            <div className="space-y-4">
              {[
                "Expert-guided investment education",
                "Trusted financial resources",
                "Personalized investment pathways",
                "Regulatory compliance and security",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <BadgeCheck className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <Button className="bg-yellow-600 hover:bg-yellow-700">
                Our Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/2 grid grid-cols-2 gap-4"
          >
            <div className="bg-yellow-100 p-6 rounded-2xl h-48 flex items-end">
              <div>
                <Target className="h-10 w-10 text-yellow-600 mb-4" />
                <h3 className="font-semibold">Clear Objectives</h3>
              </div>
            </div>
            <div className="bg-yellow-100 p-6 rounded-2xl h-48 flex items-end mt-8">
              <div>
                <Lightbulb className="h-10 w-10 text-yellow-600 mb-4" />
                <h3 className="font-semibold">Smart Strategies</h3>
              </div>
            </div>
            <div className="bg-green-100 p-6 rounded-2xl h-48 flex items-end">
              <div>
                <TrendingUp className="h-10 w-10 text-green-600 mb-4" />
                <h3 className="font-semibold">Growth Focused</h3>
              </div>
            </div>
            <div className="bg-indigo-100 p-6 rounded-2xl h-48 flex items-end mt-8">
              <div>
                <HeartHandshake className="h-10 w-10 text-indigo-600 mb-4" />
                <h3 className="font-semibold">Trusted Partnership</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
