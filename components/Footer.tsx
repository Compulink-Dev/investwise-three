"use client";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Shield,
  BookOpen,
  Users,
  Heart,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              InvestWise
            </h3>
            <p className="text-slate-300 text-sm">
              Empowering investors with knowledge, tools, and resources to make
              informed financial decisions and build wealth responsibly.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-full hover:bg-yellow-600 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-full hover:bg-yellow-600 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-full hover:bg-yellow-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-full hover:bg-yellow-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-yellow-400" />
              Resources
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link
                  href="/investment-basics"
                  className="flex items-center hover:text-yellow-400 transition-colors"
                >
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Investing Basics
                </Link>
              </li>
              <li>
                <Link
                  href="/investment-process"
                  className="flex items-center hover:text-yellow-400 transition-colors"
                >
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Investment Process
                </Link>
              </li>
              <li>
                <Link
                  href="/protecting-your-investment"
                  className="flex items-center hover:text-yellow-400 transition-colors"
                >
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Protecting Investments
                </Link>
              </li>
              <li>
                <Link
                  href="/game-centre"
                  className="flex items-center hover:text-yellow-400 transition-colors"
                >
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Game Centre
                </Link>
              </li>
              <li>
                <Link
                  href="/investment-products"
                  className="flex items-center hover:text-yellow-400 transition-colors"
                >
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Investment Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Educational Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold flex items-center">
              <Users className="h-5 w-5 mr-2 text-yellow-400" />
              Learn & Play
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link
                  href="/capital-market-basic-knowledge-quiz"
                  className="flex items-center hover:text-yellow-400 transition-colors"
                >
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Knowledge Quiz
                </Link>
              </li>
              <li>
                <Link
                  href="/spot-and-share"
                  className="flex items-center hover:text-yellow-400 transition-colors"
                >
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Spot and Share Game
                </Link>
              </li>
              <li>
                <Link
                  href="/learning-hub"
                  className="flex items-center hover:text-yellow-400 transition-colors"
                >
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Learning Hub
                </Link>
              </li>
              <li>
                <Link
                  href="/glossary"
                  className="flex items-center hover:text-yellow-400 transition-colors"
                >
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Financial Glossary
                </Link>
              </li>
              <li>
                <Link
                  href="/calculators"
                  className="flex items-center hover:text-yellow-400 transition-colors"
                >
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Financial Calculators
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold flex items-center">
              <Shield className="h-5 w-5 mr-2 text-yellow-400" />
              Get In Touch
            </h4>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-yellow-400 flex-shrink-0" />
                <span>
                  123 Investment Street, Financial District, Harare, Zimbabwe
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-yellow-400" />
                <span>+263 123 456 789</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-yellow-400" />
                <span>info@investwise.co.zw</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="pt-4">
              <h5 className="text-sm font-semibold mb-2">Stay Updated</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 bg-slate-800 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full"
                />
                <button className="bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded-r-md transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm flex items-center">
              <Heart className="h-4 w-4 mr-1 text-red-500" />©{" "}
              {new Date().getFullYear()} InvestWise. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy-policy"
                className="text-slate-400 hover:text-yellow-400 text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-slate-400 hover:text-yellow-400 text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/disclaimer"
                className="text-slate-400 hover:text-yellow-400 text-sm transition-colors"
              >
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Regulatory Notice */}
      <div className="bg-slate-950 py-4">
        <div className="container mx-auto px-4">
          <p className="text-slate-500 text-xs text-center">
            InvestWise is an educational platform. We are not financial
            advisors. All investments carry risk, and it is important you
            understand these risks before investing. Past performance is not
            indicative of future results. Please consult with a licensed
            financial professional before making any investment decisions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
