import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function FeatureSection() {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">미리캠퍼스의 특별함</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            미리 경험하고, 미리 도전하고, 미리 성장하는 교육
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/3] relative overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=600&width=800&query=교육 현장 학생들이 토론하는 모습"
                alt="미리캠퍼스 교육 현장"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-2/3 aspect-video bg-blue-500 rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=500&query=교육 현장 실험하는 모습"
                alt="미리캠퍼스 실험 현장"
                fill
                className="object-cover mix-blend-overlay opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-2xl font-bold">미래를 여는 교육</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">미래를 미리 경험하는 교육</h3>
              <p className="text-lg">
                미리캠퍼스는 아이들에게 '미리 경험하는 미래'를 제공합니다. 탐구와 실험, 토론과 글쓰기, 그리고 다양한
                진로 체험을 통해 아이들은 단순한 수업이 아닌, 자신만의 이야기를 써내려가는 시간을 갖게 됩니다.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold">자기주도성 강화</h4>
                  <p className="text-lg text-muted-foreground">
                    스스로 생각하고, 질문하고, 행동할 수 있는 힘을 길러줍니다.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold">창의적 문제해결력</h4>
                  <p className="text-lg text-muted-foreground">
                    다양한 관점에서 문제를 바라보고 창의적인 해결책을 찾아냅니다.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold">진로 탐색 기회</h4>
                  <p className="text-lg text-muted-foreground">
                    다양한 분야의 체험을 통해 자신의 적성과 흥미를 발견합니다.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold">전문 교육 시스템</h4>
                  <p className="text-lg text-muted-foreground">
                    각 분야 전문가들이 설계한 체계적인 교육 프로그램을 제공합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-blue-50 p-8 rounded-xl text-center">
            <div className="text-4xl font-bold text-blue-500 mb-2">15+</div>
            <h3 className="text-xl font-semibold mb-2">전문 교육 프로그램</h3>
            <p>다양한 분야의 전문 교육 프로그램을 제공합니다</p>
          </div>

          <div className="bg-green-50 p-8 rounded-xl text-center">
            <div className="text-4xl font-bold text-green-500 mb-2">20+</div>
            <h3 className="text-xl font-semibold mb-2">전문 강사진</h3>
            <p>각 분야 전문가들로 구성된 우수한 강사진을 보유하고 있습니다</p>
          </div>

          <div className="bg-yellow-50 p-8 rounded-xl text-center">
            <div className="text-4xl font-bold text-yellow-500 mb-2">1,000+</div>
            <h3 className="text-xl font-semibold mb-2">교육 수료 학생</h3>
            <p>많은 학생들이 미리캠퍼스의 교육을 통해 성장했습니다</p>
          </div>

          <div className="bg-purple-50 p-8 rounded-xl text-center">
            <div className="text-4xl font-bold text-purple-500 mb-2">50+</div>
            <h3 className="text-xl font-semibold mb-2">협력 학교</h3>
            <p>다양한 학교와 협력하여 교육 프로그램을 운영하고 있습니다</p>
          </div>
        </div>
      </div>
    </section>
  )
}
