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
  {
    id: 10,
    question: "미리교육체험장의 수업 수준이 제 학년인가요?",
    answer:
      "미리캠퍼스의 교육 프로그램은 학년별로 세분화되어 있으며, 각 학년에 맞는 수준으로 진행됩니다. 초등 저학년, 초등 고학년, 중학생, 고등학생 등 연령대별로 적합한 내용과 난이도로 구성되어 있어 학생들의 이해도와 참여도를 높이고 있습니다. 프로그램 신청 시 학년을 정확히 기재해 주시면 적합한 수업을 제공해 드립니다.",
    date: "2024-11-04",
    views: 124,
    category: "프로그램",
  },
  {
    id: 9,
    question: "수업 진행은 어떻게 되나요?",
    answer:
      "수업은 보통 이론 설명(20분) → 실험/체험 활동(60분) → 정리 및 질의응답(20분)으로 진행됩니다. 학생들의 적극적인 참여를 유도하며, 팀별 활동과 개인 활동을 병행합니다. 모든 수업은 전문 강사가 진행하며, 보조 강사가 함께하여 학생들의 활동을 지원합니다.",
    date: "2024-11-04",
    views: 133,
    category: "프로그램",
  },
  {
    id: 8,
    question: "수업 일정은 어떻게 되나요?",
    answer:
      "정규 프로그램은 평일 오전 10시~12시, 오후 2시~4시에 진행됩니다. 주말 프로그램은 토요일 오전 10시~12시에 운영됩니다. 방학 특별 프로그램은 별도 일정으로 운영되며, 홈페이지 공지사항을 통해 안내해 드립니다. 단체 신청의 경우 협의를 통해 일정 조정이 가능합니다.",
    date: "2024-11-04",
    views: 115,
    category: "일정",
  },
  {
    id: 7,
    question: "팀 구성시 학년이 달라도 되나요?",
    answer:
      "기본적으로는 같은 학년으로 팀을 구성하는 것이 교육 효과가 높습니다. 그러나 형제, 자매가 함께 참여하는 경우나 친구들과 함께 오는 경우 등 불가피한 상황에서는 학년이 다르더라도 팀 구성이 가능합니다. 이 경우 사전에 알려주시면 수업 난이도를 적절히 조정하여 진행합니다.",
    date: "2024-11-04",
    views: 118,
    category: "신청/접수",
  },
  {
    id: 6,
    question: "팀 구성은 선생님께서 해주시나요?",
    answer:
      "기본적으로 팀 구성은 당일 참가하는 학생들을 고려하여 저희 강사가 진행합니다. 그러나 친구들과 함께 오셔서 같은 팀을 희망하시는 경우, 신청 시 요청사항에 기재해 주시면 최대한 반영해 드립니다. 단체 신청의 경우 인솔 교사의 의견을 반영하여 팀을 구성할 수 있습니다.",
    date: "2024-11-04",
    views: 100,
    category: "프로그램",
  },
  {
    id: 5,
    question: "수업은 1인 수업인가요? 팀 수업인가요?",
    answer:
      "미리캠퍼스의 대부분 프로그램은 팀 활동으로 진행됩니다. 보통 3~4명이 한 팀을 이루어 협력하며 활동합니다. 이는 의사소통 능력과 협동심을 기르는 데 도움이 됩니다. 일부 프로그램은 개인 활동으로 진행되며, 프로그램 소개에 활동 방식이 안내되어 있으니 참고해 주세요.",
    date: "2024-11-04",
    views: 120,
    category: "프로그램",
  },
  {
    id: 4,
    question: "단체 견학은 어떻게 신청 되나요?",
    answer:
      "단체 견학은 홈페이지 '교육문의' 메뉴에서 단체 신청 양식을 작성하시거나, 전화(02-741-3001)로 문의하실 수 있습니다. 학교명, 학년, 인원수, 희망 날짜, 프로그램 등을 기재해 주시면 담당자가 확인 후 연락드립니다. 단체 견학은 최소 20명 이상부터 가능하며, 최소 3주 전에 예약하시는 것이 좋습니다.",
    date: "2024-11-04",
    views: 116,
    category: "신청/접수",
  },
  {
    id: 3,
    question: "수업은 어디서 진행되나요?",
    answer:
      "수업은 미리캠퍼스 본원(서울특별시 강남구 테헤란로 123)과 각 지역 센터(부산, 대전, 광주, 대구)에서 진행됩니다. 신청하신 지역의 센터에서 수업이 이루어지며, 센터별 위치 정보는 홈페이지 '현장체험센터안내' 메뉴에서 확인하실 수 있습니다. 또한 학교로 찾아가는 프로그램도 운영하고 있으니 필요하신 경우 문의해 주세요.",
    date: "2024-11-04",
    views: 108,
    category: "장소",
  },
  {
    id: 2,
    question: "미리교육체험장이란?",
    answer:
      "미리교육체험장은 학생들이 직접 실험하고 체험하며 배울 수 있는 교육 공간입니다. 과학, 기술, 공학, 예술, 수학 등 다양한 분야의 체험형 교육 프로그램을 제공하여 학생들의 창의력과 문제해결능력을 키울 수 있도록 돕고 있습니다. 전문 강사진의 지도 아래 안전하고 즐겁게 학습할 수 있는 환경을 제공합니다.",
    date: "2024-11-04",
    views: 118,
    category: "소개",
  },
  {
    id: 1,
    question: "상담을 받고 싶은데 어떻게 하면 되나요?",
    answer:
      "교육 상담은 전화(02-741-3001) 또는 홈페이지 '교육문의' 메뉴를 통해 신청하실 수 있습니다. 상담 가능 시간은 평일 오전 9:30부터 오후 6:00까지이며, 점심시간(12:00~13:00)은 제외됩니다. 상담 신청 시 학생의 학년, 관심 분야, 문의 사항 등을 기재해 주시면 더 정확한 안내를 받으실 수 있습니다.",
    date: "2024-10-21",
    views: 168,
    category: "상담",
  },
]

