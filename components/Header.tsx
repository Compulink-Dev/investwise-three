"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Search,
  BookOpen,
  BarChart3,
  Shield,
  GamepadIcon,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Header = () => {
  const menuItems = [
    {
      id: "investing-basics",
      title: "INVESTING BASICS",
      icon: <BookOpen className="h-4 w-4" />,
      items: [
        {
          title: "Being Financially Literate",
          href: "/investment-basics/being-financially-literate",
        },
        {
          title: "Why should you invest?",
          href: "/investment-basics/why-should-you-invest",
        },
        {
          title: "When should you invest?",
          href: "/investment-basics/when-should-you-invest",
        },
        {
          title: "How much should you invest?",
          href: "/investment-basics/how-much-should-you-invest",
        },
        {
          title: "How the capital market works",
          href: "/investment-basics/how-the-capital-market-works",
        },
        {
          title: "Understanding Transaction Costs",
          href: "/investment-basics/understanding-transaction-costs",
        },
        {
          title: "Risk / Return Relationship",
          href: "/investment-basics/risk-return-relationship",
        },
        {
          title: "Diversification",
          href: "/investment-basics/diversification",
        },
      ],
    },
    {
      id: "investment-process",
      title: "INVESTMENT PROCESS",
      icon: <BarChart3 className="h-4 w-4" />,
      items: [
        {
          title: "Diversify your Investments",
          href: "/investment-process/diversify-your-investments",
        },
        {
          title: "Know your licensed intermediaries",
          href: "/investment-process/know-your-licensed-intermediaries",
        },
        {
          title: "Knowing your Risk Profile",
          href: "/investment-process/knowing-your-risk-profile",
        },
        {
          title: "Portfolio Monitoring and Evaluation",
          href: "/investment-process/portfolio-monitoring-and-performance-evaluation",
        },
        {
          title: "Setting Investment Objectives",
          href: "/investment-process/setting-investment-objectives",
        },
        {
          title: "Understand Investment Products",
          href: "/investment-process/understand-investment-products",
        },
      ],
    },
    {
      id: "protecting-investment",
      title: "PROTECTING YOUR INVESTMENT",
      icon: <Shield className="h-4 w-4" />,
      items: [
        {
          title: "Types of Investment Fraud",
          href: "/types-of-investment-fraud",
        },
        {
          title: "What you can do to avoid Investment Fraud",
          href: "/what-you-can-do-to-avoid-investment-fraud",
        },
        {
          title: "Red Flags for Investment Fraud",
          href: "/red-flags-for-investment-fraud",
        },
      ],
    },
    {
      id: "game-centre",
      title: "GAME CENTRE",
      icon: <GamepadIcon className="h-4 w-4" />,
      items: [
        {
          title: "Capital Market Basic Knowledge Quiz",
          href: "/capital-market-basic-knowledge-quiz",
        },
        { title: "Spot and Share", href: "/spot-and-share" },
      ],
    },
  ];

  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between  p-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-yellow-900">
          <Image src={"/logo.webp"} alt="logo" width={150} height={150} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList>
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.id}>
                  <NavigationMenuTrigger className="flex items-center gap-1 text-sm bg-transparent">
                    {item.icon}
                    {item.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[500px] lg:w-[600px] lg:grid-cols-2">
                      {item.items.map((subItem) => (
                        <li key={subItem.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={subItem.href}
                              className="block p-3 rounded-md hover:bg-gray-50 transition-colors text-sm text-gray-700"
                            >
                              {subItem.title}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Search - Desktop */}
        <div className="hidden md:block relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="search"
            placeholder="Search…"
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent w-48 lg:w-64"
          />
        </div>

        {/* Mobile Menu Button */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-md p-4">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <Link href="/" className="text-xl font-bold text-yellow-900">
                  <Image src={"/logo.webp"} alt="" width={100} height={100} />
                </Link>
                {/* <SheetClose asChild>
                  <Button variant="ghost" size="icon">
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </SheetClose> */}
              </div>

              {/* Mobile Search */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="search"
                  placeholder="Search…"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>

              {/* Mobile Navigation */}
              <nav className="flex-1 overflow-y-auto">
                <div className="space-y-4">
                  {menuItems.map((item) => (
                    <div
                      key={item.id}
                      className="border-b border-gray-200 pb-4"
                    >
                      <h3 className="flex items-center gap-2 font-semibold text-gray-900 mb-3">
                        {item.icon}
                        {item.title}
                      </h3>
                      <ul className="space-y-2 pl-6">
                        {item.items.map((subItem) => (
                          <li key={subItem.title}>
                            <SheetClose asChild>
                              <Link
                                href={subItem.href}
                                className="text-gray-600 hover:text-yellow-900 transition-colors block py-2"
                              >
                                {subItem.title}
                              </Link>
                            </SheetClose>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
