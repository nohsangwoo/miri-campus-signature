import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"
import { Quote } from "lucide-react"

export default function ParentReviews() {
  return (
    <section className="py-16 bg-orange-400 relative overflow-hidden" id="reviews">
      <div className="absolute inset-0 opacity-10">
        <Image src="/pattern-dots.png" alt="패턴 배경" fill className="object-cover" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center mb-2">
          <Image src="/icons/parent-icon.png" alt="학부모 아이콘" width={60} height={60} className="mr-3" />
          <h2 className="text-3xl font-bold text-white">학부모 리뷰로 인증된 교육 효과</h2>
        </div>

        <div className="mt-10">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className="bg-white rounded-xl overflow-hidden h-full">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="mb-4 text-orange-500">
                          <Quote className="h-8 w-8" />
                        </div>
                        <p className="text-gray-700 mb-4 flex-grow">{review.content}</p>
                        <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
                          <div className="bg-orange-100 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                            <span className="font-bold text-orange-600">{review.initial}</span>
                          </div>
                          <div>
                            <p className="font-semibold">{review.name}</p>
                            <p className="text-sm text-gray-500">{review.grade}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white text-orange-600 border-orange-200" />
            <CarouselNext className="bg-white text-orange-600 border-orange-200" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}

const reviews = [
  {
    content:
      "미리캠퍼스의 과학 프로그램은 우리 아이에게 큰 변화를 가져왔습니다. 학교에서 배우는 과학에 흥미가 없었는데, 직접 실험하고 탐구하면서 과학의 재미를 알게 되었어요. 이제는 스스로 과학 관련 책을 찾아 읽고 질문도 많이 합니다.",
    name: "김OO 학부모님",
    initial: "김",
    grade: "중학교 2학년 학부모",
  },
  {
    content:
      "아이가 주제탐구활동을 통해 자기주도학습 능력이 크게 향상되었습니다. 처음에는 스스로 문제를 찾고 해결하는 것이 어려워했지만, 미리캠퍼스의 체계적인 지도 덕분에 이제는 자신감을 가지고 탐구활동에 임하고 있어요.",
    name: "박OO 학부모님",
    initial: "박",
    grade: "고등학교 1학년 학부모",
  },
  {
    content:
      "보드게임을 통한 경제 교육이 매우 효과적이었습니다. 딱딱한 경제 개념을 재미있게 배울 수 있어서 아이가 경제에 관심을 갖게 되었고, 용돈 관리도 스스로 하려고 노력하는 모습이 보여 만족스럽습니다.",
    name: "이OO 학부모님",
    initial: "이",
    grade: "중학교 3학년 학부모",
  },
  {
    content:
      "미리캠퍼스의 프로그램은 단순히 지식을 전달하는 것이 아니라 아이들이 스스로 생각하고 문제를 해결하는 능력을 키워주는 점이 가장 좋았습니다. 특히 실험 중심의 수업이 아이의 호기심과 탐구심을 자극했어요.",
    name: "최OO 학부모님",
    initial: "최",
    grade: "초등학교 6학년 학부모",
  },
  {
    content:
      "진로탐색에 도움이 많이 되었습니다. 다양한 분야의 전문가들과 만나고 실제 직업 체험을 통해 아이가 자신의 적성과 흥미를 발견할 수 있었어요. 덕분에 진로 방향을 구체적으로 설정할 수 있게 되었습니다.",
    name: "정OO 학부모님",
    initial: "정",
    grade: "고등학교 2학년 학부모",
  },
]
