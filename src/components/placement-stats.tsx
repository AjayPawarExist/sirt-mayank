import { Card, CardContent } from "@/components/ui/card"

export default function PlacementStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="bg-white/10 backdrop-blur-sm border-none">
        <CardContent className="p-6 text-center">
          <div className="text-4xl font-bold text-gold mb-2">200+</div>
          <p className="text-white/90">Recruiting Companies</p>
        </CardContent>
      </Card>

      <Card className="bg-white/10 backdrop-blur-sm border-none">
        <CardContent className="p-6 text-center">
          <div className="text-4xl font-bold text-gold mb-2">95%</div>
          <p className="text-white/90">Placement Rate</p>
        </CardContent>
      </Card>

      <Card className="bg-white/10 backdrop-blur-sm border-none">
        <CardContent className="p-6 text-center">
          <div className="text-4xl font-bold text-gold mb-2">₹12 LPA</div>
          <p className="text-white/90">Highest Package</p>
        </CardContent>
      </Card>

      <Card className="bg-white/10 backdrop-blur-sm border-none">
        <CardContent className="p-6 text-center">
          <div className="text-4xl font-bold text-gold mb-2">₹5.2 LPA</div>
          <p className="text-white/90">Average Package</p>
        </CardContent>
      </Card>
    </div>
  )
}
