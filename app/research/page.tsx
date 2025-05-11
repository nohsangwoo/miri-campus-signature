import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ResearchPage() {
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
            <span className="text-primary font-medium">교육개발연구소</span>
          </div>
        </div>
      </div>

      {/* 페이지 제목 */}
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold">교육개발연구소</h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
          미래 교육을 선도하는 미리캠퍼스 교육개발연구소를 소개합니다
        </p>
      </div>

      {/* 소장 인사말 섹션 */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">소장 인사말</h2>

            <div className="grid md:grid-cols-3 gap-12 items-start">
              <div className="md:col-span-1">
                <div className="aspect-square relative rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <Image src="/placeholder.svg?key=gscko" alt="박미정 교육개발연구소장" fill className="object-cover" />
                </div>
                <div className="text-center mt-6">
                  <h3 className="text-xl font-bold">박미정</h3>
                  <p className="text-primary">교육개발연구소장</p>
                </div>
              </div>

              <div className="md:col-span-2 space-y-6 text-lg leading-relaxed">
                <p className="text-2xl font-medium">안녕하세요.</p>
                <p className="text-2xl font-medium">(주)미리캠퍼스 교육개발연구소장 박미정입니다.</p>
                <p>
                  저는 <span className="font-bold">35년간 교단에서 아이들의 진로와 진학을 함께 고민하며</span>
                  <br />
                  성장을 돕는 일에 힘써왔습니다.
                </p>
                <p>
                  또한, <span className="font-bold">공교육 현장의 동료 교사들과 함께 교육 콘텐츠를 개발하고,</span>
                  <br />더 나은 수업을 만들기 위해 노력해 왔습니다.
                </p>
                <p>
                  이제는 그 경험을 바탕으로
                  <br />
                  <span className="font-bold">학교 현장에 꼭 필요한 프로그램을 연구·개발하며,</span>
                  <br />
                  학생과 교사 모두에게 실질적인 도움이 되는 교육을 만들어가고자 합니다.
                </p>
                <p>
                  <span className="font-bold">아이들의 가능성을 여는 교육,</span>
                  <br />그 길에 미리캠퍼스가 함께하겠습니다.
                </p>
                <p>감사합니다.</p>
                <p className="font-bold text-right">교육개발연구소장 드림</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 연구소 소개 섹션 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">연구소 소개</h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary">미래 교육을 선도하는 연구소</h3>
                <p className="text-lg leading-relaxed">
                  미리캠퍼스 교육개발연구소는 급변하는 교육 환경 속에서 학생들이 미래 사회에 필요한 역량을 갖출 수
                  있도록 혁신적인 교육 프로그램과 콘텐츠를 연구·개발하고 있습니다.
                </p>
                <p className="text-lg leading-relaxed">
                  35년 이상의 교육 현장 경험을 바탕으로, 학교와 학생들에게 실질적으로 도움이 되는 교육 솔루션을 제공하기
                  위해 노력하고 있습니다.
                </p>
                <p className="text-lg leading-relaxed">
                  특히 진로교육, 탐구활동, 체험학습 분야에서 차별화된 프로그램을 개발하여 학생들의 자기주도적 학습과
                  진로 탐색을 지원합니다.
                </p>
              </div>

              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                <Image src="/education-research-meeting.png" alt="교육개발연구소 활동" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 사업분야 섹션 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">사업분야</h2>

            <Tabs defaultValue="school" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger
                  value="school"
                  className="text-lg py-4 bg-blue-600 data-[state=active]:bg-blue-700 text-white"
                >
                  학교
                </TabsTrigger>
                <TabsTrigger
                  value="institution"
                  className="text-lg py-4 bg-blue-400 data-[state=active]:bg-blue-500 text-white"
                >
                  기관
                </TabsTrigger>
                <TabsTrigger
                  value="student"
                  className="text-lg py-4 bg-green-600 data-[state=active]:bg-green-700 text-white"
                >
                  학생/학부모
                </TabsTrigger>
              </TabsList>

              <TabsContent value="school" className="space-y-8">
                <Card>
                  <CardContent className="pt-6">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold">•</span>
                        <span className="text-lg">진로박람회 운영 컨설팅</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold">•</span>
                        <span className="text-lg">교육과정박람회 운영</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold">•</span>
                        <span className="text-lg">기타 진로 진학 프로그램 개발 운영 컨설팅</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <div className="aspect-video relative rounded-xl overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Vz7u0HG9xVDBAQ7eyEuaEo2gw1UwOo.png"
                    alt="학교 사업 이미지"
                    fill
                    className="object-cover"
                  />
                </div>
              </TabsContent>

              <TabsContent value="institution" className="space-y-8">
                <Card>
                  <CardContent className="pt-6">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400 font-bold">•</span>
                        <span className="text-lg">경남교육청진로교육원 협업</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400 font-bold">•</span>
                        <span className="text-lg">국립일양기상과학관 위탁 운영</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400 font-bold">•</span>
                        <span className="text-lg">직업체험테마파크/스쿨라이프 위탁 운영</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400 font-bold">•</span>
                        <span className="text-lg">각 지자체 진로진학지원센터 운영</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <div className="aspect-video relative rounded-xl overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Vz7u0HG9xVDBAQ7eyEuaEo2gw1UwOo.png"
                    alt="기관 사업 이미지"
                    fill
                    className="object-cover"
                  />
                </div>
              </TabsContent>

              <TabsContent value="student" className="space-y-8">
                <Card>
                  <CardContent className="pt-6">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 font-bold">•</span>
                        <span className="text-lg">학부모아카데미</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 font-bold">•</span>
                        <span className="text-lg">입시 컨설팅(상향/목표/편입)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 font-bold">•</span>
                        <span className="text-lg">진로심리상담</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 font-bold">•</span>
                        <span className="text-lg">R&E(Research&Education)프로그램 개발 및 운영</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 font-bold">•</span>
                        <span className="text-lg">정서활동지원</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 font-bold">•</span>
                        <span className="text-lg">공부습관 캠프 운영</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <div className="aspect-video relative rounded-xl overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Vz7u0HG9xVDBAQ7eyEuaEo2gw1UwOo.png"
                    alt="학생/학부모 사업 이미지"
                    fill
                    className="object-cover"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* 연구 성과 섹션 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">연구 성과</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-center">교육 프로그램 개발</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="text-center text-4xl font-bold text-primary mb-4">15+</div>
                  <p className="text-center">진로탐색, 체험학습, 탐구활동 등 다양한 교육 프로그램 개발</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-center">교육 콘텐츠 제작</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="text-center text-4xl font-bold text-primary mb-4">30+</div>
                  <p className="text-center">교과 연계 학습 자료, 워크북, 교사용 지도서 등 교육 콘텐츠 제작</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-center">교육 컨설팅</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="text-center text-4xl font-bold text-primary mb-4">50+</div>
                  <p className="text-center">학교 및 교육기관 대상 교육과정 운영, 진로교육 컨설팅 진행</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 연구진 소개 섹션 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">연구진 소개</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="aspect-square relative">
                  <Image src="/placeholder.svg?key=sntuf" alt="박미정 교육개발연구소장" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">박미정</h3>
                  <p className="text-primary font-medium mb-3">교육개발연구소장</p>
                  <p className="text-gray-600 mb-4">35년 교육 경력 / 진로교육 전문가</p>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="aspect-square relative">
                  <Image src="/male-education-researcher.png" alt="김진호 수석연구원" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">김진호</h3>
                  <p className="text-primary font-medium mb-3">수석연구원</p>
                  <p className="text-gray-600 mb-4">교육과정 개발 / 교육공학 전문가</p>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="aspect-square relative">
                  <Image src="/female-education-researcher.png" alt="이수진 선임연구원" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">이수진</h3>
                  <p className="text-primary font-medium mb-3">선임연구원</p>
                  <p className="text-gray-600 mb-4">진로상담 / 학습심리 전문가</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 문의 섹션 */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">교육개발연구소와 함께하세요</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            교육 프로그램 개발, 컨설팅, 연구 협력 등 다양한 문의를 환영합니다.
            <br />
            미리캠퍼스 교육개발연구소와 함께 더 나은 교육을 만들어가세요.
          </p>
          <Button size="lg" className="text-lg bg-white text-primary hover:bg-gray-100">
            <Link href="/inquiry">문의하기</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
