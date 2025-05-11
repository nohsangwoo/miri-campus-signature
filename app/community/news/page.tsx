"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

// 뉴스 데이터 타입 정의
interface NewsItem {
  id: number
  title: string
  date: string
  views: number
  isNotice: boolean
  category?: string
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
  },
  {
    id: 10,
    title: "2025 3월 진로직업체험학습 안내문 출력 안내",
    date: "2025-04-17",
    views: 68,
    isNotice: true,
    category: "안내",
  },
  {
    id: 9,
    title: "미리교육 연세대 세브란스 어린이병원에 1000만원 기부",
    date: "2024-12-20",
    views: 158,
    isNotice: true,
    category: "소식",
  },
  {
    id: 8,
    title: "[서울 경제TV SEN] 초중고생 체험학습 및 이슈-미리교육 출연 (2024.11.10)",
    date: "2024-11-28",
    views: 214,
    isNotice: true,
    category: "미디어",
  },
  {
    id: 7,
    title: "2024 장학생 모집 소식",
    date: "2024-11-25",
    views: 141,
    isNotice: true,
    category: "모집",
  },
  {
    id: 6,
    title: "2년 연속 (주)미리교육 이화여대 중등 소외 청소년 참가비를 위한 후원금 기부",
    date: "2024-11-08",
    views: 135,
    isNotice: true,
    category: "소식",
  },
  {
    id: 5,
    title: "학부모설명회 참가 후기",
    date: "2024-11-08",
    views: 192,
    isNotice: true,
    category: "후기",
  },
  {
    id: 4,
    title: "2024 대한민국 브랜드 어워즈 교육서비스 고객충성도 부문 브랜드대상 2년 연속 수상",
    date: "2024-11-06",
    views: 96,
    isNotice: true,
    category: "수상",
  },
  {
    id: 3,
    title: "미리캠퍼스센터 운영팀",
    date: "2025-04-17",
    views: 43,
    isNotice: false,
    category: "채용",
  },
  {
    id: 2,
    title: "<교원> [국제소셜] 어린이 감사 미리캠퍼스봉사단 활동 안내!",
    date: "2024-11-29",
    views: 249,
    isNotice: false,
    category: "봉사",
  },
  {
    id: 1,
    title: "2023 대한민국 브랜드 어워즈 교육 서비스 브랜드",
    date: "2024-10-21",
    views: 117,
    isNotice: false,
    category: "수상",
  },
]

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchCategory, setSearchCategory] = useState("제목")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  // 검색 필터링
  const filteredItems = newsItems.filter((item) => {
    if (searchTerm === "") return true
    if (searchCategory === "제목") {
      return item.title.toLowerCase().includes(searchTerm.toLowerCase())
    } else if (searchCategory === "내용") {
      // 내용 검색은 실제로는 내용 필드가 있어야 함
      return item.title.toLowerCase().includes(searchTerm.toLowerCase())
    }
    return true
  })

  // 페이지네이션
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage)

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
            <span className="text-primary font-medium">소식알림</span>
          </div>
        </div>
      </div>

      {/* 페이지 제목 */}
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold">소식알림</h1>
      </div>

      {/* 검색 섹션 */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex justify-end gap-2">
          <Select value={searchCategory} onValueChange={setSearchCategory}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="검색 분류" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="제목">제목</SelectItem>
              <SelectItem value="내용">내용</SelectItem>
            </SelectContent>
          </Select>
          <div className="relative flex-1 max-w-sm">
            <Input
              type="text"
              placeholder="검색어 입력"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-10"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full"
              onClick={() => {
                /* 검색 실행 */
              }}
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* 게시글 목록 */}
      <div className="container mx-auto px-4 mb-12">
        <div className="border-t border-b">
          <div className="grid grid-cols-12 py-3 bg-gray-50 font-medium text-center">
            <div className="col-span-1">번호</div>
            <div className="col-span-7 md:col-span-8 text-left pl-4">제목</div>
            <div className="col-span-2 md:col-span-2">등록일</div>
            <div className="col-span-2 md:col-span-1">조회</div>
          </div>

          {currentItems.length > 0 ? (
            currentItems.map((item) => (
              <div key={item.id} className="grid grid-cols-12 py-4 border-t text-center items-center hover:bg-gray-50">
                <div className="col-span-1">
                  {item.isNotice ? (
                    <span className="inline-block px-2 py-1 bg-orange-500 text-white text-xs rounded-sm">공지</span>
                  ) : (
                    item.id
                  )}
                </div>
                <div className="col-span-7 md:col-span-8 text-left pl-4">
                  <Link href={`/community/news/${item.id}`} className="hover:text-primary hover:underline">
                    {item.title}
                  </Link>
                </div>
                <div className="col-span-2 md:col-span-2 text-gray-500 text-sm">{item.date}</div>
                <div className="col-span-2 md:col-span-1 text-gray-500">{item.views}</div>
              </div>
            ))
          ) : (
            <div className="py-12 text-center text-gray-500">검색 결과가 없습니다.</div>
          )}
        </div>

        {/* 페이지네이션 */}
        <div className="mt-8">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    if (currentPage > 1) setCurrentPage(currentPage - 1)
                  }}
                />
              </PaginationItem>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    href="#"
                    isActive={currentPage === page}
                    onClick={(e) => {
                      e.preventDefault()
                      setCurrentPage(page)
                    }}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>

      {/* 버튼 섹션 */}
      <div className="container mx-auto px-4 mb-16">
        <div className="flex justify-end">
          <Button>
            <Link href="/community/news/write">글쓰기</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
