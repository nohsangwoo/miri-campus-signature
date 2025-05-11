"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// 문의 유형 목록
const inquiryTypes = [
  { value: "program", label: "프로그램 문의" },
  { value: "visit", label: "현장체험 문의" },
  { value: "partnership", label: "협력/제휴 문의" },
  { value: "career", label: "채용 문의" },
  { value: "other", label: "기타 문의" },
]

// 자주 묻는 질문 목록
const faqs = [
  {
    question: "미리교육체험장 신청하는 어떻게 부탁드리나요?",
    answer:
      "미리교육체험장 신청은 홈페이지 상단의 '교육문의' 메뉴를 통해 가능합니다. 원하시는 날짜와 시간, 인원수를 기재하시면 담당자가 확인 후 연락드립니다.",
  },
  {
    question: "실험교구나 학습준 책 필요한 건인가요?",
    answer:
      "미리캠퍼스의 프로그램은 모든 실험교구와 학습 자료가 포함되어 있어 별도로 준비하실 필요가 없습니다. 다만, 필기구와 개인 물품은 지참하시는 것이 좋습니다.",
  },
  {
    question: "단체 견학은 어떻게 신청 되나요?",
    answer:
      "단체 견학은 홈페이지 '교육문의' 메뉴에서 단체 신청 양식을 작성하시거나, 전화(02-741-3001)로 문의하실 수 있습니다. 학교명, 학년, 인원수, 희망 날짜, 프로그램 등을 기재해 주시면 담당자가 확인 후 연락드립니다.",
  },
]

