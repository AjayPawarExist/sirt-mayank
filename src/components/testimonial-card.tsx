import Image from "next/image"
import { Star, StarHalf } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  name: string
  course: string
  image: string
  rating: number
  testimonial: string
}

export default function TestimonialCard({ name, course, image, rating, testimonial }: TestimonialCardProps) {
  const renderRating = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="h-4 w-4 fill-maroon text-maroon" />)
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="h-4 w-4 fill-maroon text-maroon" />)
    }

    return stars
  }

  return (
    <Card className="border-none shadow-md">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="relative h-20 w-20 rounded-full overflow-hidden mb-4 border-2 border-maroon">
            <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
          </div>
          <div className="flex mb-2">{renderRating(rating)}</div>
          <p className="text-gray-600 italic mb-4">&quot;{testimonial}&quot;</p>
          <h3 className="font-bold text-maroon">{name}</h3>
          <p className="text-sm text-gray-500">{course}</p>
        </div>
      </CardContent>
    </Card>
  )
}
