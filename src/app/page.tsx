"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ChevronRight,
  MapPin,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import AdmissionForm from "@/components/admission-form"
import CourseCard from "@/components/course-card"
import TestimonialCard from "@/components/testimonial-card"
import PlacementStats from "@/components/placement-stats"
import CampusGallery from "@/components/campus-gallery"
import VideoSection from "@/components/video-section"
import TopBanner from "@/components/top-banner"
import MainNavigation from "@/components/main-navigation"
// Add the import for AccreditationBadges
import AccreditationBadges from "@/components/accreditation-badges"
import FloatingCallButton from "@/components/floating-call-button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Top Banner */}
      <TopBanner />

      {/* Main Navigation */}
      <MainNavigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative h-[600px] md:h-[700px] overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/campus.png" alt="SIRT Bhopal Campus" fill className="object-cover blur-md" priority />
            <div className="absolute inset-0 bg-navy-blue/70"></div>
          </div>
          <div className="container mx-auto px-2 md:px-4 relative h-full flex flex-col justify-center items-start text-white">
            <div className="max-w-2xl space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight text-maroon">
                Join SIRT — Central India&apos;s Leading Engineering & Management Institution
              </h1>
              <p className="text-lg md:text-xl opacity-90 font-bold">
                Admissions Open for 2025 | 100% Placement Assistance | AICTE Approved | NAAC A grade
              </p>
              <div className="pt-4">
                <Button
                  size="lg"
                  className="bg-bright-red hover:bg-bright-red/90 text-white"
                  onClick={() => {
                    document.getElementById("admission-form")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Apply Now <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Accreditation Badges */}
        <AccreditationBadges />

        {/* Why Choose SIRT */}
        <section id="why-sirt" className="py-16 bg-gray-50">
          <div className="container mx-auto px-2 md:px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-maroon">Why Choose SIRT</h2>
              <div className="mt-2 h-1 w-20 bg-gold mx-auto"></div>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Discover why thousands of students choose SIRT Bhopal for their higher education journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gold"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-navy-blue">High Placement Rates</h3>
                  <p className="mt-2 text-gray-600">
                    Consistently achieving excellent placement records with top companies across India
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gold"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-navy-blue">Industry-Oriented Curriculum</h3>
                  <p className="mt-2 text-gray-600">
                    Courses designed with industry inputs to ensure students are job-ready
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gold"
                    >
                      <path d="M12 2v4" />
                      <path d="M12 18v4" />
                      <path d="m4.93 4.93 2.83 2.83" />
                      <path d="m16.24 16.24 2.83 2.83" />
                      <path d="M2 12h4" />
                      <path d="M18 12h4" />
                      <path d="m4.93 19.07 2.83-2.83" />
                      <path d="m16.24 7.76 2.83-2.83" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-navy-blue">25+ Years of Excellence</h3>
                  <p className="mt-2 text-gray-600">
                    A legacy of academic excellence and producing industry leaders since 1995
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gold"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-navy-blue">NAAC Accreditation</h3>
                  <p className="mt-2 text-gray-600">
                    NAAC &apos;A&apos; grade accreditation, reflecting our commitment to quality education
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gold"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-navy-blue">5000+ Students</h3>
                  <p className="mt-2 text-gray-600">
                    A vibrant community of over 5000 students from across India and abroad
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gold"
                    >
                      <path d="M18 8a6 6 0 0 0-6-6 6 6 0 0 0-6 6c0 7 6 13 6 13s6-6 6-13z" />
                      <circle cx="12" cy="8" r="2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-navy-blue">Faculty from IITs & NITs</h3>
                  <p className="mt-2 text-gray-600">
                    Learn from the best with our faculty from premier institutions like IITs and NITs
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Courses Offered */}
        <section id="courses" className="py-16">
          <div className="container mx-auto px-2 md:px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-maroon">Courses Offered</h2>
              <div className="mt-2 h-1 w-20 bg-gold mx-auto"></div>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Explore our wide range of undergraduate and postgraduate programs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <CourseCard
                title="B.Tech"
                icon="Cpu"
                description="4-year undergraduate program in various engineering disciplines"
                prospects="Career prospects in IT, manufacturing, research, and more"
              />

              <CourseCard
                title="M.Tech"
                icon="Layers"
                description="2-year postgraduate program for specialized engineering knowledge"
                prospects="Advanced roles in R&D, specialized engineering fields"
              />

              <CourseCard
                title="BBA"
                icon="BarChart"
                description="3-year undergraduate program in business administration"
                prospects="Careers in management, marketing, finance, and entrepreneurship"
              />

              <CourseCard
                title="MBA"
                icon="TrendingUp"
                description="2-year postgraduate program in business management"
                prospects="Leadership roles in corporate, consulting, and business strategy"
              />

              <CourseCard
                title="BCA"
                icon="Monitor"
                description="3-year undergraduate program in computer applications"
                prospects="Software development, web development, IT services"
              />

              <CourseCard
                title="MCA"
                icon="Code"
                description="2-year postgraduate program in computer applications"
                prospects="Advanced software engineering, system architecture, data science"
              />

              <CourseCard
                title="B.Tech Lateral"
                icon="GitBranch"
                description="3-year program for diploma holders to earn a B.Tech degree"
                prospects="Fast-track engineering career for diploma graduates"
              />

              <CourseCard
                title="Ph.D Programs"
                icon="BookOpen"
                description="Doctoral research programs in various disciplines"
                prospects="Academic careers, advanced research positions in industry"
              />
            </div>
          </div>
        </section>

        {/* Placement Highlights */}
        <section id="placements" className="py-16 bg-navy-blue text-white">
          <div className="container mx-auto px-2 md:px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Placement Highlights</h2>
              <div className="mt-2 h-1 w-20 bg-gold mx-auto"></div>
              <p className="mt-4 opacity-90 max-w-2xl mx-auto">
                Our students are placed in top companies across India and abroad
              </p>
            </div>

            <PlacementStats />

            <div className="mt-16">
              <h3 className="text-xl font-bold text-center mb-8">Our Recruiters</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 items-center justify-items-center">
                {["TCS", "Infosys", "Wipro", "Cognizant", "IBM", "Accenture"].map((company, index) => (
                    <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 w-full h-20 flex items-center justify-center"
                    >
                    <Image
                      src={`/comp-${index + 1}.jpg`}
                      alt={`${company} logo`}
                      width={120}
                      height={60}
                      className="max-h-12 w-auto"
                    />
                    </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Campus Tour Gallery */}
        <section id="campus" className="py-16">
          <div className="container mx-auto px-2 md:px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-maroon">Campus Tour</h2>
              <div className="mt-2 h-1 w-20 bg-gold mx-auto"></div>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Take a virtual tour of our state-of-the-art campus facilities
              </p>
            </div>

            <CampusGallery />
          </div>
        </section>

        {/* YouTube Video Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-2 md:px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-maroon">Campus Life</h2>
              <div className="mt-2 h-1 w-20 bg-gold mx-auto"></div>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Experience the vibrant campus life at SIRT Bhopal</p>
            </div>

            <VideoSection />
          </div>
        </section>

        {/* Student Testimonials */}
        <section id="testimonials" className="py-16">
          <div className="container mx-auto px-2 md:px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-maroon">Student Testimonials</h2>
              <div className="mt-2 h-1 w-20 bg-gold mx-auto"></div>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Hear what our students have to say about their experience at SIRT Bhopal
              </p>
            </div>

            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                <CarouselItem>
                  <TestimonialCard
                    name="Rahul Sharma"
                    course="B.Tech CSE, 2023"
                    image="/stude-2.jpg"
                    rating={5}
                    testimonial="My experience at SIRT Bhopal has been transformative. The faculty is excellent and the placement cell helped me secure a job at TCS even before graduation."
                  />
                </CarouselItem>
                <CarouselItem>
                  <TestimonialCard
                    name="Priya Patel"
                    course="MBA, 2022"
                    image="/stude-1.jpg"
                    rating={5}
                    testimonial="The MBA program at SIRT gave me practical business knowledge and leadership skills. The industry exposure through internships was invaluable for my career."
                  />
                </CarouselItem>
                <CarouselItem>
                  <TestimonialCard
                    name="Amit Kumar"
                    course="B.Tech Mechanical, 2023"
                    image="/stude-3.jpg"
                    rating={4}
                    testimonial="The labs and workshops at SIRT are state-of-the-art. I got hands-on experience with the latest technologies which helped me stand out during placements."
                  />
                </CarouselItem>
                <CarouselItem>
                  <TestimonialCard
                    name="Neha Singh"
                    course="BCA, 2022"
                    image="/stude-1.jpg"
                    rating={5}
                    testimonial="The BCA program provided me with strong programming skills and industry knowledge. The faculty mentorship helped me develop both technically and professionally."
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>
        </section>

        {/* Admission Form */}
        <section id="admission-form" className="py-16 bg-navy-blue text-white">
          <div className="container mx-auto px-2 md:px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold">Apply for Admission</h2>
                <div className="mt-2 h-1 w-20 bg-gold"></div>
                <p className="mt-6 opacity-90">
                  Take the first step towards a successful career. Fill out the form to get in touch with our admission
                  counselors.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Phone className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-medium">Call Us</h3>
                      <Link href="tel:+919131734942">
                        <p className="opacity-90">+91 9131734942</p>
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Mail className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email Us</h3>
                      <Link href="mailto:admissions@sirt.live">
                        <p className="opacity-90">admissions@sirt.live</p>
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-medium">Visit Us</h3>
                      <p className="opacity-90">SIRT Campus, Bhopal, Madhya Pradesh - 462036</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <AdmissionForm />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-maroon text-white">
          <div className="container mx-auto px-2 md:px-4 text-center">
            <h2 className="text-3xl font-bold">Limited Seats | Book Free Counseling Today!</h2>
            <p className="mt-4 max-w-2xl mx-auto">
              Don&apos;t miss the opportunity to join Central India&apos;s leading engineering and management institution
            </p>
            <Button
              size="lg"
              className="mt-8 bg-bright-red hover:bg-bright-red/90 text-white"
              onClick={() => {
                document.getElementById("admission-form")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Apply Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div> 
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-navy-blue text-white py-12">
        <div className="container mx-auto px-2 md:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/logo.webp"
                  alt="SIRT Bhopal Logo"
                  width={100}
                  height={100}
                  className="h-10 w-auto"
                />
              </div>
              <p className="opacity-80 text-sm">
                Sagar Institute of Research & Technology (SIRT) is one of the premier engineering and management
                institutions in Central India.
              </p>
              <div className="flex gap-4 mt-4">
                <Link
                  href="#"
                  className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy-blue transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                </Link>
                <Link
                  href="#"
                  className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy-blue transition-colors"
                >
                  <Twitter className="h-4 w-4" />
                </Link>
                <Link
                  href="#"
                  className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy-blue transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                </Link>
                <Link
                  href="#"
                  className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy-blue transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
                <Link
                  href="#"
                  className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy-blue transition-colors"
                >
                  <Youtube className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="opacity-80 hover:opacity-100 hover:text-gold transition-colors text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="opacity-80 hover:opacity-100 hover:text-gold transition-colors text-sm">
                    Academics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="opacity-80 hover:opacity-100 hover:text-gold transition-colors text-sm">
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="opacity-80 hover:opacity-100 hover:text-gold transition-colors text-sm">
                    Placements
                  </Link>
                </li>
                <li>
                  <Link href="#" className="opacity-80 hover:opacity-100 hover:text-gold transition-colors text-sm">
                    Research
                  </Link>
                </li>
                <li>
                  <Link href="#" className="opacity-80 hover:opacity-100 hover:text-gold transition-colors text-sm">
                    Campus Life
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Programs</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="opacity-80 hover:opacity-100 hover:text-gold transition-colors text-sm">
                    B.Tech
                  </Link>
                </li>
                <li>
                  <Link href="#" className="opacity-80 hover:opacity-100 hover:text-gold transition-colors text-sm">
                    M.Tech
                  </Link>
                </li>
                <li>
                  <Link href="#" className="opacity-80 hover:opacity-100 hover:text-gold transition-colors text-sm">
                    BBA
                  </Link>
                </li>
                <li>
                  <Link href="#" className="opacity-80 hover:opacity-100 hover:text-gold transition-colors text-sm">
                    MBA
                  </Link>
                </li>
                <li>
                  <Link href="#" className="opacity-80 hover:opacity-100 hover:text-gold transition-colors text-sm">
                    BCA
                  </Link>
                </li>
                <li>
                  <Link href="#" className="opacity-80 hover:opacity-100 hover:text-gold transition-colors text-sm">
                    MCA
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <MapPin className="h-5 w-5 text-gold flex-shrink-0" />
                  <span className="opacity-80 text-sm">SIRT Campus, Bhopal, Madhya Pradesh - 462036</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="h-5 w-5 text-gold flex-shrink-0" />
                  <Link href="tel:+919131734942">
                  <span className="opacity-80 text-sm">+91 9131734942</span>
                  </Link>
                </li>
                <li className="flex gap-3">
                  <Mail className="h-5 w-5 text-gold flex-shrink-0" />
                  <Link href="mailto:admissions@sirt.live">
                    <span className="opacity-80 text-sm">admissions@sirt.live</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm opacity-80">&copy; {new Date().getFullYear()} SIRT Bhopal. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-xs opacity-80 hover:opacity-100 hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs opacity-80 hover:opacity-100 hover:text-gold transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-xs opacity-80 hover:opacity-100 hover:text-gold transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <FloatingCallButton/>
    </div>
  )
}
