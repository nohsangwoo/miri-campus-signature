import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// FAQ 데이터 타입 정의
interface FaqItem {
  id: number
  question: string
  answer: string
  date: string
  views: number
  category: string
}

// 샘플 FAQ 데이터
const faqItems: FaqItem[] = [
  {
    id: 12,
    question: "미리교육체험장 신청하는 어떻게 부탁드리나요?",
    answer:
      "미리교육체험장 신청은 홈페이지 상단의 '교육문의' 메뉴를 통해 가능합니다. 원하시는 날짜와 시간, 인원수를 기재하시면 담당자가 확인 후 연락드립니다. 또한 전화(02-741-3001)로도 신청 가능합니다. 단체 신청의 경우 최소 2주 전에 예약하시는 것이 좋습니다.",
    date: "2024-11-05",
    views: 169,
    category: "신청/접수",
  },
  {
    id: 11,
    question: "실험교구나 학습준 책 필요한 건인가요?",
    answer:
      "미리캠퍼스의 프로그램은 모든 실험교구와 학습 자료가 포함되어 있어 별도로 준비하실 필요가 없습니다. 다만, 필기구와 개인 물품(물병, 간식 등)은 지참하시는 것이 좋습니다. 특별한 프로그램의 경우 사전에 준비물 안내를 드리고 있으니 참고해 주세요.",
    date: "2024-11-04",
    views: 121,
    category: "프로그램",
  },
  // 다른 FAQ 아이템들...
]

export default function FaqDetailPage({ params }: { params: { id: string } }) {
  const faqId = Number.parseInt(params.id)
  const faqItem = faqItems.find((item) => item.id === faqId)

  if (!faqItem) {
    return (
      <main className="min-h-screen">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold mb-6">존재하지 않는 질문입니다</h1>
          <Button>
            <Link href="/community/faq">목록으로 돌아가기</Link>
          </Button>
        </div>
      </main>
    )
  }

  // 이전 및 다음 FAQ 찾기
  const currentIndex = faqItems.findIndex((item) => item.id === faqId)
  const prevFaq = currentIndex < faqItems.length - 1 ? faqItems[currentIndex + 1] : null
  const nextFaq = currentIndex > 0 ? faqItems[currentIndex - 1] : null

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
            <Link href="/community" className="hover:text-primary">
              커뮤니티
            </Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <Link href="/community/faq" className="hover:text-primary">
              자주하는 질문
            </Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-primary font-medium">상세보기</span>
          </div>
        </div>
      </div>

      {/* FAQ 상세 */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm border p-8">
          {/* FAQ 헤더 */}
          <div className="border-b pb-6 mb-8">
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm mb-4">
              {faqItem.category}
            </div>
            <h1 className="text-3xl font-bold mb-4">{faqItem.question}</h1>
            <div className="flex flex-wrap justify-between text-gray-500">
              <div className="space-x-4">
                <span>등록일: {faqItem.date}</span>
              </div>
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-50">
                  조회수: {faqItem.views}
                </span>
              </div>
            </div>
          </div>

          {/* FAQ 내용 */}
          <div className="prose max-w-none mb-12 leading-relaxed text-lg bg-blue-50/30 p-6 rounded-lg">
            <p className="whitespace-pre-line">{faqItem.answer}</p>
          </div>

          {/* 버튼 */}
          <div className="flex justify-center mb-8">
            <Button className="px-8">
              <Link href="/community/faq">목록</Link>
            </Button>
          </div>

          {/* 이전글/다음글 */}
          <div className="mt-8 border-t border-b">
            <div className="py-4 border-b flex hover:bg-gray-50">
              <span className="font-medium w-24 text-gray-600">다음글</span>
              {nextFaq ? (
                <Link href={`/community/faq/${nextFaq.id}`} className="hover:text-primary hover:underline flex-1">
                  {nextFaq.question}
                </Link>
              ) : (
                <span className="text-gray-500">다음 질문이 없습니다.</span>
              )}
            </div>
            <div className="py-4 flex hover:bg-gray-50">
              <span className="font-medium w-24 text-gray-600">이전글</span>
              {prevFaq ? (
                <Link href={`/community/faq/${prevFaq.id}`} className="hover:text-primary hover:underline flex-1">
                  {prevFaq.question}
                </Link>
              ) : (
                <span className="text-gray-500">이전 질문이 없습니다.</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
