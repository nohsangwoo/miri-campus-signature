"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, X, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// 카테고리 목록
const categories = [
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

export default function GalleryWritePage() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [category, setCategory] = useState("")
  const [images, setImages] = useState<File[]>([])
  const [previewUrls, setPreviewUrls] = useState<string[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 실제 구현에서는 API 호출 등을 통해 데이터 저장
    console.log({ title, content, category, images })
    // 저장 후 목록 페이지로 이동
    window.location.href = "/community/gallery"
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files)
      setImages((prev) => [...prev, ...fileArray])

      // 이미지 미리보기 URL 생성
      const newPreviewUrls = fileArray.map((file) => URL.createObjectURL(file))
      setPreviewUrls((prev) => [...prev, ...newPreviewUrls])
    }
  }

  const removeImage = (index: number) => {
    // 이미지 및 미리보기 URL 제거
    setImages((prev) => prev.filter((_, i) => i !== index))

    // 미리보기 URL 해제 및 제거
    URL.revokeObjectURL(previewUrls[index])
    setPreviewUrls((prev) => prev.filter((_, i) => i !== index))
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
            <Link href="/community/gallery" className="hover:text-primary">
              포토갤러리
            </Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-primary font-medium">갤러리 등록</span>
          </div>
        </div>
      </div>

      {/* 페이지 제목 */}
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold">갤러리 등록</h1>
      </div>

      {/* 갤러리 등록 폼 */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="space-y-8">
              {/* 카테고리 선택 */}
              <div className="space-y-2">
                <Label htmlFor="category">카테고리</Label>
                <Select value={category} onValueChange={setCategory} required>
                  <SelectTrigger id="category">
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
                  className="w-full min-h-[200px] p-3 border rounded-md"
                  placeholder="내용을 입력하세요"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                ></textarea>
              </div>

              {/* 이미지 업로드 */}
              <div className="space-y-4">
                <Label>이미지 업로드</Label>
                <div className="border rounded-md p-6 bg-gray-50">
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="image-upload"
                      className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-white hover:bg-gray-50"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 mb-2 text-gray-400" />
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">클릭하여 파일 선택</span> 또는 드래그 앤 드롭
                        </p>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF (최대 10MB)</p>
                      </div>
                      <input
                        id="image-upload"
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                        onChange={handleImageChange}
                      />
                    </label>
                  </div>

                  {/* 이미지 미리보기 */}
                  {previewUrls.length > 0 && (
                    <div className="mt-6">
                      <h3 className="text-lg font-medium mb-3">이미지 미리보기</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {previewUrls.map((url, index) => (
                          <div key={index} className="relative group">
                            <div className="aspect-square relative rounded-lg overflow-hidden border">
                              <Image
                                src={url || "/placeholder.svg"}
                                alt={`미리보기 ${index + 1}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <button
                              type="button"
                              onClick={() => removeImage(index)}
                              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-md"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* 버튼 */}
              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline">
                  <Link href="/community/gallery">취소</Link>
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
