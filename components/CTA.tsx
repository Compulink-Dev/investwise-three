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

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-yellow-600 to-amber-700 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Investment Journey?
          </h2>
          <p className="text-xl mb-8 text-yellow-100">
            Join thousands of Zimbabweans who have taken control of their
            financial future with InvestWise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-yellow-700 hover:bg-gray-100 font-bold px-8"
            >
              Schedule Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-zinc-900 hover:bg-white/10 font-bold px-8"
            >
              Explore Resources
            </Button>
          </div>
          <p className="mt-6 text-yellow-200 text-sm">
            No commitment required. Get answers to your investment questions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
