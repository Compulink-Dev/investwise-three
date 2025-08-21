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
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Calendar,
  User,
  Download,
  FileText,
  Image,
  Video,
  Newspaper,
  BarChart3,
  Filter,
  Play,
  Eye,
  Share2,
  BookOpen,
  Mic,
  Camera,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

export default function MediaCenter() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Media categories
  const categories = [
    { id: "all", label: "All Media", icon: <Newspaper className="h-4 w-4" /> },
    {
      id: "press",
      label: "Press Releases",
      icon: <FileText className="h-4 w-4" />,
    },
    {
      id: "news",
      label: "News Articles",
      icon: <Newspaper className="h-4 w-4" />,
    },
    { id: "images", label: "Images", icon: <Image className="h-4 w-4" /> },
    { id: "videos", label: "Videos", icon: <Video className="h-4 w-4" /> },
    {
      id: "reports",
      label: "Reports",
      icon: <BarChart3 className="h-4 w-4" />,
    },
  ];

  // Sample media items
  const mediaItems = [
    {
      id: 1,
      title: "Q4 2023 Financial Results Announcement",
      type: "press",
      date: "2024-01-25",
      description:
        "InvestWise Zimbabwe announces strong financial results for the fourth quarter of 2023, with a 15% increase in assets under management.",
      image: "/placeholder-image.jpg",
      downloads: [
        { name: "Full Report (PDF)", url: "#", size: "2.4MB" },
        { name: "Press Release", url: "#", size: "1.2MB" },
      ],
      tags: ["Financials", "Earnings", "Quarterly Results"],
    },
    {
      id: 2,
      title: "New Investment Products Launch",
      type: "news",
      date: "2024-01-18",
      description:
        "InvestWise introduces three new investment products designed specifically for the Zimbabwean market, offering diversified opportunities for investors.",
      image: "/placeholder-image.jpg",
      downloads: [{ name: "Product Brochure", url: "#", size: "3.1MB" }],
      tags: ["Products", "Innovation", "Market Expansion"],
    },
    {
      id: 3,
      title: "Market Analysis: Zimbabwe Economic Outlook 2024",
      type: "reports",
      date: "2024-01-10",
      description:
        "Comprehensive analysis of Zimbabwe's economic prospects for 2024, with sector-specific insights and investment recommendations.",
      image: "/placeholder-image.jpg",
      downloads: [
        { name: "Full Report", url: "#", size: "5.7MB" },
        { name: "Executive Summary", url: "#", size: "1.8MB" },
      ],
      tags: ["Research", "Economic Outlook", "Market Analysis"],
    },
    {
      id: 4,
      title: "CEO Interview on Business Focus",
      type: "videos",
      date: "2024-01-05",
      description:
        "Our CEO discusses investment opportunities in Zimbabwe and the company's growth strategy in an exclusive television interview.",
      image: "/placeholder-image.jpg",
      videoUrl: "#",
      duration: "15:42",
      tags: ["Leadership", "Interview", "Strategy"],
    },
    {
      id: 5,
      title: "Corporate Responsibility Initiative Launch",
      type: "press",
      date: "2023-12-15",
      description:
        "InvestWise launches a new financial literacy program aimed at empowering youth in underserved communities across Zimbabwe.",
      image: "/placeholder-image.jpg",
      downloads: [
        { name: "Press Release", url: "#", size: "1.5MB" },
        { name: "Program Overview", url: "#", size: "2.2MB" },
      ],
      tags: ["CSR", "Education", "Community"],
    },
    {
      id: 6,
      title: "Company Headquarters Gallery",
      type: "images",
      date: "2023-12-10",
      description:
        "High-resolution images of our new headquarters in Harare, featuring state-of-the-art facilities and sustainable design elements.",
      image: "/placeholder-image.jpg",
      downloads: [{ name: "Image Pack (ZIP)", url: "#", size: "18.3MB" }],
      tags: ["Facilities", "Corporate", "Architecture"],
    },
    {
      id: 7,
      title: "VFEX Investment Opportunities Report",
      type: "reports",
      date: "2023-11-28",
      description:
        "Detailed analysis of investment opportunities on the Victoria Falls Stock Exchange for international investors.",
      image: "/placeholder-image.jpg",
      downloads: [{ name: "Full Report", url: "#", size: "4.2MB" }],
      tags: ["VFEX", "International", "Analysis"],
    },
    {
      id: 8,
      title: "Women in Finance Initiative",
      type: "news",
      date: "2023-11-15",
      description:
        "InvestWise launches program to support and promote women in Zimbabwe's financial services industry.",
      image: "/placeholder-image.jpg",
      downloads: [{ name: "Initiative Overview", url: "#", size: "2.1MB" }],
      tags: ["Diversity", "Women", "Empowerment"],
    },
  ];

  // Filter media items based on category and search query
  const filteredItems = mediaItems.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.type === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  // Press contacts
  const pressContacts = [
    {
      name: "Tendai Moyo",
      title: "Head of Communications",
      email: "tendai.moyo@investwise.co.zw",
      phone: "+263 123 456 789",
      image: "/placeholder-avatar.jpg",
    },
    {
      name: "Sarah Chikwava",
      title: "Media Relations Manager",
      email: "sarah.chikwava@investwise.co.zw",
      phone: "+263 987 654 321",
      image: "/placeholder-avatar.jpg",
    },
  ];

  // Recent press mentions
  const pressMentions = [
    {
      outlet: "The Zimbabwe Herald",
      title: "InvestWise Reports Record Growth Amid Economic Recovery",
      date: "2024-01-20",
      url: "#",
    },
    {
      outlet: "Business Times ZW",
      title: "How InvestWise is Democratizing Investing in Zimbabwe",
      date: "2024-01-15",
      url: "#",
    },
    {
      outlet: "Finance Zimbabwe",
      title: "Interview with InvestWise CEO on Market Outlook",
      date: "2024-01-08",
      url: "#",
    },
    {
      outlet: "InvestAfrica",
      title: "Zimbabwe's Investment Landscape: Opportunities and Challenges",
      date: "2023-12-22",
      url: "#",
    },
  ];

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
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-yellow-600 to-amber-700 text-white py-16">
        <div className="container mx-auto px-4">
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
              Media Resources
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Media Center
            </h1>
            <p className="text-xl text-yellow-100 mb-8">
              Access press releases, news, multimedia content, and resources for
              journalists covering InvestWise Zimbabwe.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-white text-yellow-700 hover:bg-yellow-50"
              >
                Media Resources <Download className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10"
              >
                Contact Media Team <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 -mt-10">
        {/* Search and Filter Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl p-6 shadow-sm mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
            <div className="relative w-full md:w-1/3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search media content..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-slate-600" />
              <span className="text-sm font-medium text-slate-700">
                Filter by:
              </span>
              <Tabs
                defaultValue="all"
                className="w-full"
                onValueChange={setActiveCategory}
              >
                <TabsList className="grid grid-cols-3 md:grid-cols-6 gap-2">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="flex items-center gap-1 text-xs"
                    >
                      {category.icon}
                      <span className="hidden md:inline">{category.label}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </div>
        </motion.section>

        {/* Media Grid */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold mb-6"
          >
            Latest Media
          </motion.h2>

          {filteredItems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-slate-500">
                No media items found matching your criteria.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                }}
              >
                Clear Filters
              </Button>
            </motion.div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredItems.map((item) => (
                <motion.div key={item.id} variants={itemVariants}>
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow group">
                    <div className="h-48 bg-slate-200 relative">
                      {item.type === "videos" && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-black/30 rounded-full p-4">
                            <Play className="h-8 w-8 text-white fill-white" />
                          </div>
                        </div>
                      )}
                      <Badge className="absolute top-3 left-3 capitalize">
                        {item.type}
                      </Badge>
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-slate-500 flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(item.date).toLocaleDateString()}
                        </span>
                      </div>
                      <CardTitle className="text-lg group-hover:text-yellow-600 transition-colors">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{item.description}</CardDescription>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {item.tags.map((tag, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" /> View
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share2 className="h-4 w-4 mr-1" /> Share
                        </Button>
                      </div>
                      {item.downloads && (
                        <Button variant="default" size="sm">
                          <Download className="h-4 w-4 mr-1" /> Download
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </section>

        {/* Press Contacts & Mentions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Press Contacts */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-6">Press Contacts</h2>
            <div className="space-y-4">
              {pressContacts.map((contact, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full bg-slate-200 mr-4"></div>
                      <div>
                        <CardTitle className="text-lg">
                          {contact.name}
                        </CardTitle>
                        <CardDescription>{contact.title}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-2 text-slate-500" />
                        <a
                          href={`mailto:${contact.email}`}
                          className="text-yellow-600 hover:underline"
                        >
                          {contact.email}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-slate-500" />
                        <a
                          href={`tel:${contact.phone}`}
                          className="text-yellow-600 hover:underline"
                        >
                          {contact.phone}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.section>

          {/* Recent Press Mentions */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-6">Recent Press Mentions</h2>
            <div className="space-y-4">
              {pressMentions.map((mention, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline">{mention.outlet}</Badge>
                      <span className="text-sm text-slate-500">
                        {new Date(mention.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="font-semibold mb-2">{mention.title}</h3>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-yellow-600"
                    >
                      Read article <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Media Resources */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6">Media Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-yellow-100 p-3 rounded-full w-fit">
                  <BookOpen className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle>Company Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Download our latest company profile with information about our
                  history, leadership, and services.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Download className="h-4 w-4 mr-2" /> Download PDF
                </Button>
              </CardFooter>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-green-100 p-3 rounded-full w-fit">
                  <Image className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Media Kit</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Access our media kit containing logos, brand guidelines, and
                  high-resolution images for publications.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Download className="h-4 w-4 mr-2" /> Download Kit
                </Button>
              </CardFooter>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-purple-100 p-3 rounded-full w-fit">
                  <Mic className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Interview Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Request an interview with our executives or subject matter
                  experts for your publication.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Camera className="h-4 w-4 mr-2" /> Request Interview
                </Button>
              </CardFooter>
            </Card>
          </div>
        </motion.section>

        {/* Newsletter Signup */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-6 shadow-sm border"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-slate-600 mb-6">
              Subscribe to our media mailing list to receive press releases and
              updates directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <Input type="email" placeholder="Your email address" />
              <Button>Subscribe</Button>
            </div>
            <p className="text-xs text-slate-500 mt-4">
              You can unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
