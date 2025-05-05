"use client"

import { useState } from "react"
import { Phone, X } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"

export default function FloatingCallButton() {
  const [isExpanded, setIsExpanded] = useState(false)
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-4 w-64"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-navy-blue">Contact Us</h3>
              <button 
                onClick={() => setIsExpanded(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-2">
            
              <a 
                href="tel:+919131734942" 
                className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md transition-colors"
              >
                <Phone className="h-4 w-4 text-bright-red" />
                <span className="text-sm">+91 9131734942</span>
              </a>
              <div className="text-xs text-gray-500 mt-2">
                Call us for admission inquiries
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className={`flex items-center justify-center rounded-full shadow-lg ${
          isExpanded ? "bg-maroon" : "bg-bright-red"
        } text-white h-14 w-14 hover:bg-bright-red/90 transition-colors`}
      >
        <Phone className="h-6 w-6" />
        <span className="sr-only">Call Us</span>
      </motion.button>
    </div>
  )
}
