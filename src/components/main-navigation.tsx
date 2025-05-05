"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export default function MainNavigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const handleMouseEnter = (id: string) => {
    setActiveDropdown(id)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  const navItems = [
    {
      id: "about",
      label: "About US",
      href: "#about",
      dropdown: [
        { label: "About SIRT", href: "#about-sirt" },
        { label: "Vision & Mission", href: "#vision" },
        { label: "Director's Message", href: "#director" },
      ],
    },
    {
      id: "academics",
      label: "Academics",
      href: "#academics",
      dropdown: [
        { label: "Departments", href: "#departments" },
        { label: "Programs", href: "#programs" },
        { label: "Academic Calendar", href: "#calendar" },
      ],
    },
    {
      id: "placements",
      label: "Placements",
      href: "#placements",
      dropdown: [
        { label: "Placement Cell", href: "#placement-cell" },
        { label: "Our Recruiters", href: "#recruiters" },
        { label: "Placement Statistics", href: "#placement-stats" },
      ],
    },
    {
      id: "links",
      label: "Links",
      href: "#links",
      dropdown: [
        { label: "Student Portal", href: "#student-portal" },
        { label: "Faculty Portal", href: "#faculty-portal" },
        { label: "Library", href: "#library" },
      ],
    },
    {
      id: "iqac",
      label: "IQAC",
      href: "#iqac",
      dropdown: [
        { label: "About IQAC", href: "#about-iqac" },
        { label: "IQAC Reports", href: "#iqac-reports" },
        { label: "Quality Initiatives", href: "#quality" },
      ],
    },
    {
      id: "alumni",
      label: "Alumni",
      href: "#alumni",
      dropdown: [
        { label: "Alumni Association", href: "#alumni-association" },
        { label: "Alumni Events", href: "#alumni-events" },
        { label: "Distinguished Alumni", href: "#distinguished-alumni" },
      ],
    },
  ]

  return (
    <div className="w-full bg-white border-b">
      <div className="container mx-auto px-2 md:px-4 flex justify-between items-center py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.webp"
            alt="SIRT Bhopal Logo"
            width={180}
            height={60}
            className="h-14 w-auto"
          />
        </Link>
        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={item.href}
                className="flex items-center text-navy-blue hover:text-maroon py-2 transition-colors"
              >
                {item.label} <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              {activeDropdown === item.id && (
                <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-b-md z-50">
                  <div className="py-2">
                    {item.dropdown.map((dropdownItem, index) => (
                      <Link
                        key={index}
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-sm text-navy-blue hover:bg-gray-100 hover:text-maroon"
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
        <Link
          href="#admission-form"
          className="hidden lg:block bg-bright-red hover:bg-bright-red/90 text-white px-6 py-2 rounded font-medium"
        >
          Admissions
        </Link>
      </div>
    </div>
  )
}
