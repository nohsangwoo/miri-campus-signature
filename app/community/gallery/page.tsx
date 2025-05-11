"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

// 갤러리 아이템 타입 정의
interface GalleryItem {
  id: number
  title: string
  date: string
  image: string
  category: string
}

// 샘플 갤러리 데이터
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "「서서히드는 꿈학교」홍보대학과의 인솔자 현장답 다녀와",
    date: "2025-05-02",
    image: "/gallery/university-visit.png",
    category: "현장학습",
  },
  {
    id: 2,
    title: "5월 캐릭터 워크샵",
    date: "2025-04-28",
    image: "/gallery/character-workshop.jpg",
    category: "워크샵",
  },
  {
    id: 3,
    title: "[학교교육소 창업 멘토링] 고려항 학업 과제_정보과 현장답 (서울 강동구 고덕동)",
    date: "2025-04-17",
    image: "/gallery/mentoring-session.png",
    category: "멘토링",
  },
  {
    id: 4,
    title: "4월 에너지 워크샵",
    date: "2025-04-01",
    image: "/gallery/energy-workshop.png",
    category: "워크샵",
  },
  {
    id: 5,
    title: "3월 동식 워크샵",
    date: "2025-03-04",
    image: "/gallery/nature-workshop.png",
    category: "워크샵",
  },
  {
    id: 6,
    title: "자연과학과 찾아보는 올바른 실험 교재 선택 기준",
    date: "2025-02-11",
    image: "/gallery/science-materials.png",
    category: "교육자료",
  },
  {
    id: 7,
    title: "겨울방학 특별 과학 캠프",
    date: "2025-01-15",
    image: "/gallery/winter-science-camp.png",
    category: "캠프",
  },
  {
    id: 8,
    title: "미리캠퍼스 교사 연수 프로그램",
    date: "2025-01-10",
    image: "/gallery/teacher-training.png",
    category: "교사연수",
  },
  {
    id: 9,
    title: "2024 창의력 경진대회 시상식",
    date: "2024-12-20",
    image: "/gallery/creativity-awards.png",
    category: "행사",
  },
  {
    id: 10,
    title: "중학생 대상 진로탐색 프로그램",
    date: "2024-12-05",
    image: "/gallery/career-exploration.png",
    category: "진로탐색",
  },
  {
    id: 11,
    title: "초등학생 과학 실험 교실",
    date: "2024-11-22",
    image: "/gallery/elementary-science.png",
    category: "과학실험",
  },
  {
    id: 12,
    title: "학부모 설명회 현장",
    date: "2024-11-15",
    image: "/gallery/parents-meeting.png",
    category: "설명회",
  },
]

// 카테고리 목록
const categories = [
  { value: "all", label: "전체 갤러리" },
  { value: "현장학습", label: "현장학습" },
  { value: "워크샵", label: "워크샵" },
  { value: "멘토링", label: "멘토링" },
  { value: "캠프", label: "캠프" },
  { value: "교사연수", label: "교사연수" },
  { value: "행사", label: "행사" },
  { value: "진로탐색", label: "진로탐색" },
  { value: "과학실험", label: "과학실험" },
  { value: "설명회", label: "설명회" },
  { value: "교육자료", label: "교육자료" },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  // 카테고리 필터링
  const filteredItems = galleryItems.filter((item) => {
    if (selectedCategory === "all") return true
    return item.category === selectedCategory
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
            <span className="text-primary font-medium">포토갤러리</span>
          </div>
        </div>
      </div>

      {/* 페이지 제목 */}
      <div className="py-12 text-center">
        <h1 className="text-4xl font-bold">포토갤러리</h1>
      </div>

      {/* 카테고리 필터 */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            총 <span className="font-bold text-primary">{filteredItems.length}</span>개의 갤러리가 있습니다.
          </div>
          <div className="w-48">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="카테고리 선택" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* 갤러리 그리드 */}
      <div className="container mx-auto px-4 mb-16">
        {currentItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentItems.map((item) => (
              <Link key={item.id} href={`/community/gallery/${item.id}`} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm border hover:shadow-md transition-shadow">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{item.date}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-12 text-center text-gray-500">해당 카테고리에 갤러리가 없습니다.</div>
        )}

        {/* 페이지네이션 */}
        <div className="mt-12 flex justify-center">
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

        {/* 버튼 섹션 */}
        <div className="mt-8 flex justify-end">
          <Button>
            <Link href="/community/gallery/write">갤러리 등록</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
