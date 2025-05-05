import Image from "next/image"

export default function AccreditationBadges() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-2 md:px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-maroon">Our Accreditations</h2>
          <div className="mt-2 h-1 w-20 bg-gold mx-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="relative w-48 h-48">
            <div className="absolute inset-0">
              <Image
                src="/aa-1.png"
                alt="NAAC A Grade Accreditation"
                width={200}
                height={200}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="relative w-48 h-48">
            <div className="absolute inset-0">
              <Image
                src="/aa-2.png"
                alt="NBA Accreditation"
                width={200}
                height={200}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="relative w-48 h-48">
            <div className="absolute inset-0">
              <Image
                src="/aa-3.png"
                alt="MSME Incubation Center"
                width={200}
                height={200}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
