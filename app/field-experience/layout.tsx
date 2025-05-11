import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "현장체험 프로그램 | 미리캠퍼스",
  description: "미리캠퍼스의 다양한 현장체험 프로그램과 센터를 소개합니다.",
}

export default function FieldExperienceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
