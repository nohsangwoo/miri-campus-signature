import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function EducationHighlights() {
  return (
    <section className="py-16 bg-orange-400" id="highlights">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold mb-2 text-white">정의사고력 학습 NO.1</h2>
          <h3 className="text-3xl font-bold text-white">미리캠퍼스 창의 탐구 교육</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-orange-50 rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 w-20 h-20 relative">
                <Image
                  src={highlight.icon || "/placeholder.svg"}
                  alt={highlight.title}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h4 className="text-xl font-bold mb-2 text-orange-800">{highlight.title}</h4>
              <p className="text-orange-700">{highlight.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-100 text-lg">
            교육 프로그램 자세히 보기
          </Button>
        </div>
      </div>
    </section>
  )
}

const highlights = [
  {
    title: "과학적 사고력과 창의력 향상",
    description: "실험과 탐구를 통한 과학적 사고력 향상",
    icon: "/icons/science-icon.png",
  },
  {
    title: "자기 주도 학습력 및 탐구 능력",
    description: "스스로 문제를 발견하고 해결하는 능력 배양",
    icon: "/icons/self-study-icon.png",
  },
  {
    title: "학습에서 발견한 즐거움 체험과 성취감",
    description: "재미있는 실험과 활동을 통한 학습 동기 부여",
    icon: "/icons/discovery-icon.png",
  },
  {
    title: "실생활 연계된 융합 과학 탐구활동",
    description: "일상생활 속 과학 원리 이해와 적용",
    icon: "/icons/integration-icon.png",
  },
]
