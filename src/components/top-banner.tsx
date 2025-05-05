import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Phone } from "lucide-react"

export default function TopBanner() {
  return (
    <div className="w-full bg-navy-blue text-white py-2 px-4">
      <div className="container mx-auto px-2 md:px-4 flex flex-wrap justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="text-xs md:text-sm">WE ARE SOCIAL</span>
          <div className="flex space-x-2">
            <Link href="#" className="text-white hover:text-gold">
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-white hover:text-gold">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-white hover:text-gold">
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-white hover:text-gold">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-white hover:text-gold">
              <Youtube className="h-4 w-4" />
              <span className="sr-only">YouTube</span>
            </Link>

          </div>
        </div>
        <div className="flex space-x-2 mt-2 sm:mt-0">
          <Link href="tel:+919131734942" className="bg-bright-red text-white text-xs px-3 py-1 rounded hover:bg-bright-red/90 flex items-center gap-2">
          <Phone className="h-4 w-4" />
            +91 9131734942
          </Link>
          <Link href="#" className="bg-bright-red text-white text-xs px-3 py-1 rounded hover:bg-bright-red/90">
            Hiring Now!
          </Link>
          <Link href="#" className="bg-bright-red text-white text-xs px-3 py-1 rounded hover:bg-bright-red/90">
            JRF Vacancy!
          </Link>
          <Link href="#" className="bg-bright-red text-white text-xs px-3 py-1 rounded hover:bg-bright-red/90">
            NIRF
          </Link>
        </div>
      </div>
    </div>
  )
}
