import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Achievements() {
  return (
    <section className="py-20 bg-amber-50" id="achievements">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">미리캠퍼스에서 전하는 소식을 만나보세요</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            학생들의 성취와 미리캠퍼스의 다양한 활동 소식을 확인하세요
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[4/3] relative">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{item.date}</span>
                  <Button variant="outline" size="sm">
                    자세히 보기
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button size="lg" className="text-lg">
            더 많은 소식 보기
          </Button>
        </div>
      </div>
    </section>
  )
}

const achievements = [
  {
    title: "2023 미리 과학 경진 대회",
    description: "미리캠퍼스 학생들이 참가한 과학 경진 대회에서 우수한 성적을 거두었습니다.",
    image: "/science-fair-trophy.png",
    date: "2023.10.15",
  },
  {
    title: "미리캠퍼스의 로드맵",
    description: "학생들의 성장을 위한 미리캠퍼스의 교육 로드맵을 소개합니다.",
    image: "/placeholder.svg?key=n7d7c",
    date: "2023.09.20",
  },
  {
    title: "2023 창의융합 경진대회 우수상",
    description: "미리캠퍼스 학생들이 참가한 창의융합 경진대회에서 우수상을 수상했습니다.",
    image: "/placeholder.svg?height=400&width=600&query=학생들 수상 장면",
    date: "2023.08.25",
  },
]
