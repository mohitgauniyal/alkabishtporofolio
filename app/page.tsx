"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronRight, Mail, Linkedin, Twitter, Search, BarChart, LineChart, Send, FileText, PieChart, Award, Briefcase, GraduationCap } from 'lucide-react'
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold text-gray-900 dark:text-white">
            <span className="text-lavender-600">Alka</span> Bisht
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-gray-600 hover:text-lavender-600 dark:text-gray-300 dark:hover:text-lavender-400 transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              About
            </a>
            <a
              href="#experience"
              className="text-gray-600 hover:text-lavender-600 dark:text-gray-300 dark:hover:text-lavender-400 transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Experience
            </a>
            <a
              href="#internships"
              className="text-gray-600 hover:text-lavender-600 dark:text-gray-300 dark:hover:text-lavender-400 transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("internships")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Internships
            </a>
            <a
              href="#skills"
              className="text-gray-600 hover:text-lavender-600 dark:text-gray-300 dark:hover:text-lavender-400 transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-lavender-600 dark:text-gray-300 dark:hover:text-lavender-400 transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Contact
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <a
              href="/pdf/alka_bisht_resume.pdf"
              download
              className="hidden md:flex border-lavender-200 text-lavender-600 hover:bg-lavender-50 dark:border-lavender-800 dark:text-lavender-400 dark:hover:bg-lavender-950 h-10 px-4 py-2 items-center justify-center rounded-md text-sm font-medium border shadow-sm transition-colors"
            >
              Download Resume
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="blob-animation opacity-10"></div>
            <div className="blob-animation blob-animation-2 opacity-10"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="order-2 md:order-1 animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                <span className="text-lavender-600 dark:text-lavender-400">Alka Bisht</span>
              </h1>
              <h2
                className="text-2xl md:text-3xl font-serif text-gray-700 dark:text-gray-300 mb-6 animate-fade-in-up"
                style={{ animationDelay: "200ms" }}
              >
                Content & Social Media Marketing Manager
              </h2>
              <p
                className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg animate-fade-in-up"
                style={{ animationDelay: "400ms" }}
              >
                Creative and results-driven professional with over 3.5+ years of experience in content creation, social
                media management, and brand strategy.
              </p>
              <div className="flex space-x-4 animate-fade-in-up" style={{ animationDelay: "600ms" }}>
                <Button
                  className="bg-lavender-600 hover:bg-lavender-700 text-white"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Get in Touch <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="border-lavender-200 text-lavender-600 hover:bg-lavender-50 dark:border-lavender-800 dark:text-lavender-400 dark:hover:bg-lavender-950"
                  onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
                >
                  View Experience
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center md:justify-end animate-float">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                <Image
                  src="images/alkabishtprofile.jpeg"
                  alt="Alka Bisht"
                  width={320}
                  height={320}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent dark:from-gray-950 dark:to-transparent"></div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="wave-animation opacity-5"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
              <div className="w-20 h-1 bg-lavender-400 rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className="relative w-full max-w-sm h-80 rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="images/seo.jpg"
                    alt="Alka working"
                    width={420}
                    height={500}
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-serif text-gray-800 dark:text-gray-200 mb-4">
                  Passionate About Digital Marketing
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Creative and results-driven Content & Social Media Marketing Manager with over 3.5+ years of
                  experience in content creation, social media management, and brand strategy.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Proven ability to drive engagement, optimize campaigns, and analyze performance metrics for continuous
                  improvement. Skilled in handling multi-platform social media operations, reporting, and client
                  communications.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Content Strategy</h4>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-lavender-500 h-2 rounded-full" style={{ width: "95%" }}></div>
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Social Media</h4>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-lavender-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">SEO</h4>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-lavender-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Analytics</h4>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-lavender-500 h-2 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                Experience
              </h2>
              <div className="w-20 h-1 bg-lavender-400 rounded-full"></div>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-12">
                {/* Timeline Item 1 */}
                <div className="timeline-item" data-aos="fade-up">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <div className="flex items-center mb-4 md:mb-0">
                        <div className="w-12 h-12 bg-lavender-100 dark:bg-lavender-900 rounded-full flex items-center justify-center mr-4">
                          <Briefcase className="h-6 w-6 text-lavender-600 dark:text-lavender-400" />
                        </div>
                        <div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">April 2023 - Present</span>
                          <h3 className="font-medium text-gray-900 dark:text-white">Manager, Content & Social Media</h3>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3 md:pl-8 border-l border-gray-200 dark:border-gray-700">
                      <h4 className="text-xl font-serif text-gray-800 dark:text-gray-200 mb-2">AMK Global Group</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Responsible for publishing and community management across LinkedIn, Twitter, Facebook,
                        Instagram, and YouTube, increasing engagement by 30% in 4 months.
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Developed and managed a social media content calendar, ensuring brand consistency and timely
                        delivery of content.
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Tracked and analyzed social media KPIs, providing actionable recommendations to optimize
                        performance.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-lavender-50 text-lavender-600 text-sm rounded-full dark:bg-lavender-950 dark:text-lavender-400">
                          Social Media
                        </span>
                        <span className="px-3 py-1 bg-lavender-50 text-lavender-600 text-sm rounded-full dark:bg-lavender-950 dark:text-lavender-400">
                          Content Strategy
                        </span>
                        <span className="px-3 py-1 bg-lavender-50 text-lavender-600 text-sm rounded-full dark:bg-lavender-950 dark:text-lavender-400">
                          Analytics
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Item 2 */}
                <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <div className="flex items-center mb-4 md:mb-0">
                        <div className="w-12 h-12 bg-lavender-100 dark:bg-lavender-900 rounded-full flex items-center justify-center mr-4">
                          <BarChart className="h-6 w-6 text-lavender-600 dark:text-lavender-400" />
                        </div>
                        <div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">Feb 2022 - April 2023</span>
                          <h3 className="font-medium text-gray-900 dark:text-white">
                            Content & Social Media Specialist
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3 md:pl-8 border-l border-gray-200 dark:border-gray-700">
                      <h4 className="text-xl font-serif text-gray-800 dark:text-gray-200 mb-2">AMK Global Group</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Supported the execution of digital marketing campaigns that resulted in a 10% increase in lead
                        generation through improved targeting and optimization.
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Managed website content updates, optimized blog posts for SEO, and improved organic search
                        rankings, significantly enhancing the company's digital presence.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-lavender-50 text-lavender-600 text-sm rounded-full dark:bg-lavender-950 dark:text-lavender-400">
                          Digital Marketing
                        </span>
                        <span className="px-3 py-1 bg-lavender-50 text-lavender-600 text-sm rounded-full dark:bg-lavender-950 dark:text-lavender-400">
                          SEO
                        </span>
                        <span className="px-3 py-1 bg-lavender-50 text-lavender-600 text-sm rounded-full dark:bg-lavender-950 dark:text-lavender-400">
                          Email Marketing
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Item 3 */}
                <div className="timeline-item" data-aos="fade-up" data-aos-delay="200">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <div className="flex items-center mb-4 md:mb-0">
                        <div className="w-12 h-12 bg-lavender-100 dark:bg-lavender-900 rounded-full flex items-center justify-center mr-4">
                          <LineChart className="h-6 w-6 text-lavender-600 dark:text-lavender-400" />
                        </div>
                        <div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">Aug 2021 - Jan 2022</span>
                          <h3 className="font-medium text-gray-900 dark:text-white">Content Writer</h3>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3 md:pl-8 border-l border-gray-200 dark:border-gray-700">
                      <h4 className="text-xl font-serif text-gray-800 dark:text-gray-200 mb-2">
                        Conexus Network Solutions Pvt Ltd.
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Worked closely with marketing teams to create compelling copy for campaigns, resulting in
                        enhanced brand messaging and improved customer retention.
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Worked on keyword research and SEO best practices to improve content discoverability and
                        increase organic traffic.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-lavender-50 text-lavender-600 text-sm rounded-full dark:bg-lavender-950 dark:text-lavender-400">
                          Content Creation
                        </span>
                        <span className="px-3 py-1 bg-lavender-50 text-lavender-600 text-sm rounded-full dark:bg-lavender-950 dark:text-lavender-400">
                          SEO
                        </span>
                        <span className="px-3 py-1 bg-lavender-50 text-lavender-600 text-sm rounded-full dark:bg-lavender-950 dark:text-lavender-400">
                          Copywriting
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Item 4 */}
                <div className="timeline-item" data-aos="fade-up" data-aos-delay="300">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <div className="flex items-center mb-4 md:mb-0">
                        <div className="w-12 h-12 bg-lavender-100 dark:bg-lavender-900 rounded-full flex items-center justify-center mr-4">
                          <FileText className="h-6 w-6 text-lavender-600 dark:text-lavender-400" />
                        </div>
                        <div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">May 2021 - Aug 2021</span>
                          <h3 className="font-medium text-gray-900 dark:text-white">Content Writer</h3>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3 md:pl-8 border-l border-gray-200 dark:border-gray-700">
                      <h4 className="text-xl font-serif text-gray-800 dark:text-gray-200 mb-2">
                        RG Media Services LLP
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Developed engaging content for digital platforms, driving audience engagement and increasing
                        website traffic by optimizing for SEO.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-lavender-50 text-lavender-600 text-sm rounded-full dark:bg-lavender-950 dark:text-lavender-400">
                          Content Writing
                        </span>
                        <span className="px-3 py-1 bg-lavender-50 text-lavender-600 text-sm rounded-full dark:bg-lavender-950 dark:text-lavender-400">
                          Digital Platforms
                        </span>
                        <span className="px-3 py-1 bg-lavender-50 text-lavender-600 text-sm rounded-full dark:bg-lavender-950 dark:text-lavender-400">
                          SEO
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Internships Section */}
        <section id="internships" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                Internships
              </h2>
              <div className="w-20 h-1 bg-lavender-400 rounded-full"></div>
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Internship Item 1 */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-lavender-100 dark:bg-lavender-900 rounded-full flex items-center justify-center mr-3">
                        <FileText className="h-5 w-5 text-lavender-600 dark:text-lavender-400" />
                      </div>
                      <div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Feb 2021 - April 2021</span>
                        <h3 className="font-medium text-gray-900 dark:text-white">Content Writer</h3>
                      </div>
                    </div>
                    <h4 className="text-lg font-serif text-gray-800 dark:text-gray-200 mb-2">App Landing Page</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Assisted in developing and implementing social media campaigns and strategies. Conducted
                      research on industry trends, audience preferences, and competitor activities.
                    </p>
                  </div>
                </div>

                {/* Internship Item 2 */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-lavender-100 dark:bg-lavender-900 rounded-full flex items-center justify-center mr-3">
                        <FileText className="h-5 w-5 text-lavender-600 dark:text-lavender-400" />
                      </div>
                      <div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Nov 2020 - Dec 2020</span>
                        <h3 className="font-medium text-gray-900 dark:text-white">Content Writer</h3>
                      </div>
                    </div>
                    <h4 className="text-lg font-serif text-gray-800 dark:text-gray-200 mb-2">HUMCEN</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Suggested creative ideas for new posts, campaigns, or content formats. Developed engaging and
                      high-quality content tailored to target audiences.
                    </p>
                  </div>
                </div>

                {/* Internship Item 3 */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-lavender-100 dark:bg-lavender-900 rounded-full flex items-center justify-center mr-3">
                        <FileText className="h-5 w-5 text-lavender-600 dark:text-lavender-400" />
                      </div>
                      <div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Oct 2020</span>
                        <h3 className="font-medium text-gray-900 dark:text-white">Content Editor</h3>
                      </div>
                    </div>
                    <h4 className="text-lg font-serif text-gray-800 dark:text-gray-200 mb-2">TechGeekers</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Edited and refined content for technical publications, ensuring accuracy and clarity in complex
                      topics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="particles-animation opacity-5"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                Skills & Expertise
              </h2>
              <div className="w-20 h-1 bg-lavender-400 rounded-full"></div>
              <p className="text-gray-600 dark:text-gray-400 mt-4 text-center max-w-2xl">
                A comprehensive set of skills developed through years of experience in content and social media
                marketing.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-serif text-gray-900 dark:text-white mb-4">Professional Skills</h3>
                <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-lavender-400 rounded-full mr-2"></div>
                    <span className="text-gray-600 dark:text-gray-400">Content Strategy & Development</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-lavender-400 rounded-full mr-2"></div>
                    <span className="text-gray-600 dark:text-gray-400">Social Media Marketing</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-lavender-400 rounded-full mr-2"></div>
                    <span className="text-gray-600 dark:text-gray-400">Branding & Employer Brand</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-lavender-400 rounded-full mr-2"></div>
                    <span className="text-gray-600 dark:text-gray-400">Copywriting & Editing</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-lavender-400 rounded-full mr-2"></div>
                    <span className="text-gray-600 dark:text-gray-400">Team Leadership & Mentorship</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-lavender-400 rounded-full mr-2"></div>
                    <span className="text-gray-600 dark:text-gray-400">SEO & Keyword Optimization</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-lavender-400 rounded-full mr-2"></div>
                    <span className="text-gray-600 dark:text-gray-400">Analytics Metrics</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-lavender-400 rounded-full mr-2"></div>
                    <span className="text-gray-600 dark:text-gray-400">Paid Advertising</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-lavender-400 rounded-full mr-2"></div>
                    <span className="text-gray-600 dark:text-gray-400">Email Marketing Campaigns</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-lavender-400 rounded-full mr-2"></div>
                    <span className="text-gray-600 dark:text-gray-400">Community Engagement</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-lavender-400 rounded-full mr-2"></div>
                    <span className="text-gray-600 dark:text-gray-400">Video Production</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-lavender-400 rounded-full mr-2"></div>
                    <span className="text-gray-600 dark:text-gray-400">Client Relationship Management</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-serif text-gray-900 dark:text-white mb-4">Education</h3>
                <ul className="space-y-4 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start">
                    <GraduationCap className="h-5 w-5 text-lavender-600 dark:text-lavender-400 mt-1 mr-2" />
                    <div>
                      <p className="font-medium">Master of Business Administration (Online)</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Graphic Era Hill University, Present</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <GraduationCap className="h-5 w-5 text-lavender-600 dark:text-lavender-400 mt-1 mr-2" />
                    <div>
                      <p className="font-medium">Bachelor of Business Administration</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Graphic Era Hill University, 2018-2021</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-serif text-gray-900 dark:text-white mb-4">Certifications</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-center">
                    <Award className="h-4 w-4 text-lavender-600 dark:text-lavender-400 mr-2" />
                    Advance Digital Marketing - IIM SKILLS
                  </li>
                  <li className="flex items-center">
                    <Award className="h-4 w-4 text-lavender-600 dark:text-lavender-400 mr-2" />
                    Fundamental of Digital Marketing - Internshala
                  </li>
                  <li className="flex items-center">
                    <Award className="h-4 w-4 text-lavender-600 dark:text-lavender-400 mr-2" />
                    Advance Google Analytics - Google
                  </li>
                  <li className="flex items-center">
                    <Award className="h-4 w-4 text-lavender-600 dark:text-lavender-400 mr-2" />
                    Content Marketing - IIM SKILLS & Hubspot
                  </li>
                  <li className="flex items-center">
                    <Award className="h-4 w-4 text-lavender-600 dark:text-lavender-400 mr-2" />
                    Email Marketing - Hubspot
                  </li>
                  <li className="flex items-center">
                    <Award className="h-4 w-4 text-lavender-600 dark:text-lavender-400 mr-2" />
                    Google Ads Search - Skillshop
                  </li>
                  <li className="flex items-center">
                    <Award className="h-4 w-4 text-lavender-600 dark:text-lavender-400 mr-2" />
                    Google Analytics for Beginners - Google
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>



        {/* Work Showcase Section */}
        <section id="work" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="particles-animation opacity-5"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                Work Showcase
              </h2>
              <div className="w-20 h-1 bg-lavender-400 rounded-full"></div>
              <p className="text-gray-600 dark:text-gray-400 mt-4 text-center max-w-2xl">
                A selection of SEO projects and campaigns that delivered significant results for clients across various
                industries.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="group bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src="images/freelancerwriter.jpg"
                    alt="Freelance Writer & SEO Consultant"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif text-gray-900 dark:text-white mb-2">Freelance Writer & SEO Consultant</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Crafted high-quality, SEO-optimized content for blogs, landing pages, and marketing campaigns tailored to the IT and digital solutions industry.
                  </p>
                </div>
              </div>

              {/* Project 2 */}
              <div className="group bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src="images/timesofindia.png"
                    alt="Contributor – Times of India"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif text-gray-900 dark:text-white mb-2">Contributor – Times of India</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Wrote insightful and engaging articles published in the Times of India, focusing on lifestyle, education, and digital trends.
                  </p>
                </div>
              </div>

              {/* Project 3 */}
              <div className="group bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src="images/iimskills.png"
                    alt="Guest Blogger – IIM SKILLS"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif text-gray-900 dark:text-white mb-2">Guest Blogger – IIM SKILLS</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Created informative and value-driven blog posts as a guest contributor for IIM SKILLS, covering digital marketing, content strategy, and career growth.
                  </p>
                </div>
              </div>

              {/* Project 4 */}
              <div className="group bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src="images/quora.png"
                    alt="Quora Content Creator"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif text-gray-900 dark:text-white mb-2">Quora Content Creator</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                  77K+ views | 2.3K monthly views | 
Active Quora writer with a growing readership. Known for insightful answers on digital marketing, writing careers, and personal development.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>




        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                Get In Touch
              </h2>
              <div className="w-20 h-1 bg-lavender-400 rounded-full"></div>
              <p className="text-gray-600 dark:text-gray-400 mt-4 text-center max-w-2xl">
                Interested in working together? Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        className="w-full border-gray-300 dark:border-gray-700 focus:border-lavender-500 focus:ring-lavender-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        className="w-full border-gray-300 dark:border-gray-700 focus:border-lavender-500 focus:ring-lavender-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Your message"
                        rows={5}
                        className="w-full border-gray-300 dark:border-gray-700 focus:border-lavender-500 focus:ring-lavender-500"
                      />
                    </div>
                    <Button className="w-full bg-lavender-600 hover:bg-lavender-700 text-white pulse-animation">
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-serif text-gray-900 dark:text-white mb-6">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-lavender-100 dark:bg-lavender-900 flex items-center justify-center mr-4">
                          <Mail className="h-5 w-5 text-lavender-600 dark:text-lavender-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                          <p className="text-gray-900 dark:text-white">alkabisht04@gmail.com</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-lavender-100 dark:bg-lavender-900 flex items-center justify-center mr-4">
                          <Linkedin className="h-5 w-5 text-lavender-600 dark:text-lavender-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</p>
                          <a
                            href="https://www.linkedin.com/in/alka-bisht/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-900 dark:text-white hover:text-lavender-600 dark:hover:text-lavender-400 transition-colors"
                          >
                            linkedin.com/in/alka-bisht
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-lavender-100 dark:bg-lavender-900 flex items-center justify-center mr-4">
                          <Search className="h-5 w-5 text-lavender-600 dark:text-lavender-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                          <p className="text-gray-900 dark:text-white">Pune, India</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Available for freelance projects and full-time opportunities.
                      </p>
                      <a
                        href="/pdf/alka_bisht_resume.pdf"
                        download
                        className="w-full inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-lavender-200 text-lavender-600 hover:bg-lavender-50 dark:border-lavender-800 dark:text-lavender-400 dark:hover:bg-lavender-950"
                      >
                        Download Resume
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                © {new Date().getFullYear()} Alka Bisht. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="mailto:alkabisht04@gmail.com"
                className="text-gray-500 hover:text-lavender-600 dark:text-gray-400 dark:hover:text-lavender-400"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
              <a
                href="https://www.linkedin.com/in/alka-bisht/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-lavender-600 dark:text-gray-400 dark:hover:text-lavender-400"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://www.quora.com/profile/Alka-Bisht-19"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-lavender-600 dark:text-gray-400 dark:hover:text-lavender-400"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Quora</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
