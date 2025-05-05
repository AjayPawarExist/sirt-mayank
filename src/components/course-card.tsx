import type { LucideIcon } from "lucide-react"
import { Cpu, Layers, BarChart, TrendingUp, Monitor, Code, GitBranch, BookOpen } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

interface CourseCardProps {
  title: string
  icon: string
  description: string
  prospects: string
}

export default function CourseCard({ title, icon, description, prospects }: CourseCardProps) {
  const getIcon = (iconName: string): LucideIcon => {
    const icons: Record<string, LucideIcon> = {
      Cpu,
      Layers,
      BarChart,
      TrendingUp,
      Monitor,
      Code,
      GitBranch,
      BookOpen,
    }

    return icons[iconName] || Cpu
  }

  const IconComponent = getIcon(icon)

  return (
    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="h-2 bg-maroon"></div>
      <CardContent className="p-6">
        <div className="h-12 w-12 rounded-full bg-navy-blue/10 flex items-center justify-center mb-4">
          <IconComponent className="h-6 w-6 text-navy-blue" />
        </div>
        <h3 className="text-xl font-bold text-maroon mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-500">
            <span className="font-medium text-maroon">Career Prospects:</span> {prospects}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
