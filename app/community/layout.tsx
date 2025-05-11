import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "커뮤니티 | 미리캠퍼스",
  description: "미리캠퍼스의 소식과 공지사항, 자주하는 질문, 포토갤러리 등 다양한 커뮤니티 정보를 확인하세요.",
}

export default function CommunityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
