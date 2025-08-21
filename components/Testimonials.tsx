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

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Tendai M.",
      role: "Business Owner",
      feedback:
        "InvestWise helped me understand how to grow my business profits through smart investments. Their guidance has been invaluable.",
      avatar: "TM",
    },
    {
      name: "Sarah K.",
      role: "Medical Professional",
      feedback:
        "As someone with little investment knowledge, I appreciated the patient, clear explanations. I now feel confident managing my portfolio.",
      avatar: "SK",
    },
    {
      name: "James K.",
      role: "Retired Educator",
      feedback:
        "The retirement planning advice I received has secured my financial future. I'm grateful for their expertise and ethical approach.",
      avatar: "JK",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-900 to-amber-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-yellow-200 max-w-2xl mx-auto">
            Hear from investors who have transformed their financial future with
            our guidance
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-yellow-200">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-yellow-100 italic">"{testimonial.feedback}"</p>
              <div className="flex mt-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
