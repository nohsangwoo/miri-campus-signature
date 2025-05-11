"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function NewsWritePage() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [isNotice, setIsNotice] = useState(false)
  const [files, setFiles] = useState<File[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 실제 구현에서는 API 호출 등을 통해 데이터 저장
    console.log({ title, content, isNotice, files })
    // 저장 후 목록 페이지로 이동
    window.location.href = "/community/news"
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files)
      setFiles((prev) => [...prev, ...fileArray])
    }
  }

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
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
            <Link href="/community/news" className="hover:text-primary">
              소식알림
            </Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-primary font-medium">글쓰기</span>
          </div>
        </div>
      </div>

      {/* 페이지 제목 */}
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold">글쓰기</h1>
      </div>

      {/* 글쓰기 폼 */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="space-y-8">
              {/* 공지사항 체크박스 */}
              <div className="flex items-center space-x-2">
                <Checkbox id="isNotice" checked={isNotice} onCheckedChange={(checked) => setIsNotice(!!checked)} />
                <Label htmlFor="isNotice">공지사항으로 등록</Label>
              </div>

              {/* 제목 입력 */}
              <div className="space-y-2">
                <Label htmlFor="title">제목</Label>
                <Input
                  id="title"
                  placeholder="제목을 입력하세요"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              {/* 내용 입력 */}
              <div className="space-y-2">
                <Label htmlFor="content">내용</Label>
                <textarea
                  id="content"
                  className="w-full min-h-[300px] p-3 border rounded-md"
                  placeholder="내용을 입력하세요"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                ></textarea>
              </div>

              {/* 파일 첨부 */}
              <div className="space-y-2">
                <Label>첨부파일</Label>
                <div className="border rounded-md p-4">
                  <Input type="file" onChange={handleFileChange} multiple className="mb-4" />
                  {files.length > 0 && (
                    <ul className="space-y-2">
                      {files.map((file, index) => (
                        <li key={index} className="flex justify-between items-center">
                          <span>{file.name}</span>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFile(index)}
                            className="text-red-500"
                          >
                            삭제
                          </Button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* 버튼 */}
              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline">
                  <Link href="/community/news">취소</Link>
                </Button>
                <Button type="submit">등록</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