// 카테고리 목록
const categories = [
  { value: "all", label: "전체" },
  { value: "신청/접수", label: "신청/접수" },
  { value: "프로그램", label: "프로그램" },
  { value: "일정", label: "일정" },
  { value: "장소", label: "장소" },
  { value: "소개", label: "소개" },
  { value: "상담", label: "상담" },
]

export default function FaqPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchCategory, setSearchCategory] = useState("제목")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [expandedItem, setExpandedItem] = useState<number | null>(null)
  const itemsPerPage = 10

  // 카테고리 및 검색 필터링
  const filteredItems = faqItems.filter((item) => {
    // 카테고리 필터링
    if (selectedCategory !== "all" && item.category !== selectedCategory) {
      return false
    }

    // 검색어 필터링
    if (searchTerm === "") return true
    if (searchCategory === "제목") {
      return item.question.toLowerCase().includes(searchTerm.toLowerCase())
    } else if (searchCategory === "내용") {
      return item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    }
    return true
  })

  // 페이지네이션
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage)

  // 아이템 토글 핸들러
  const toggleItem = (id: number) => {
    if (expandedItem === id) {
      setExpandedItem(null)
    } else {
      setExpandedItem(id)
    }
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
            <span className="text-primary font-medium">자주하는 질문</span>
          </div>
        </div>
      </div>

      {/* 페이지 제목 */}
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">자주하는 질문</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            미리캠퍼스에 대해 자주 묻는 질문들을 모았습니다. 원하는 정보를 찾아보세요.
          </p>
        </div>
      </div>

      {/* 카테고리 및 검색 섹션 */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white p-8 rounded-lg shadow-sm border mb-8">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`rounded-full ${
                    selectedCategory === category.value ? "bg-blue-600 hover:bg-blue-700" : ""
                  }`}
                >
                  {category.label}
                </Button>
              ))}
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <Select value={searchCategory} onValueChange={setSearchCategory}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="검색 분류" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="제목">제목</SelectItem>
                  <SelectItem value="내용">내용</SelectItem>
                </SelectContent>
              </Select>
              <div className="relative flex-1 min-w-[200px]">
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
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="text-sm text-gray-500">
            총 <span className="font-bold text-primary">{filteredItems.length}</span>개의 자주하는 질문이 있습니다.
          </div>
        </div>
      </div>

      {/* FAQ 목록 - 완전히 새로운 레이아웃 */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-white rounded-lg shadow-sm border">
          {currentItems.length > 0 ? (
            <div className="divide-y">
              {currentItems.map((item) => (
                <div key={item.id} className="hover:bg-gray-50">
                  <button onClick={() => toggleItem(item.id)} className="w-full text-left px-6 py-5 focus:outline-none">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-600 font-medium">
                          {item.id}
                        </span>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center mb-1">
                          <span className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full mr-2">
                            {item.category}
                          </span>
                          <span className="text-sm text-gray-500">
                            {item.date} · 조회 {item.views}
                          </span>
                        </div>
                        <h3 className="text-xl font-medium text-gray-900">{item.question}</h3>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        <svg
                          className={`w-6 h-6 text-gray-400 transform transition-transform ${
                            expandedItem === item.id ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                  {expandedItem === item.id && (
                    <div className="px-6 py-6 bg-blue-50/30 border-t">
                      <div className="ml-12 text-gray-700 leading-relaxed text-lg">
                        <p className="whitespace-pre-line">{item.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
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
    </main>
  )
}
