import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "교육프로그램 | 미리캠퍼스",
  description:
    "미리캠퍼스는 학생들의 자기주도적 학습과 창의적 사고력 향상을 위한 다양한 교육 프로그램을 제공합니다. 과학, 인문사회, 주제탐구 등 다양한 분야에서 학생들의 잠재력을 발견하고 키워드립니다.",
}

export default function EducationProgramsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
