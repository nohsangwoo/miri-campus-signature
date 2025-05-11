import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// 뉴스 데이터 타입 정의
interface NewsItem {
  id: number
  title: string
  date: string
  views: number
  isNotice: boolean
  category?: string
  content?: string
  author?: string
}

// 샘플 뉴스 데이터
const newsItems: NewsItem[] = [
  {
    id: 11,
    title: "2025 1학기 방학반 참가 소식",
    date: "2025-05-08",
    views: 17,
    isNotice: true,
    category: "프로그램",
    author: "관리자",
    content: `
      <p>안녕하세요, 미리캠퍼스입니다.</p>
      <p>2025년 1학기 방학반 참가 신청이 시작되었습니다.</p>
      <p>이번 방학 프로그램은 다음과 같이 진행됩니다:</p>
      <ul>
        <li>기간: 2025년 7월 15일 ~ 8월 14일</li>
        <li>대상: 초등학교 4학년 ~ 중학교 3학년</li>
        <li>내용: 과학 탐구 활동, 진로 체험, 창의력 개발 프로그램</li>
        <li>장소: 미리캠퍼스 본원 및 각 지역 센터</li>
      </ul>
      <p>많은 관심과 참여 부탁드립니다.</p>
      <p>감사합니다.</p>
    `,
  },
  {
    id: 10,
    title: "2025 3월 진로직업체험학습 안내문 출력 안내",
    date: "2025-04-17",
    views: 68,
    isNotice: true,
    category: "안내",
    author: "관리자",
    content: `
      <p>안녕하세요, 미리캠퍼스입니다.</p>
      <p>2025년 3월 진로직업체험학습 안내문을 출력하실 수 있습니다.</p>
      <p>안내문에는 다음 내용이 포함되어 있습니다:</p>
      <ul>
        <li>체험학습 일정 및 장소</li>
        <li>준비물 및 유의사항</li>
        <li>학부모 동의서</li>
        <li>프로그램 세부 내용</li>
      </ul>
      <p>안내문은 마이페이지 > 신청내역에서 출력하실 수 있습니다.</p>
      <p>감사합니다.</p>
    `,
  },
  // 다른 뉴스 아이템들...
]

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  const newsId = Number.parseInt(params.id)
  const newsItem = newsItems.find((item) => item.id === newsId)

  if (!newsItem) {
    return (
      <main className="min-h-screen">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold mb-6">존재하지 않는 게시글입니다</h1>
          <Button>
            <Link href="/community/news">목록으로 돌아가기</Link>
          </Button>
        </div>
      </main>
    )
  }

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
            <Link href="/community/news" className="hover:text-primary">
              소식알림
            </Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-primary font-medium">상세보기</span>
          </div>
        </div>
      </div>

      {/* 게시글 상세 */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* 게시글 헤더 */}
          <div className="border-b pb-6 mb-8">
            <h1 className="text-3xl font-bold mb-4">{newsItem.title}</h1>
            <div className="flex flex-wrap justify-between text-gray-500">
              <div className="space-x-4">
                <span>작성자: {newsItem.author || "관리자"}</span>
                <span>등록일: {newsItem.date}</span>
              </div>
              <div>
                <span>조회수: {newsItem.views}</span>
              </div>
            </div>
          </div>

          {/* 게시글 내용 */}
          <div className="prose max-w-none mb-12" dangerouslySetInnerHTML={{ __html: newsItem.content || "" }}></div>

          {/* 첨부파일 */}
          <div className="border-t border-b py-4 mb-8">
            <h3 className="font-medium mb-2">첨부파일</h3>
            <div className="text-gray-500">첨부파일이 없습니다.</div>
          </div>

          {/* 버튼 */}
          <div className="flex justify-between">
            <div>
              <Button variant="outline">
                <Link href="/community/news">목록</Link>
              </Button>
            </div>
            <div className="space-x-2">
              <Button variant="outline">
                <Link href={`/community/news/edit/${newsItem.id}`}>수정</Link>
              </Button>
              <Button variant="destructive">삭제</Button>
            </div>
          </div>

          {/* 이전글/다음글 */}
          <div className="mt-12 border-t border-b">
            <div className="py-3 border-b flex">
              <span className="font-medium w-24">다음글</span>
              <Link href="#" className="hover:text-primary hover:underline">
                다음 게시글이 없습니다.
              </Link>
            </div>
            <div className="py-3 flex">
              <span className="font-medium w-24">이전글</span>
              <Link href="#" className="hover:text-primary hover:underline">
                이전 게시글이 없습니다.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
