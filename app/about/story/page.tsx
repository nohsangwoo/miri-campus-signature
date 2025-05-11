import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function StoryPage() {
  return (
    <main className="min-h-screen">
      {/* 페이지 헤더 */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              홈
            </Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <Link href="/about" className="hover:text-primary">
              회사소개
            </Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-primary font-medium">미리캠퍼스 스토리</span>
          </div>
        </div>
      </div>

      {/* 페이지 제목 */}
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold">미리캠퍼스 스토리</h1>
      </div>

      {/* 미리캠퍼스 스토리 섹션 */}
      <section className="py-16 bg-orange-50/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-orange-500">
                과학을 통해 가능성을 발견하고,
                <br />더 넓은 세상으로 나아가는 미리캠퍼스
              </h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  미리캠퍼스는 지역의 교육격차에 관심을 가지고 지역의 아이들이 자신의 잠재력을 미리 발견하고, 미래를
                  스스로 설계할 수 있도록 돕기 위해 시작되었습니다.
                </p>
                <p>
                  우리는 모든 아이가 '자기주도'라는 힘을 통해 삶을 주도할 수 있어야 한다고 믿습니다. 단지 공부만 잘하는
                  것이 아니라, 스스로 선택하고 도전하며 성장하는 경험이 필요하다고 생각했습니다.
                </p>
                <p>
                  과거의 교육은 '가르침'에 집중되어 있었다면, 미리캠퍼스는 '스스로 깨닫는 배움'에 중심을 둡니다.
                  아이들이 직접 문제를 찾고, 탐구하고, 해결책을 설계하는 과정을 통해 지식 이상의 '생각하는 힘'을 기를 수
                  있도록 돕는 것이 우리의 교육입니다.
                </p>
                <p>
                  우리는 아이들에게 '미리 경험하는 미래'를 제공합니다. 탐구와 실험, 토론과 글쓰기, 그리고 다양한 진로
                  체험을 통해 아이들은 단순한 수업이 아닌, 자신만의 이야기를 써내려가는 시간을 갖게 됩니다.
                </p>
                <p>
                  앞으로도 미리캠퍼스는 교육의 형식을 바꾸고, 배움의 본질을 되살리는 일에 앞장설 것입니다. 아이들이 미리
                  경험한 작은 도전이, 내일의 선택을 바꾸고, 인생을 바꾸는 커다란 가능성이 되도록. 미리캠퍼스는 오늘도
                  아이들과 함께, 미래를 엽니다.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/children-science-experiment.png"
                  alt="미리캠퍼스 교육 현장"
                  width={800}
                  height={600}
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32">
                <Image
                  src="/placeholder.svg?key=12uek"
                  alt="아이디어 전구"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 대표 인사 섹션 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="aspect-square rounded-full overflow-hidden max-w-md mx-auto">
                <Image
                  src="/placeholder.svg?key=k4mly"
                  alt="미리캠퍼스 대표 김수범"
                  width={500}
                  height={500}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-3xl font-bold text-primary">
                창의 탐구 교육 전문기업
                <br />
                미리교육에 오신 것을 환영합니다
              </h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  미리캠퍼스는 자기주도성과 창의력을 기반으로 한 미래형 교육을 실현하는 전문 교육 기관입니다. 우리는
                  아이들이 스스로 생각하고, 질문하고, 행동할 수 있는 힘을 길러주는 데 교육의 중심을 두고 있습니다.
                </p>
                <p>
                  빠르게 변화하는 사회 속에서, 지식 전달 중심의 교육은 더 이상 충분하지 않습니다. 미리캠퍼스는 아이들이
                  자신의 생각을 말할 수 있는 용기, 문제를 해결하려는 시도, 그리고 그 안에서 배우는 실패와 성장을 통해
                  진짜 '배움'을 경험할 수 있도록 돕고자 합니다.
                </p>
                <p>
                  우리의 핵심 가치는 '미리 경험하고, 미리 도전하고, 미리 성장하는 것'입니다. 프로젝트 기반 탐구, 융합형
                  실험, 진로 체험, 메타인지 훈련 등을 통해 아이들은 단지 학생이 아닌 스스로를 설계하는 주체로 성장하게
                  됩니다.
                </p>
                <p>
                  우리는 아이들이 미래를 기다리는 존재가 아니라 스스로 미래를 만들어가는 리더로 자라나길 바랍니다.
                  미리캠퍼스는 그 여정의 시작이자, 든든한 동반자가 될 것입니다.
                </p>
                <p>
                  아이들의 오늘이 모여, 더 나은 내일을 만듭니다. 앞으로도 미리캠퍼스는 교육의 변화를 주도하며,
                  대한민국을 넘어 세계를 이끄는 미래 인재 육성에 최선을 다하겠습니다.
                </p>
                <div className="pt-4">
                  <p className="font-bold text-right">미리캠퍼스 대표</p>
                  <p className="text-right text-xl font-bold">김 수 범</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 교육 철학 섹션 */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">미리캠퍼스 교육 철학</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Image src="/placeholder.svg?key=fr4yl" alt="탐구" width={40} height={40} />
              </div>
              <h3 className="text-xl font-bold mb-4">자기주도적 탐구</h3>
              <p className="text-gray-600">
                스스로 질문하고 답을 찾아가는 과정에서 진정한 배움이 일어납니다. 우리는 아이들이 주도적으로 탐구할 수
                있는 환경을 제공합니다.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Image src="/creativity-icon.png" alt="창의성" width={40} height={40} />
              </div>
              <h3 className="text-xl font-bold mb-4">창의적 문제해결</h3>
              <p className="text-gray-600">
                정해진 답이 아닌, 다양한 관점에서 문제를 바라보고 창의적인 해결책을 찾아내는 능력을 키웁니다.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Image src="/growth-icon.png" alt="성장" width={40} height={40} />
              </div>
              <h3 className="text-xl font-bold mb-4">미래 역량 개발</h3>
              <p className="text-gray-600">
                빠르게 변화하는 세상에서 필요한 핵심 역량을 개발하여 미래 사회의 리더로 성장할 수 있도록 돕습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">미리캠퍼스와 함께 미래를 준비하세요</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            아이들의 잠재력을 발견하고 미래를 준비하는 첫걸음, 미리캠퍼스가 함께하겠습니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg">
              프로그램 알아보기
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg">
              교육 문의하기
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
