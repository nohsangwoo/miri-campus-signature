import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "회사소개 | 미리캠퍼스",
  description: "미리캠퍼스는 자기주도성과 창의력을 기반으로 한 미래형 교육을 실현하는 전문 교육 기관입니다.",
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
