import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "교육개발연구소 | 미리캠퍼스",
  description:
    "미리캠퍼스 교육개발연구소는 학교 현장에 꼭 필요한 프로그램을 연구·개발하며, 학생과 교사 모두에게 실질적인 도움이 되는 교육을 만들어갑니다.",
}

export default function ResearchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
