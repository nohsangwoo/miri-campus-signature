import Image from "next/image"

export default function SteamEducation() {
  return (
    <section className="py-20 bg-white relative overflow-hidden" id="steam-education">
      <div className="absolute left-0 top-0 w-full h-full opacity-5">
        <Image src="/pattern-background.png" alt="배경 패턴" fill className="object-cover" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 text-center">
          <p className="text-lg text-orange-500 font-medium mb-2">미래의 인재, 오늘의 교육이 만들어갑니다</p>
          <h2 className="text-4xl font-bold mb-2">스스로 생각하고,</h2>
          <h3 className="text-3xl font-bold mb-4">창의적 문제 해결을 위한 STEAM 교육</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steamCategories.map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-6 rounded-xl overflow-hidden w-full aspect-[4/3] relative">
                <Image src={category.image || "/placeholder.svg"} alt={category.title} fill className="object-cover" />
              </div>
              <h4 className="text-2xl font-bold mb-3 text-center">{category.title}</h4>
              <p className="text-center text-gray-600 mb-4">{category.description}</p>
              <ul className="text-sm text-gray-700 space-y-1">
                {category.features.map((feature, idx) => (
                  <li key={idx} className="text-center">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const steamCategories = [
  {
    title: "교과심화",
    description: "학교에서 배운 개념들을 실험과 활동을 통해 심화 학습",
    image: "/science-experiment-education.png",
    features: ["학년별 맞춤 커리큘럼", "교과서 연계 실험 활동", "개념의 확장과 응용"],
  },
  {
    title: "융합 실험",
    description: "여러 학문 분야를 융합한 창의적인 실험과 프로젝트",
    image: "/fusion-science-experiment.png",
    features: ["과학, 기술, 공학, 예술, 수학 융합", "실생활 문제 해결 프로젝트", "창의적 사고력 향상"],
  },
  {
    title: "토론학습과 심화 보고서",
    description: "비판적 사고와 의사소통 능력을 키우는 토론 중심 학습",
    image: "/student-debate-education.png",
    features: ["주제별 토론 활동", "논리적 사고력 향상", "보고서 작성 및 발표 능력 개발"],
  },
]
