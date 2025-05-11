import Link from "next/link"
import { ChevronDown } from "lucide-react"

export function MainNav() {
  return (
    <nav className="hidden md:flex items-center gap-6">
      <div className="relative group">
        <button className="flex items-center gap-1 text-lg font-medium hover:text-primary">
          회사소개
          <ChevronDown className="h-4 w-4" />
        </button>
        <div className="absolute left-0 top-full hidden w-48 flex-col gap-1 rounded-md border bg-white p-2 shadow-lg group-hover:flex">
          <Link href="/about/story" className="rounded px-3 py-2 text-sm hover:bg-muted">
            미리캠퍼스 스토리
          </Link>
          <Link href="/about/history" className="rounded px-3 py-2 text-sm hover:bg-muted">
            회사연혁
          </Link>
          <Link href="/about/organization" className="rounded px-3 py-2 text-sm hover:bg-muted">
            조직도
          </Link>
          <Link href="/about/news" className="rounded px-3 py-2 text-sm hover:bg-muted">
            보도자료
          </Link>
          <Link href="/about/location" className="rounded px-3 py-2 text-sm hover:bg-muted">
            오시는 길
          </Link>
        </div>
      </div>
      <div className="relative group">
        <button className="flex items-center gap-1 text-lg font-medium hover:text-primary">
          프로그램소개
          <ChevronDown className="h-4 w-4" />
        </button>
        <div className="absolute left-0 top-full hidden w-48 flex-col gap-1 rounded-md border bg-white p-2 shadow-lg group-hover:flex">
          <Link href="/programs/education" className="rounded px-3 py-2 text-sm hover:bg-muted">
            교육프로그램
          </Link>
          <Link href="/programs/camp" className="rounded px-3 py-2 text-sm hover:bg-muted">
            캠프프로그램
          </Link>
        </div>
      </div>
      <div className="relative group">
        <button className="flex items-center gap-1 text-lg font-medium hover:text-primary">
          현장체험 프로그램
          <ChevronDown className="h-4 w-4" />
        </button>
        <div className="absolute left-0 top-full hidden w-48 flex-col gap-1 rounded-md border bg-white p-2 shadow-lg group-hover:flex">
          <Link href="/field-experience/centers" className="rounded px-3 py-2 text-sm hover:bg-muted">
            현장체험센터안내
          </Link>
          <Link href="/field-experience/programs" className="rounded px-3 py-2 text-sm hover:bg-muted">
            프로그램안내
          </Link>
        </div>
      </div>
      <Link href="/research" className="text-lg font-medium hover:text-primary">
        교육개발연구소
      </Link>
      <div className="relative group">
        <button className="flex items-center gap-1 text-lg font-medium hover:text-primary">
          커뮤니티
          <ChevronDown className="h-4 w-4" />
        </button>
        <div className="absolute left-0 top-full hidden w-48 flex-col gap-1 rounded-md border bg-white p-2 shadow-lg group-hover:flex">
          <Link href="/community/news" className="rounded px-3 py-2 text-sm hover:bg-muted">
            소식알림
          </Link>
          <Link href="/community/faq" className="rounded px-3 py-2 text-sm hover:bg-muted">
            자주하는질문
          </Link>
          <Link href="/community/gallery" className="rounded px-3 py-2 text-sm hover:bg-muted">
            포토갤러리
          </Link>
        </div>
      </div>
      <Link href="/inquiry" className="text-lg font-medium hover:text-primary">
        교육문의
      </Link>
      <Link href="/instructor" className="text-lg font-medium hover:text-primary">
        강사전용
      </Link>
      <Link href="/school" className="text-lg font-medium hover:text-primary">
        학교전용
      </Link>
    </nav>
  )
}
