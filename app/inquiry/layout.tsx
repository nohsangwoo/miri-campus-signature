import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "교육문의 | 미리캠퍼스",
  description:
    "미리캠퍼스의 교육 프로그램에 대해 궁금하신 점이 있으시면 언제든지 문의해주세요. 빠르고 정확한 답변으로 도와드리겠습니다.",
}

export default function InquiryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
