"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Clock, MapPin, Users, BookOpen, CheckCircle } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FieldExperienceProgramsPage() {
  const [selectedUniversity, setSelectedUniversity] = useState<string | null>(null)

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
            <Link href="/field-experience" className="hover:text-primary">
              현장체험 프로그램
            </Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-primary font-medium">프로그램안내</span>
          </div>
        </div>
      </div>

      {/* 페이지 제목 */}
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold">프로그램안내</h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
          미리캠퍼스와 함께하는 다양한 현장체험 프로그램을 소개합니다
        </p>
      </div>

      {/* 프로그램 일반 섹션 */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-primary text-white text-3xl font-bold w-16 h-16 rounded-full flex items-center justify-center">
                01
              </div>
              <h2 className="text-3xl font-bold">프로그램 일반</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div className="space-y-6">
                <Card>
                  <CardHeader className="bg-primary/10">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary text-white p-2 rounded-full">
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <CardTitle>프로그램 목적</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-lg leading-relaxed">
                      각 대학교 인적 자원을 활용한 진로탐색(멘토링) 프로그램을 통해 대학을 포함한 인생의 진로에 대한
                      고민을 가진 청소년에게 향후 개인의 진로 선택과 미래에 대한 통찰을 제공
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="bg-primary/10">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary text-white p-2 rounded-full">
                        <Users className="h-5 w-5" />
                      </div>
                      <CardTitle>프로그램 개요</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">시간</p>
                        <p>2시간 ~ 1일간</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">장소</p>
                        <p>희망 대학교 캠퍼스 일원</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">대상</p>
                        <p>자신의 진로를 주도적으로 탐색하고 싶은 청소년</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-P8sSr5dm9cLHuaYNAwZuHTIfSr1rHS.png"
                  alt="현장체험 프로그램 학생들"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <Card className="mb-12">
              <CardHeader className="bg-primary/10">
                <div className="flex items-center gap-3">
                  <div className="bg-primary text-white p-2 rounded-full">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <CardTitle>프로그램 구성</CardTitle>
                  <CardDescription>프로그램 기본 구성은 다음 장 참조</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg">
                      진로탐색 멘토링: 각 대학교 재학생이 청소년의 진로·진학 상담 및 캠퍼스 방문 체험 제공
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg">
                      희망전공에 따라 해당 학과의 멘토를 배정하고 멘토와 함께 자신만의 진로 포트폴리오를 모색
                    </p>
                  </li>
                </ul>
                <div className="bg-gray-100 p-4 rounded-lg mt-4">
                  <p className="text-sm">※ 희망시 전공체험 프로그램을 희망대학교 전공 학부 강의실에서 체험 가능</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-primary/10">
                <div className="flex items-center gap-3">
                  <div className="bg-primary text-white p-2 rounded-full">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <CardTitle>기대 효과</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg">
                      청소년과 희망 대학교 학생이 직접 만나 대학을 통해 진학준비 경험과 방법 등을 체험, 이해
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg">
                      희망 대학교 캠퍼스 방문을 통해 대학의 분위기를 사전에 경험함으로써 진학에 대한 동기부여 제공
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg">
                      대학이 무엇을 하는 곳인지를 이해하고 공부해야 하는 근본 이유를 깨닫게 하여
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg">학부모님의 자녀에 대한 진학/진로 고민을 해소</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 프로그램 구성 섹션 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <div className="bg-primary text-white text-3xl font-bold w-16 h-16 rounded-full flex items-center justify-center">
                02
              </div>
              <h2 className="text-3xl font-bold">프로그램 구성</h2>
            </div>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-4 text-left w-24">구분</th>
                    <th className="border p-4 text-left w-48">주요내용</th>
                    <th className="border p-4 text-left">활동</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-4 text-center">-</td>
                    <td className="border p-4">멘티/멘토 인사</td>
                    <td className="border p-4">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>프로그램 소개</li>
                        <li>멘티(청소년)와 멘토(대학생/대학원생) 매칭</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border p-4 text-center">주제1</td>
                    <td className="border p-4">전공박람회</td>
                    <td className="border p-4">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>단과대학 계열별 전공소개(계열 선정은 협의)</li>
                        <li>멘토가 직접 소개해주는 대학 전공</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-4 text-center">주제2</td>
                    <td className="border p-4">캠퍼스투어</td>
                    <td className="border p-4">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>멘토와 함께 떠나는 캠퍼스투어</li>
                        <li>단과대학 방문 및 정문에서 기념 사진 촬영</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border p-4 text-center">주제3</td>
                    <td className="border p-4">
                      대학과 전공에 대한
                      <br />
                      이해 및 선택
                    </td>
                    <td className="border p-4">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>대학의 의미와</li>
                        <li>대학에서 할 수 있는 활동 알아보기</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-4 text-center">주제4</td>
                    <td className="border p-4">자기이해</td>
                    <td className="border p-4">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>나의 진로 마인드맵 그리기</li>
                        <li>나의 강약점 파악하기</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border p-4 text-center">주제5</td>
                    <td className="border p-4">학습법에 대한 이해</td>
                    <td className="border p-4">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>멘토의 생활습관과 공부방법 공유</li>
                        <li>멘티의 공부방법 개선점 확인</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-4 text-center">-</td>
                    <td className="border p-4">멘티/멘토 인사</td>
                    <td className="border p-4">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>멘토와 멘티의 연락처 주고받기</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 p-6 rounded-xl mb-12">
              <p className="text-lg">
                ※ 본 프로그램은 1일 프로그램으로 참여하는 대상과 학교 환경(시간)에 따라 위 주제를 자유롭게 선택 및 조합
                하여 운영 가능합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="aspect-[4/3] relative rounded-xl overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rryOETVoQ7SSZUvncZMYxKwtt18RAt.png"
                  alt="현장체험 프로그램 활동 사진"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-[4/3] relative rounded-xl overflow-hidden">
                <Image
                  src="/career-exploration-mentoring.png"
                  alt="현장체험 프로그램 활동 사진"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-[4/3] relative rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?key=flh1e"
                  alt="현장체험 프로그램 활동 사진"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 대학별 프로그램 섹션 */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <div className="bg-primary text-white text-3xl font-bold w-16 h-16 rounded-full flex items-center justify-center">
                03
              </div>
              <h2 className="text-3xl font-bold">대학별 특화 프로그램</h2>
            </div>

            <Tabs defaultValue="pukyong" className="mb-12">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="pukyong" className="text-lg py-3">
                  부경대학교
                </TabsTrigger>
                <TabsTrigger value="kyungsung" className="text-lg py-3">
                  경성대학교
                </TabsTrigger>
                <TabsTrigger value="pusan" className="text-lg py-3">
                  부산대학교
                </TabsTrigger>
                <TabsTrigger value="maritime" className="text-lg py-3">
                  해양대학교
                </TabsTrigger>
              </TabsList>

              <TabsContent value="pukyong">
                <Card>
                  <CardHeader className="bg-primary/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CardTitle>부경대학교 특화 프로그램</CardTitle>
                      </div>
                      <div className="w-16 h-16 relative flex-shrink-0">
                        <Image src="/logos/pukyong-logo.png" alt="부경대학교 로고" fill className="object-contain" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-bold mb-4">수산해양 특화 프로그램</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                            <p>해양생물 관찰 실습</p>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                            <p>수산물 가공 체험</p>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                            <p>해양환경 탐구 활동</p>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                            <p>해양 로봇 체험</p>
                          </li>
                        </ul>
                      </div>
                      <div className="aspect-video relative rounded-xl overflow-hidden">
                        <Image src="/centers/pukyong.png" alt="부경대학교 캠퍼스" fill className="object-cover" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="kyungsung">
                <Card>
                  <CardHeader className="bg-primary/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CardTitle>경성대학교 특화 프로그램</CardTitle>
                      </div>
                      <div className="w-16 h-16 relative flex-shrink-0">
                        <Image src="/logos/kyungsung-logo.png" alt="경성대학교 로고" fill className="object-contain" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-bold mb-4">바이오의생명 특화 프로그램</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                            <p>생명과학 실험 체험</p>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                            <p>의학 체험 활동</p>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                            <p>바이오 연구 탐방</p>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                            <p>현미경 관찰 실습</p>
                          </li>
                        </ul>
                      </div>
                      <div className="aspect-video relative rounded-xl overflow-hidden">
                        <Image src="/centers/kyungsung.png" alt="경성대학교 캠퍼스" fill className="object-cover" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="pusan">
                <Card>
                  <CardHeader className="bg-primary/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CardTitle>부산대학교 특화 프로그램</CardTitle>
                      </div>
                      <div className="w-16 h-16 relative flex-shrink-0">
                        <Image src="/logos/pusan-logo.png" alt="부산대학교 로고" fill className="object-contain" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-bold mb-4">의생명 및 인문사회 특화 프로그램</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                            <p>의학 체험 활동</p>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                            <p>인문학 탐구 세미나</p>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                            <p>사회과학 연구 방법론</p>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                            <p>대학 캠퍼스 투어</p>
                          </li>
                        </ul>
                      </div>
                      <div className="aspect-video relative rounded-xl overflow-hidden">
                        <Image src="/centers/pusan.png" alt="부산대학교 캠퍼스" fill className="object-cover" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="maritime">
                <Card>
                  <CardHeader className="bg-primary/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CardTitle>해양대학교 특화 프로그램</CardTitle>
                      </div>
                      <div className="w-16 h-16 relative flex-shrink-0">
                        <Image src="/logos/maritime-logo.png" alt="해양대학교 로고" fill className="object-contain" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-bold mb-4">국제 및 해양 특화 프로그램</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                            <p>선박 운항 시뮬레이션 체험</p>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                            <p>해양 탐사 장비 체험</p>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                            <p>국제 물류 체험</p>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                            <p>해양 안전 교육</p>
                          </li>
                        </ul>
                      </div>
                      <div className="aspect-video relative rounded-xl overflow-hidden">
                        <Image src="/centers/maritime.png" alt="해양대학교 캠퍼스" fill className="object-cover" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">자주 묻는 질문</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>프로그램 참가 비용은 얼마인가요?</AccordionTrigger>
                  <AccordionContent>
                    프로그램 참가 비용은 무료입니다. 다만, 교통비와 식비는 참가자 부담입니다.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>프로그램 신청은 어떻게 하나요?</AccordionTrigger>
                  <AccordionContent>
                    학교 단위로 신청 가능합니다. 담당 선생님께서 미리캠퍼스로 연락주시면 상세한 안내를 드립니다.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>프로그램 일정은 조정 가능한가요?</AccordionTrigger>
                  <AccordionContent>
                    네, 학교 일정에 맞춰 프로그램 내용과 시간을 조정할 수 있습니다. 사전에 협의가 필요합니다.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>최소 참가 인원이 있나요?</AccordionTrigger>
                  <AccordionContent>
                    최소 10명 이상의 학생이 참가해야 프로그램 운영이 가능합니다. 최대 인원은 대학별로 상이하니
                    문의해주세요.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* 신청 안내 */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">현장체험 프로그램 신청</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            미리캠퍼스 현장체험 프로그램은 학교 및 단체 단위로 신청 가능합니다.
            <br />
            아래 버튼을 통해 문의하시면 상세한 안내를 받으실 수 있습니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="text-lg bg-white text-primary hover:bg-gray-100">
              <Link href="/field-experience/centers">체험센터 보기</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white/10">
              <Link href="/inquiry">문의하기</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