export default function InquiryPage() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [inquiryType, setInquiryType] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [inquiryMethod, setInquiryMethod] = useState("phone")
  const [privacyAgreed, setPrivacyAgreed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // 실제 구현에서는 API 호출 등을 통해 데이터 전송
    try {
      // 서버에 데이터 전송하는 코드 (여기서는 시뮬레이션)
      await new Promise((resolve) => setTimeout(resolve, 1000))

      console.log({
        name,
        phone,
        email,
        inquiryType,
        subject,
        message,
        inquiryMethod,
        privacyAgreed,
      })

      // 성공 시 폼 초기화 및 제출 완료 상태로 변경
      setName("")
      setPhone("")
      setEmail("")
      setInquiryType("")
      setSubject("")
      setMessage("")
      setInquiryMethod("phone")
      setPrivacyAgreed(false)
      setIsSubmitted(true)
    } catch (error) {
      console.error("문의 제출 중 오류 발생:", error)
      alert("문의 제출 중 오류가 발생했습니다. 다시 시도해주세요.")
    } finally {
      setIsSubmitting(false)
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
            <span className="text-primary font-medium">교육문의</span>
          </div>
        </div>
      </div>

      {/* 페이지 제목 */}
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">교육문의</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            미리캠퍼스의 교육 프로그램에 대해 궁금하신 점이 있으시면 언제든지 문의해주세요.
            <br />
            빠르고 정확한 답변으로 도와드리겠습니다.
          </p>
        </div>
      </div>

      {/* 문의 방법 섹션 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">문의 방법</h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* 연락처 정보 */}
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">전화번호</h4>
                    <p className="text-lg">02-741-3001</p>
                    <p className="text-sm text-gray-500">평일 09:30 ~ 18:00 (점심시간 12:00 ~ 13:00)</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">이메일</h4>
                    <p className="text-lg">info@miricampus.com</p>
                    <p className="text-sm text-gray-500">24시간 접수 가능, 영업일 기준 1~2일 내 답변</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">주소</h4>
                    <p className="text-lg">서울특별시 강남구 테헤란로 123 미리캠퍼스 빌딩</p>
                    <p className="text-sm text-gray-500">우편번호: 06133</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">운영 시간</h4>
                    <p className="text-lg">화요일~일요일 / 오전 9:30 ~ 오후 5:00</p>
                    <p className="text-sm text-gray-500">매주 월요일 휴무</p>
                  </div>
                </div>

                {/* 지도 */}
                <div className="aspect-video relative rounded-xl overflow-hidden border mt-6">
                  <Image src="/teheranro-123-map.png" alt="미리캠퍼스 위치" fill className="object-cover" />
                </div>
              </div>

              {/* 자주 묻는 질문 */}
              <div>
                <Card>
                  <CardHeader className="bg-blue-50">
                    <CardTitle>자주 묻는 질문</CardTitle>
                    <CardDescription>문의하기 전에 확인해보세요</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      {faqs.map((faq, index) => (
                        <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                          <h4 className="font-medium text-lg mb-2">{faq.question}</h4>
                          <p className="text-gray-600">{faq.answer}</p>
                        </div>
                      ))}
                      <div className="pt-2">
                        <Link
                          href="/community/faq"
                          className="inline-flex items-center text-primary hover:underline font-medium"
                        >
                          더 많은 질문 보기
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 문의 양식 섹션 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">문의하기</h2>

            <Tabs defaultValue="individual" className="mb-8">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="individual">개인 문의</TabsTrigger>
                <TabsTrigger value="group">단체/학교 문의</TabsTrigger>
              </TabsList>

              <TabsContent value="individual">
                <div className="bg-white p-8 rounded-lg shadow-sm border">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">문의가 접수되었습니다</h3>
                      <p className="text-gray-600 mb-8">
                        소중한 문의 감사합니다. 담당자 확인 후 빠른 시일 내에 답변 드리겠습니다.
                      </p>
                      <Button onClick={() => setIsSubmitted(false)}>새 문의하기</Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">이름 *</Label>
                          <Input
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="이름을 입력하세요"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">연락처 *</Label>
                          <Input
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="연락처를 입력하세요"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">이메일 *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="이메일을 입력하세요"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="inquiry-type">문의 유형 *</Label>
                        <Select value={inquiryType} onValueChange={setInquiryType} required>
                          <SelectTrigger id="inquiry-type">
                            <SelectValue placeholder="문의 유형을 선택하세요" />
                          </SelectTrigger>
                          <SelectContent>
                            {inquiryTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">문의 제목 *</Label>
                        <Input
                          id="subject"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          placeholder="문의 제목을 입력하세요"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">문의 내용 *</Label>
                        <Textarea
                          id="message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="문의 내용을 입력하세요"
                          rows={6}
                          required
                        />
                      </div>

                      <div className="space-y-3">
                        <Label>답변 받으실 방법 *</Label>
                        <RadioGroup value={inquiryMethod} onValueChange={setInquiryMethod} className="flex space-x-4">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="phone" id="phone-method" />
                            <Label htmlFor="phone-method" className="cursor-pointer">
                              전화
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="email" id="email-method" />
                            <Label htmlFor="email-method" className="cursor-pointer">
                              이메일
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="flex items-start space-x-2 pt-2">
                        <Checkbox
                          id="privacy"
                          checked={privacyAgreed}
                          onCheckedChange={(checked) => setPrivacyAgreed(!!checked)}
                          required
                        />
                        <div className="grid gap-1.5 leading-none">
                          <Label
                            htmlFor="privacy"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            개인정보 수집 및 이용에 동의합니다. *
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            수집된 개인정보는 문의 답변 목적으로만 사용되며, 답변 완료 후 3개월 내 파기됩니다.{" "}
                            <Link href="/privacy" className="text-primary hover:underline">
                              자세히 보기
                            </Link>
                          </p>
                        </div>
                      </div>

                      <div className="pt-4">
                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                          {isSubmitting ? "제출 중..." : "문의하기"}
                        </Button>
                      </div>
                    </form>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="group">
                <div className="bg-white p-8 rounded-lg shadow-sm border">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="group-name">기관/학교명 *</Label>
                        <Input id="group-name" placeholder="기관/학교명을 입력하세요" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact-person">담당자명 *</Label>
                        <Input id="contact-person" placeholder="담당자명을 입력하세요" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="group-phone">연락처 *</Label>
                        <Input id="group-phone" placeholder="연락처를 입력하세요" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="group-email">이메일 *</Label>
                        <Input id="group-email" type="email" placeholder="이메일을 입력하세요" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="visit-date">희망 방문일 *</Label>
                        <Input id="visit-date" type="date" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="group-size">방문 인원 *</Label>
                        <Input id="group-size" type="number" placeholder="방문 인원을 입력하세요" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="program-interest">관심 프로그램 *</Label>
                      <Select required>
                        <SelectTrigger id="program-interest">
                          <SelectValue placeholder="관심 프로그램을 선택하세요" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="science">과학융합탐구활동</SelectItem>
                          <SelectItem value="humanities">인문사회융합탐구활동</SelectItem>
                          <SelectItem value="research">주제탐구활동</SelectItem>
                          <SelectItem value="camp">캠프프로그램</SelectItem>
                          <SelectItem value="other">기타</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="group-message">문의 내용 *</Label>
                      <Textarea id="group-message" placeholder="문의 내용을 입력하세요" rows={6} required />
                    </div>

                    <div className="flex items-start space-x-2 pt-2">
                      <Checkbox id="group-privacy" required />
                      <div className="grid gap-1.5 leading-none">
                        <Label
                          htmlFor="group-privacy"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          개인정보 수집 및 이용에 동의합니다. *
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          수집된 개인정보는 문의 답변 목적으로만 사용되며, 답변 완료 후 3개월 내 파기됩니다.{" "}
                          <Link href="/privacy" className="text-primary hover:underline">
                            자세히 보기
                          </Link>
                        </p>
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button type="submit" className="w-full">
                        단체 문의하기
                      </Button>
                    </div>
                  </form>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* 추가 정보 섹션 */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">미리캠퍼스와 함께 미래를 준비하세요</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            아이들의 잠재력을 발견하고 미래를 준비하는 첫걸음, 미리캠퍼스가 함께하겠습니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg">
              <Link href="/programs/education">프로그램 알아보기</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg">
              <Link href="/field-experience/centers">체험센터 보기</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
