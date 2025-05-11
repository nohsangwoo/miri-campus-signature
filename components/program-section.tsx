import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProgramSection() {
  return (
    <section className="py-20 bg-slate-50" id="programs">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">프로그램 소개</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            미리캠퍼스의 다양한 교육 프로그램을 통해 아이들의 잠재력을 발견하고 미래를 준비합니다
          </p>
        </div>

        <Tabs defaultValue="science" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-2xl grid-cols-3">
              <TabsTrigger value="science" className="text-lg py-3">
                과학융합탐구활동
              </TabsTrigger>
              <TabsTrigger value="humanities" className="text-lg py-3">
                인문사회융합탐구활동
              </TabsTrigger>
              <TabsTrigger value="research" className="text-lg py-3">
                주제탐구활동
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="science" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">과학을 통해 미래를 설계하는 시간</h3>
                <p className="text-lg">
                  실험과 체험으로 만나는 나의 전공과 직업. 진로탐색의 첫걸음, 과학으로 시작됩니다.
                </p>
                <p className="text-lg">
                  미리캠퍼스의 자유학기제 프로그램은 학생들이 직접 실험하고, 전공과 직업을 체험하며 진로에 대한 구체적인
                  방향을 설정할 수 있도록 돕는 창의융합형 교육과정입니다.
                </p>
                <div className="flex gap-4">
                  <Button size="lg" className="text-lg">
                    중학교 프로그램
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg">
                    고등학교 프로그램
                  </Button>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800&query=과학 실험을 하는 학생들"
                  alt="과학융합탐구활동"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card>
                <CardHeader>
                  <CardTitle>화학 실험</CardTitle>
                  <CardDescription>생활 속 화학 발광 탐구</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=300&width=500&query=화학 실험"
                      alt="화학 실험"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p>화학과, 화공과 / 연구원, 범죄과학수사요원 진로 연계</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    자세히 보기
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>물리 실험</CardTitle>
                  <CardDescription>소리와 빛을 통한 파동 탐구</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=300&width=500&query=물리 실험"
                      alt="물리 실험"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p>물리학과 / 물리연구자, 음향엔지니어 진로 연계</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    자세히 보기
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>생명공학 실험</CardTitle>
                  <CardDescription>세포 및 DNA 구조 탐구</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=300&width=500&query=생명공학 실험"
                      alt="생명공학 실험"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p>생명공학과 / 유전공학자, 연구원 진로 연계</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    자세히 보기
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="humanities" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">자체 제작 창의 보드게임 기반 인문계열 탐구활동</h3>
                <p className="text-lg">
                  학생 스스로 사고하고 결정하며 배우는 경영 창업, 금융 투자, 지속가능한발전목표(SDGs) 교육
                </p>
                <p className="text-lg">
                  "놀이가 아닌 학습으로, 체험이 아닌 탐구로" 미리캠퍼스의 인문,사회,경상계열 보드게임 프로그램은 교과
                  연계형 체험 중심 수업입니다.
                </p>
                <div className="flex gap-4">
                  <Button size="lg" className="text-lg">
                    중학교 프로그램
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg">
                    고등학교 프로그램
                  </Button>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800&query=보드게임으로 학습하는 학생들"
                  alt="인문사회융합탐구활동"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card>
                <CardHeader>
                  <CardTitle>경영 창업 보드게임</CardTitle>
                  <CardDescription>경제생활과 합리적 선택</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=300&width=500&query=경영 창업 보드게임"
                      alt="경영 창업 보드게임"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p>의사결정력, 문제해결력, 자기관리역량, 창의력 함양</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    자세히 보기
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>금융 투자 보드게임</CardTitle>
                  <CardDescription>금융의 필요성과 역할, 시장의 원리</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=300&width=500&query=금융 투자 보드게임"
                      alt="금융 투자 보드게임"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p>수리적 사고력, 경제이해, 분석력, 자료해석 함양</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    자세히 보기
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>SDGs 보드게임</CardTitle>
                  <CardDescription>세계 시민과 지속 가능한 삶</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=300&width=500&query=SDGs 보드게임"
                      alt="SDGs 보드게임"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p>환경감수성, 과학탐구, 윤리적 책임, 공동체 의식 함양</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    자세히 보기
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="research" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">프로젝트형 탐구 수업</h3>
                <p className="text-lg">
                  주제탐구활동은 단순한 소논문 활동이 아닙니다. 학생 스스로 질문을 설정하고, 탐구를 설계하며, 직접
                  실험과 자료 분석을 수행하는 R&E 기반의 '탐구 중심 수업'입니다.
                </p>
                <p className="text-lg">
                  미리캠퍼스만의 차별성은 프로젝트형 탐구수업을 활용해 입시에 성공한 경험을 가진 전공 강사들을 활용하여
                  학생 개개인의 생활기록부를 분석하고 교과와 진로를 연결한 입시 맞춤형 프로그램을 진행합니다.
                </p>
                <div className="flex gap-4">
                  <Button size="lg" className="text-lg">
                    레벨1 프로그램
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg">
                    레벨2 프로그램
                  </Button>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800&query=주제탐구활동 수업 장면"
                  alt="주제탐구활동"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl mt-12">
              <h4 className="text-2xl font-bold mb-6">주제탐구 직영 강사 현황</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-blue-50">
                      <th className="border p-3 text-left">분야</th>
                      <th className="border p-3 text-left">성명</th>
                      <th className="border p-3 text-left">소속</th>
                      <th className="border p-3 text-left">학과/부서</th>
                      <th className="border p-3 text-left">전공</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-3">커리큘럼개발</td>
                      <td className="border p-3">정제원</td>
                      <td className="border p-3">숭의여고</td>
                      <td className="border p-3">EBS대표컨설턴트</td>
                      <td className="border p-3">역사</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border p-3">의생명</td>
                      <td className="border p-3">김동헌</td>
                      <td className="border p-3">부산대</td>
                      <td className="border p-3">의학과</td>
                      <td className="border p-3">의학</td>
                    </tr>
                    <tr>
                      <td className="border p-3">경영</td>
                      <td className="border p-3">배정은</td>
                      <td className="border p-3">서울대</td>
                      <td className="border p-3">경영학석사</td>
                      <td className="border p-3">병원경영</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border p-3">인문사회</td>
                      <td className="border p-3">김화성</td>
                      <td className="border p-3">부산대</td>
                      <td className="border p-3">교육심리</td>
                      <td className="border p-3">교육심리</td>
                    </tr>
                    <tr>
                      <td className="border p-3">화학</td>
                      <td className="border p-3">김종복</td>
                      <td className="border p-3">효고현립대</td>
                      <td className="border p-3">교수</td>
                      <td className="border p-3">물질과학</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
