"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export default function CampusGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const campusImages = [
    {
      src: "/campus.png",
      alt: "SIRT Bhopal Main Building",
      title: "Main Building",
    },
    {
      src: "/campus-2.avif",
      alt: "SIRT Bhopal Library",
      title: "Central Library",
    },
    {
      src: "/campus-3.jpg",
      alt: "SIRT Bhopal Computer Lab",
      title: "Computer Lab",
    },
    {
      src: "/campus-4.jpeg",
      alt: "SIRT Bhopal Sports Ground",
      title: "Sports Complex",
    },
    {
      src: "/campus-6.avif",
      alt: "SIRT Bhopal Auditorium",
      title: "Auditorium",
    },
    {
      src: "/campus-5.webp",
      alt: "SIRT Bhopal Hostel",
      title: "Student Hostel",
    },
  ]

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {campusImages.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-md cursor-pointer group relative"
            onClick={() => setSelectedImage(image.src)}
          >
            <div className="relative h-64 w-full">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <h3 className="text-white font-bold">{image.title}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          {selectedImage && (
            <div className="relative h-[80vh]">
              <Image src={selectedImage || "/placeholder.svg"} alt="Campus view" fill className="object-contain" />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
