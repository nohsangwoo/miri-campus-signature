import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">미리캠퍼스 스토리</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            지역의 교육격차에 관심을 가지고 아이들이 자신의 잠재력을 미리 발견하고, 미래를 스스로 설계할 수 있도록
            돕습니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-video overflow-hidden rounded-xl">
            <Image src="/placeholder.svg?key=hqk7z" alt="미리캠퍼스 교육 현장" fill className="object-cover" />
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">자기주도 미래교육의 시작</h3>
              <p className="text-lg leading-relaxed">
                미리캠퍼스는 지역의 교육격차에 관심을 가지고 지역의 아이들이 자신의 잠재력을 미리 발견하고, 미래를
                스스로 설계할 수 있도록 돕기 위해 시작되었습니다.
              </p>
              <p className="text-lg leading-relaxed">
                우리는 모든 아이가 '자기주도'라는 힘을 통해 삶을 주도할 수 있어야 한다고 믿습니다. 단지 공부만 잘하는
                것이 아니라, 스스로 선택하고 도전하며 성장하는 경험이 필요하다고 생각했습니다.
              </p>
              <p className="text-lg leading-relaxed">
                과거의 교육은 '가르침'에 집중되어 있었다면, 미리캠퍼스는 '스스로 깨닫는 배움'에 중심을 둡니다.
              </p>
            </div>

            <Button size="lg" className="text-lg">
              더 알아보기
            </Button>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-8 rounded-xl text-center">
            <div className="bg-blue-100 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center">
              <Image src="/placeholder.svg?key=5xp1t" alt="탐구" width={40} height={40} />
            </div>
            <h3 className="text-2xl font-bold mb-4">탐구와 실험</h3>
            <p className="text-lg">
              아이들이 직접 문제를 찾고, 탐구하고, 해결책을 설계하는 과정을 통해 지식 이상의 '생각하는 힘'을 기릅니다.
            </p>
          </div>

          <div className="bg-yellow-50 p-8 rounded-xl text-center">
            <div className="bg-yellow-100 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center">
              <Image src="/placeholder.svg?height=40&width=40&query=토론 아이콘" alt="토론" width={40} height={40} />
            </div>
            <h3 className="text-2xl font-bold mb-4">토론과 글쓰기</h3>
            <p className="text-lg">
              자신의 생각을 표현하고 다른 사람의 의견을 경청하며 비판적 사고력과 의사소통 능력을 키웁니다.
            </p>
          </div>

          <div className="bg-green-50 p-8 rounded-xl text-center">
            <div className="bg-green-100 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center">
              <Image src="/placeholder.svg?height=40&width=40&query=진로 아이콘" alt="진로" width={40} height={40} />
            </div>
            <h3 className="text-2xl font-bold mb-4">진로 체험</h3>
            <p className="text-lg">
              다양한 진로 체험을 통해 아이들은 단순한 수업이 아닌, 자신만의 이야기를 써내려가는 시간을 갖게 됩니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
