"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import {
  ArrowRight,
  BarChart3,
  TrendingUp,
  Shield,
  Building2,
  Globe,
  Landmark,
  Calculator,
  Eye,
  Download,
  Play,
  Star,
  ChevronDown,
  Filter,
  Search,
  ArrowUpRight,
  Users,
  Clock,
  DollarSign,
  PieChart,
  Target,
} from "lucide-react";

export default function InvestmentProducts() {
  const [activeTab, setActiveTab] = useState("all");
  const [riskFilter, setRiskFilter] = useState("all");
  const [showCalculator, setShowCalculator] = useState(false);

  // Investment products data
  const investmentProducts = [
    {
      id: 1,
      title: "Equity Investments",
      description:
        "Invest in shares of companies listed on the Zimbabwe Stock Exchange (ZSE) and VFEX.",
      category: "stocks",
      risk: "medium",
      returns: "12-25%",
      minInvestment: "$100",
      duration: "1+ years",
      popularity: 4.8,
      features: [
        "Dividend income",
        "Capital growth",
        "Portfolio diversification",
        "Liquidity",
      ],
      performance: "+18.2% YTD",
      trend: "up",
    },
    {
      id: 2,
      title: "Government Bonds",
      description:
        "Secure investments backed by the government of Zimbabwe with fixed interest payments.",
      category: "bonds",
      risk: "low",
      returns: "7-12%",
      minInvestment: "$500",
      duration: "2-5 years",
      popularity: 4.5,
      features: [
        "Fixed income",
        "Capital preservation",
        "Tax advantages",
        "Regular interest payments",
      ],
      performance: "+9.5% YTD",
      trend: "stable",
    },
    {
      id: 3,
      title: "Money Market Funds",
      description:
        "Short-term investments in highly liquid, low-risk securities for capital preservation.",
      category: "funds",
      risk: "low",
      returns: "5-9%",
      minInvestment: "$50",
      duration: "3-12 months",
      popularity: 4.3,
      features: ["High liquidity", "Low risk", "Regular income", "Easy access"],
      performance: "+7.2% YTD",
      trend: "stable",
    },
    {
      id: 4,
      title: "Real Estate Investment Trusts (REITs)",
      description:
        "Invest in real estate portfolios without directly owning properties.",
      category: "property",
      risk: "medium",
      returns: "10-18%",
      minInvestment: "$250",
      duration: "3+ years",
      popularity: 4.6,
      features: [
        "Property exposure",
        "Rental income",
        "Inflation hedge",
        "Diversification",
      ],
      performance: "+15.8% YTD",
      trend: "up",
    },
    {
      id: 5,
      title: "Forex Trading",
      description:
        "Trade major and exotic currency pairs in the global foreign exchange market.",
      category: "forex",
      risk: "high",
      returns: "15-40%",
      minInvestment: "$200",
      duration: "Flexible",
      popularity: 4.2,
      features: [
        "High liquidity",
        "Leverage options",
        "24/5 market",
        "Hedging capabilities",
      ],
      performance: "+22.4% YTD",
      trend: "up",
    },
    {
      id: 6,
      title: "Private Equity",
      description:
        "Invest in private companies with high growth potential before they go public.",
      category: "equity",
      risk: "high",
      returns: "20-50%",
      minInvestment: "$5000",
      duration: "5+ years",
      popularity: 4.7,
      features: [
        "High growth potential",
        "Exclusive access",
        "Strategic influence",
        "Substantial returns",
      ],
      performance: "+32.1% YTD",
      trend: "up",
    },
    {
      id: 7,
      title: "Commodities",
      description:
        "Invest in physical goods like gold, platinum, and agricultural products.",
      category: "commodities",
      risk: "medium",
      returns: "8-20%",
      minInvestment: "$300",
      duration: "1-3 years",
      popularity: 4.0,
      features: [
        "Inflation hedge",
        "Portfolio diversification",
        "Tangible assets",
        "Global demand",
      ],
      performance: "+12.6% YTD",
      trend: "up",
    },
    {
      id: 8,
      title: "Retirement Funds",
      description:
        "Long-term investment plans designed specifically for retirement planning.",
      category: "funds",
      risk: "low",
      returns: "6-10%",
      minInvestment: "$100",
      duration: "10+ years",
      popularity: 4.4,
      features: [
        "Tax benefits",
        "Regular contributions",
        "Compound growth",
        "Retirement income",
      ],
      performance: "+8.3% YTD",
      trend: "stable",
    },
  ];

  // Filter products based on active tab and risk filter
  const filteredProducts = investmentProducts.filter((product) => {
    const categoryMatch = activeTab === "all" || product.category === activeTab;
    const riskMatch = riskFilter === "all" || product.risk === riskFilter;
    return categoryMatch && riskMatch;
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="pt-28 pb-20 px-4 md:px-6 bg-gradient-to-r from-primary to-primary/50 text-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <Badge
              variant="secondary"
              className="mb-4 bg-white/20 text-white border-none"
            >
              Investment Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Investment Products
            </h1>
            <p className="text-xl text-zinc-900 mb-8">
              Discover a wide range of investment opportunities tailored for the
              Zimbabwean market. Whether you're a conservative investor or
              seeking high growth, we have options for you.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-primary/50"
              >
                Explore Products <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10"
              >
                <Play className="mr-2 h-5 w-5" /> How to Invest
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-primary p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">15,000+</h3>
              <p className="text-slate-600">Active Investors</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">$250M+</h3>
              <p className="text-slate-600">Assets Managed</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-orange-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <PieChart className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">25+</h3>
              <p className="text-slate-600">Investment Products</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-purple-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">98%</h3>
              <p className="text-slate-600">Client Satisfaction</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Investment Products
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Explore our diverse range of investment options designed to meet
              various financial goals and risk appetites.
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <Tabs
              defaultValue="all"
              className="w-full md:w-auto"
              onValueChange={setActiveTab}
            >
              <TabsList className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-4 md:mb-0">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="stocks" className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" /> Stocks
                </TabsTrigger>
                <TabsTrigger value="bonds" className="flex items-center gap-2">
                  <Landmark className="h-4 w-4" /> Bonds
                </TabsTrigger>
                <TabsTrigger value="funds" className="flex items-center gap-2">
                  <PieChart className="h-4 w-4" /> Funds
                </TabsTrigger>
                <TabsTrigger
                  value="property"
                  className="flex items-center gap-2"
                >
                  <Building2 className="h-4 w-4" /> Property
                </TabsTrigger>
                <TabsTrigger value="forex" className="flex items-center gap-2">
                  <Globe className="h-4 w-4" /> Forex
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-slate-600" />
              <span className="text-sm font-medium">Risk Level:</span>
              <select
                className="border rounded-md px-3 py-2 text-sm"
                value={riskFilter}
                onChange={(e) => setRiskFilter(e.target.value)}
              >
                <option value="all">All Levels</option>
                <option value="low">Low Risk</option>
                <option value="medium">Medium Risk</option>
                <option value="high">High Risk</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProducts.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden group">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start mb-2">
                      <Badge
                        className={
                          product.risk === "low"
                            ? "bg-green-100 text-green-800"
                            : product.risk === "medium"
                            ? "bg-primary text-primary"
                            : "bg-red-100 text-red-800"
                        }
                      >
                        {product.risk.toUpperCase()} RISK
                      </Badge>
                      <div className="flex items-center text-sm text-slate-500">
                        <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                        {product.popularity}
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {product.title}
                    </CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <span className="text-sm text-slate-500">Returns</span>
                        <p className="font-semibold text-green-600">
                          {product.returns}
                        </p>
                      </div>
                      <div>
                        <span className="text-sm text-slate-500">
                          Min. Investment
                        </span>
                        <p className="font-semibold">{product.minInvestment}</p>
                      </div>
                      <div>
                        <span className="text-sm text-slate-500">Duration</span>
                        <p className="font-semibold">{product.duration}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">Performance</span>
                        <span
                          className={`text-sm font-semibold ${
                            product.trend === "up"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {product.performance}
                        </span>
                      </div>
                      <Progress
                        value={product.trend === "up" ? 80 : 50}
                        className={`h-2 ${
                          product.trend === "up" ? "bg-green-100" : "bg-red-100"
                        }`}
                      />
                    </div>

                    <div className="mb-2">
                      <span className="text-sm font-medium">Key Features:</span>
                      <ul className="mt-2 space-y-1">
                        {product.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center text-sm">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" /> Details
                    </Button>
                    <Button size="sm">
                      Invest Now <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500">
                No investment products match your selected filters.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setActiveTab("all");
                  setRiskFilter("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Investment Calculator */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:w-1/2 mb-10 md:mb-0"
            >
              <h2 className="text-3xl font-bold mb-6">Investment Calculator</h2>
              <p className="text-slate-600 mb-6">
                Plan your investment journey with our interactive calculator.
                See how your money can grow over time with different investment
                products.
              </p>
              <Button onClick={() => setShowCalculator(!showCalculator)}>
                {showCalculator ? "Hide Calculator" : "Try Our Calculator"}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:w-1/2 md:pl-10"
            >
              {showCalculator && (
                <Card className="p-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="amount">Investment Amount ($)</Label>
                      <Input
                        id="amount"
                        type="number"
                        placeholder="e.g. 1000"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="period">Investment Period (Years)</Label>
                      <Input id="period" type="number" placeholder="e.g. 5" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="product">Investment Product</Label>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        <option value="">Select a product</option>
                        {investmentProducts.map((product) => (
                          <option key={product.id} value={product.id}>
                            {product.title}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex items-center space-x-2 pt-2">
                      <Switch id="compound" />
                      <Label htmlFor="compound">Compound Interest</Label>
                    </div>
                    <Button className="w-full mt-4">Calculate</Button>
                  </div>
                </Card>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/30 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Investing?
            </h2>
            <p className="text-zinc-900 max-w-2xl mx-auto mb-8">
              Join thousands of investors who are building wealth with our
              carefully curated investment products. Our experts are ready to
              guide you through your investment journey.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-primary/50"
              >
                Open An Account
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10"
              >
                Speak to an Advisor
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
