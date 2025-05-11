import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function EducationProgramsPage() {
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
            <Link href="/programs" className="hover:text-primary">
              프로그램소개
            </Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-primary font-medium">교육프로그램</span>
          </div>
        </div>
      </div>

      {/* 페이지 제목 */}
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">교육프로그램</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            미리캠퍼스는 학생들의 자기주도적 학습과 창의적 사고력 향상을 위한 다양한 교육 프로그램을 제공합니다.
            <br />
            과학, 인문사회, 주제탐구 등 다양한 분야에서 학생들의 잠재력을 발견하고 키워드립니다.
          </p>
        </div>
      </div>

      {/* 프로그램 목록 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">미리캠퍼스 교육 프로그램</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Link href="#science-exploration" className="block">
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardHeader className="bg-blue-50">
                    <CardTitle>과학융합탐구활동</CardTitle>
                    <CardDescription>Science Convergence Exploration</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                      <Image
                        src="/science-experiment-education.png"
                        alt="과학융합탐구활동"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p>
                      실험과 체험으로 만나는 나의 전공과 직업. 과학을 통해 미래를 설계하는 시간을 제공하는 창의융합형
                      교육과정입니다.
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="#humanities-exploration" className="block">
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardHeader className="bg-yellow-50">
                    <CardTitle>인문사회융합탐구활동</CardTitle>
                    <CardDescription>Humanities & Social Sciences Exploration</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                      <Image src="/board-game-education.png" alt="인문사회융합탐구활동" fill className="object-cover" />
                    </div>
                    <p>
                      자체 제작 창의 보드게임 기반 인문계열 탐구활동. 경영 창업, 금융 투자, 지속가능한발전목표(SDGs)
                      교육을 제공합니다.
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="#thematic-exploration" className="block">
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardHeader className="bg-green-50">
                    <CardTitle>주제탐구활동</CardTitle>
                    <CardDescription>Thematic Research & Exploration</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                      <Image src="/research-project-education.png" alt="주제탐구활동" fill className="object-cover" />
                    </div>
                    <p>
                      학생 스스로 질문을 설정하고, 탐구를 설계하며, 직접 실험과 자료 분석을 수행하는 R&E 기반의 탐구
                      중심 수업입니다.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 과학융합탐구활동 */}
      <section id="science-exploration" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-blue-500 text-white text-3xl font-bold w-16 h-16 rounded-full flex items-center justify-center">
                01
              </div>
              <h2 className="text-3xl font-bold">과학융합탐구활동</h2>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm mb-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">과학을 통해 미래를 설계하는 시간</h3>
                <p className="text-xl">실험과 체험으로 만나는 나의 전공과 직업</p>
              </div>

              <div className="mb-8">
                <p className="text-lg leading-relaxed mb-4">
                  진로탐색의 첫걸음, 과학으로 시작됩니다. 미리캠퍼스의 자유학기제 프로그램은 학생들이 직접 실험하고,
                  전공과 직업을 체험하며 진로에 대한 구체적인 방향을 설정할 수 있도록 돕는 창의융합형 교육과정입니다.
                </p>
                <p className="text-lg leading-relaxed">
                  관심 분야를 선택하고, 실습과 활동을 통해 자신의 적성과 미래를 자연스럽게 탐색합니다.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h4 className="text-xl font-bold mb-4">프로그램 개요</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-medium mb-2">프로그램 유형</p>
                    <p>직업·학과(전공) 체험 프로그램</p>
                  </div>
                  <div>
                    <p className="font-medium mb-2">대상</p>
                    <p>중학생 (자유학기제 맞춤), 고등학생</p>
                  </div>
                  <div>
                    <p className="font-medium mb-2">목적</p>
                    <p>진로탐색 및 직업 이해</p>
                  </div>
                  <div>
                    <p className="font-medium mb-2">내용</p>
                    <p>관심 분야 선택 → 자아찾기 → 관련 실험 체험</p>
                  </div>
                  <div>
                    <p className="font-medium mb-2">특징</p>
                    <p>다양한 직업군 소개와 체험 중심</p>
                  </div>
                  <div>
                    <p className="font-medium mb-2">결과</p>
                    <p>나에게 맞는 진로 탐색</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg font-medium italic">
                  "학생이 스스로 선택하고 체험하는 진짜 진로 교육,
                  <br />
                  과학을 통해 적성과 진로를 깨우치는 살아있는 배움입니다."
                </p>
              </div>
            </div>

            <Tabs defaultValue="middle" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="middle" className="text-lg py-3">
                  중학교 프로그램
                </TabsTrigger>
                <TabsTrigger value="high" className="text-lg py-3">
                  고등학교 프로그램
                </TabsTrigger>
              </TabsList>

              <TabsContent value="middle">
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold mb-6">중학교 과학융합탐구활동</h3>

                  <div className="mb-8">
                    <h4 className="text-xl font-bold mb-4">체험 분야별 프로그램</h4>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>체험 분야</TableHead>
                            <TableHead>프로그램 주요 내용</TableHead>
                            <TableHead>전공/직업 연계</TableHead>
                            <TableHead>주요 실습 활동</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">화학</TableCell>
                            <TableCell>생활 속 화학 발광 탐구</TableCell>
                            <TableCell>화학과, 화공과 / 연구원, 범죄과학수사요원</TableCell>
                            <TableCell>자외선 램프 감별 실험, 루미놀 발광, 축광 도료 비교</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">물리</TableCell>
                            <TableCell>소리와 빛을 통한 파동 탐구</TableCell>
                            <TableCell>물리학과 / 물리연구자, 음향엔지니어</TableCell>
                            <TableCell>레이저 실험, 파동 간섭, 기주공명, 클라드니 실험</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">동물</TableCell>
                            <TableCell>실험동물의 관찰과 처치법</TableCell>
                            <TableCell>수의학과, 생명과학과 / 실험동물전문가</TableCell>
                            <TableCell>실험동물 관찰, 처치(주사·봉합법) 모형 실습</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">의학·건강</TableCell>
                            <TableCell>심혈관계 이해 및 건강 측정</TableCell>
                            <TableCell>의예과, 간호학과 / 의사, 의료기사</TableCell>
                            <TableCell>심장 구조 탐색, 초음파·혈관 측정 실험</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">생명공학</TableCell>
                            <TableCell>세포 및 DNA 구조 탐구</TableCell>
                            <TableCell>생명공학과 / 유전공학자, 연구원</TableCell>
                            <TableCell>세포 분열 관찰, DNA 추출, 유전자 이해 실험</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">과학관 관련 직업</TableCell>
                            <TableCell>과학해설사 및 전시기획 체험</TableCell>
                            <TableCell>과학교육과, 과학커뮤니케이션 / 과학해설사, 기획자</TableCell>
                            <TableCell>전시기획 실습, 해설 원고 작성, 과학해설 실습</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-bold mb-4">생활과학(퍼포먼스, 성과물) 중심 프로그램</h4>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>프로그램명</TableHead>
                            <TableHead>대상</TableHead>
                            <TableHead>주요 활동</TableHead>
                            <TableHead>연계 교과</TableHead>
                            <TableHead>비고</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">초간단! 눈에 보이는 과학</TableCell>
                            <TableCell>중1~2</TableCell>
                            <TableCell>광합성 실험, 현미경 관찰</TableCell>
                            <TableCell>통합과학, 생명과학</TableCell>
                            <TableCell>기본 실험 체험</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">우리 집에서 전지 만들기</TableCell>
                            <TableCell>중3~고1</TableCell>
                            <TableCell>자가제조 화학전지 제작</TableCell>
                            <TableCell>화학 I, 통합과학</TableCell>
                            <TableCell>안전 지도 필수</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">세포의 세계를 탐험하자</TableCell>
                            <TableCell>중~고</TableCell>
                            <TableCell>세포 관찰, 효소 반응 실험</TableCell>
                            <TableCell>생명과학 I</TableCell>
                            <TableCell>2인 1조 구성 적합</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">물 정화 실험실</TableCell>
                            <TableCell>중1~2</TableCell>
                            <TableCell>간이 정수기 제작, 다양한 필터 비교</TableCell>
                            <TableCell>화학, 환경, 통합과학</TableCell>
                            <TableCell>물질의 상태 및 성질 이해</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">액체 모래시계 만들기</TableCell>
                            <TableCell>중1~2</TableCell>
                            <TableCell>밀도, 점성 실험, 흐름 속도 비교</TableCell>
                            <TableCell>물리, 화학</TableCell>
                            <TableCell>감각적 흥미 유도</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">컬러 화산 폭발쇼</TableCell>
                            <TableCell>중1~고1</TableCell>
                            <TableCell>화산 모형 제작, CO₂ 반응 실험</TableCell>
                            <TableCell>화학, 지구과학, 통합과학</TableCell>
                            <TableCell>STEAM 활동</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">손난로 만들기</TableCell>
                            <TableCell>중1~고2</TableCell>
                            <TableCell>발열 반응 이해 및 제작 실습</TableCell>
                            <TableCell>화학, 물리, 생명과학</TableCell>
                            <TableCell>생활 과학 융합 주제</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">나만의 연필꽃이 만들기</TableCell>
                            <TableCell>중1~중3</TableCell>
                            <TableCell>자원 활용 및 구조물 제작, 경제적 의사결정</TableCell>
                            <TableCell>화학, 사회, 기술가정</TableCell>
                            <TableCell>융합형 수업 설계 적합</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">텐세그리티 구조물 만들기</TableCell>
                            <TableCell>중1~고1</TableCell>
                            <TableCell>힘의 평형, 구조 안정성 실험</TableCell>
                            <TableCell>물리, 수학, 기술</TableCell>
                            <TableCell>수학+공학 연계 가능</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">아쿠아리움 만들기</TableCell>
                            <TableCell>초6~중2</TableCell>
                            <TableCell>고흡수성 수지 활용, 상태 변화 실험</TableCell>
                            <TableCell>화학, 환경</TableCell>
                            <TableCell>친환경 소재 연계 가능</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">나만의 향수 만들기</TableCell>
                            <TableCell>중1~고1</TableCell>
                            <TableCell>천연 에센셜 오일 추출 및 조합, 농도 조절, 알코올 희석 실습</TableCell>
                            <TableCell>화학, 생활과학</TableCell>
                            <TableCell>감각 STEAM 체험 / 혼합물 분리 원리 이해</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-bold mb-4">프로그램 신청방법</h4>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
                          1
                        </div>
                        <h5 className="font-medium mb-2">프로그램 확인</h5>
                        <p className="text-sm">홈페이지에서 프로그램 내용 및 대상 확인</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
                          2
                        </div>
                        <h5 className="font-medium mb-2">전화 상담 및 예약</h5>
                        <p className="text-sm">원하는 프로그램을 선택 후 일자/시간을 전화로 상담 및 예약 진행</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
                          3
                        </div>
                        <h5 className="font-medium mb-2">현장 참여</h5>
                        <p className="text-sm">예약된 일정에 방문하여 직업·학과체험 진행</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
                          4
                        </div>
                        <h5 className="font-medium mb-2">추가 안내</h5>
                        <p className="text-sm">일부 실험은 영어 수업으로도 운영 가능</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-4">프로그램 이용안내</h4>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>구분</TableHead>
                            <TableHead>대상</TableHead>
                            <TableHead>참가비</TableHead>
                            <TableHead>기타</TableHead>
                            <TableHead>진행 시간</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">직업·학과체험 프로그램</TableCell>
                            <TableCell>중학생 · 고등학생</TableCell>
                            <TableCell>25,000원</TableCell>
                            <TableCell>20명 이상 지불보증</TableCell>
                            <TableCell>최대 120분 (협의 가능)</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>

                    <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium mb-2">운영 안내</h5>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>예약제 운영: 최소 1주일 전 사전 예약 필수</li>
                        <li>운영 시간: 화요일~일요일 / 오전 9:30 ~ 오후 5:00</li>
                        <li>휴관일: 매주 월요일 휴무</li>
                        <li>장소/일정은 전화 상담을 통해 조율 가능</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="high">
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold mb-6">고등학교 과학융합탐구활동</h3>
                  <div className="mb-8">
                    <div className="text-center mb-6">
                      <h4 className="text-xl font-bold text-blue-600 mb-2">
                        "심화된 실험과 탐구활동으로, 나의 진로에 한 걸음 더 가까이"
                      </h4>
                      <p className="text-lg">전문가형 실습 + 과제 기반 체험 + 전공 인터뷰까지, 진짜 진로에 몰입하다</p>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg mb-8">
                      <h4 className="text-xl font-bold mb-4">프로그램 개요</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <p className="font-medium mb-2">프로그램명</p>
                          <p>미리캠퍼스 자유학기제 심화 진로체험 프로그램</p>
                        </div>
                        <div>
                          <p className="font-medium mb-2">대상</p>
                          <p>
                            특목고진학 대상자(중학교)
                            <br />
                            과학중점학교, 일반고 자율활동, 동아리활동, 창의체험활동
                          </p>
                        </div>
                        <div>
                          <p className="font-medium mb-2">운영 방식</p>
                          <p>전공별 실험 집중 체험 + 전공 과제 수행 + 전공자(현직자/대학생) 인터뷰</p>
                        </div>
                        <div>
                          <p className="font-medium mb-2">구성 특징</p>
                          <p>문제 해결 중심의 실습, 전공 발표 및 결과 공유 포함</p>
                        </div>
                        <div>
                          <p className="font-medium mb-2">기대 효과</p>
                          <p>자기주도적 탐색 역량, 전공 이해도, 진로 몰입 경험 강화</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-bold mb-4">프로그램 구조</h4>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>단계</TableHead>
                            <TableHead>내용</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">① 진로 탐색 오리엔테이션</TableCell>
                            <TableCell>직업군/전공에 대한 핵심 정보 및 실험 주제 개요 소개</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">② 전공 실험 체험</TableCell>
                            <TableCell>고급 수준의 탐구 중심 실습 수행</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">③ 탐구 과제 수행</TableCell>
                            <TableCell>실험 결과 정리 및 적용, 자료 작성 등 소그룹 탐구 과제 진행</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">④ 전공 인터뷰</TableCell>
                            <TableCell>관련 전공자(의대생/공학도/연구원 등)와의 실시간 인터뷰 및 질의응답</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">⑤ 발표 및 리플렉션</TableCell>
                            <TableCell>소그룹 발표, 느낀 점 정리, 피드백 공유</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-bold mb-4">심화 프로그램 상세 예시</h4>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>체험분야</TableHead>
                            <TableHead>체험 내용 요약</TableHead>
                            <TableHead>소요 시간</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">물리학 (1)</TableCell>
                            <TableCell>
                              <p className="font-medium">MBL 장비와 물리도구를 활용한 뉴턴법칙 탐구</p>
                              <ul className="list-disc pl-5 text-sm mt-1">
                                <li>뉴턴 운동법칙 이론 및 실험</li>
                                <li>수레 실험으로 운동량 분석</li>
                                <li>인체 동작 측정 실습</li>
                              </ul>
                            </TableCell>
                            <TableCell>100분</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">물리학 (2)</TableCell>
                            <TableCell>
                              <p className="font-medium">전자기 원리 탐구 실험</p>
                              <ul className="list-disc pl-5 text-sm mt-1">
                                <li>전기와 자기 관계 실험</li>
                                <li>네오디움 자석 낙하 실험</li>
                                <li>전자기 유도 및 렌츠의 법칙 실험</li>
                              </ul>
                            </TableCell>
                            <TableCell>100분</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">물리학 (3)</TableCell>
                            <TableCell>
                              <p className="font-medium">눈으로 확인하는 소리와 빛의 파동</p>
                              <ul className="list-disc pl-5 text-sm mt-1">
                                <li>파형 및 수면파 실험</li>
                                <li>빛 굴절과 반사 실습</li>
                                <li>클라드니 장치 실험</li>
                              </ul>
                            </TableCell>
                            <TableCell>120분</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">화학 (1)</TableCell>
                            <TableCell>
                              <p className="font-medium">식품 속 폴리페놀류 검출 실험</p>
                              <ul className="list-disc pl-5 text-sm mt-1">
                                <li>분자 구조 이해 및 지시약 반응</li>
                                <li>페놀류 검출 및 정색반응 실험</li>
                                <li>시약 다루기 실습</li>
                              </ul>
                            </TableCell>
                            <TableCell>120분</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">화학 (2)</TableCell>
                            <TableCell>
                              <p className="font-medium">산화환원과 전자의 이동 탐구</p>
                              <ul className="list-disc pl-5 text-sm mt-1">
                                <li>중화반응 및 산염기 탐색</li>
                                <li>앙금 생성과 색 변화 실험</li>
                                <li>연료전지 실험</li>
                              </ul>
                            </TableCell>
                            <TableCell>120분</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">생명공학 (1)</TableCell>
                            <TableCell>
                              <p className="font-medium">현미경 속 표본 제작과 관찰</p>
                              <ul className="list-disc pl-5 text-sm mt-1">
                                <li>세포 염색 및 슬라이드 제작</li>
                                <li>스마트폰 현미경 활용 관찰</li>
                                <li>관찰물 촬영 실습</li>
                              </ul>
                            </TableCell>
                            <TableCell>120분</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">생명공학 (2)</TableCell>
                            <TableCell>
                              <p className="font-medium">DNA 구조 이해 및 plasmid DNA 추출</p>
                              <ul className="list-disc pl-5 text-sm mt-1">
                                <li>DNA 및 염색체 구조 이해</li>
                                <li>플라스미드 DNA 추출</li>
                                <li>전기영동으로 분석 실험</li>
                              </ul>
                            </TableCell>
                            <TableCell>120분</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">생명공학 (3)</TableCell>
                            <TableCell>
                              <p className="font-medium">과학수사와 유전자 감식 실험</p>
                              <ul className="list-disc pl-5 text-sm mt-1">
                                <li>지문 분석, 루미놀 반응</li>
                                <li>몽타주 활용 수사 시뮬레이션</li>
                                <li>PCR 유전자 감식 실습</li>
                              </ul>
                            </TableCell>
                            <TableCell>120분</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">의학·수의학·건강 분야</TableCell>
                            <TableCell>
                              <p className="font-medium">의학기기 탐구 및 건강 체크 실습</p>
                              <ul className="list-disc pl-5 text-sm mt-1">
                                <li>산소포화도·폐활량 측정</li>
                                <li>심전도, 초음파 활용 실험</li>
                                <li>인바디, 모세혈관 관찰</li>
                              </ul>
                            </TableCell>
                            <TableCell>120분</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">4차 산업 분야</TableCell>
                            <TableCell>
                              <p className="font-medium">친환경에너지와 에너지 하베스팅 실험</p>
                              <ul className="list-disc pl-5 text-sm mt-1">
                                <li>태양전지, 열전소자, 압전소자 실습</li>
                                <li>에너지 변환 구조물 설계</li>
                              </ul>
                            </TableCell>
                            <TableCell>120분</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-4">운영 안내</h4>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>구분</TableHead>
                            <TableHead>내용</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">대상</TableCell>
                            <TableCell>중학생(자유학기제), 동아리/특화반 단체 신청 가능</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">참가비</TableCell>
                            <TableCell>1인당 35,000원</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">소요 시간</TableCell>
                            <TableCell>약 150분 (심화 실험+과제+발표 포함)</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">신청 방식</TableCell>
                            <TableCell>전화 예약 후 일정 및 주제 조율 (※ 최소 15명 이상 단체 구성)</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">운영 요일</TableCell>
                            <TableCell>화요일 ~ 일요일 (오전 9:30 ~ 오후 5:00)</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">장소 안내</TableCell>
                            <TableCell>미리캠퍼스 센터 또는 출장형 운영 가능</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* 인문사회융합탐구활동 */}
      <section id="humanities-exploration" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-yellow-500 text-white text-3xl font-bold w-16 h-16 rounded-full flex items-center justify-center">
                02
              </div>
              <h2 className="text-3xl font-bold">인문사회융합탐구활동</h2>
            </div>

            <div className="bg-yellow-50 p-8 rounded-xl shadow-sm mb-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-yellow-600 mb-2">
                  자체 제작 창의 보드게임 기반 인문계열 탐구활동
                </h3>
                <p className="text-xl">
                  학생 스스로 사고하고 결정하며 배우는 경영 창업, 금융 투자, 지속가능한발전목표(SDGs) 교육
                </p>
              </div>

              <div className="mb-8">
                <p className="text-lg leading-relaxed mb-4">
                  <span className="font-bold">"놀이가 아닌 학습으로, 체험이 아닌 탐구로"</span>
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  미리캠퍼스의 인문,사회,경상계열 보드게임 프로그램은 교과 연계형 체험 중심 수업입니다.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  창업·경제·금융·환경 등 실생활과 밀접한 주제를 보드게임으로 시뮬레이션하며, 진로역량, 문제해결력,
                  의사결정력을 함께 길러주는 자기주도형 학습 모델입니다.
                </p>
                <p className="text-lg leading-relaxed">
                  2022 개정 교육과정과 연계된 개념을 쉽게 이해하고, 실전 상황에서 전략적으로 사고하는 과정 속에서 학생의
                  진로 방향을 스스로 설계합니다.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg mb-8">
                <h4 className="text-xl font-bold mb-4">프로그램 개요</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-medium mb-2">프로그램명</p>
                    <p>인문사회융합탐구활동</p>
                  </div>
                  <div>
                    <p className="font-medium mb-2">대상</p>
                    <p>
                      중학교 자유학기제 진로체험활동
                      <br />
                      일반고등학교 창의체험활동 (자율활동, 동아리활동, 진로체험활동)
                    </p>
                  </div>
                  <div>
                    <p className="font-medium mb-2">운영 방식</p>
                    <p>전공별 실험 집중 체험 + 전공 과제 수행 + 전공자(현직자/대학생) 인터뷰</p>
                  </div>
                  <div>
                    <p className="font-medium mb-2">구성 특징</p>
                    <p>문제 해결 중심의 실습, 전공 발표 및 결과 공유 포함</p>
                  </div>
                  <div>
                    <p className="font-medium mb-2">기대 효과</p>
                    <p>자기주도적 탐색 역량, 전공 이해도, 진로 몰입 경험 강화</p>
                  </div>
                </div>
              </div>
            </div>

            <Tabs defaultValue="middle" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="middle" className="text-lg py-3">
                  중학교 프로그램
                </TabsTrigger>
                <TabsTrigger value="high" className="text-lg py-3">
                  고등학교 프로그램
                </TabsTrigger>
              </TabsList>

              <TabsContent value="middle">
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold mb-6">중학교 인문사회융합탐구활동</h3>

                  <div className="mb-8">
                    <h4 className="text-xl font-bold mb-4">중학교 프로그램 구성</h4>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>보드게임 유형</TableHead>
                            <TableHead>연계 교과</TableHead>
                            <TableHead>관련 단원 (2022 교육과정 기준)</TableHead>
                            <TableHead>함양 역량</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium" rowSpan={2}>
                              경영 창업 보드게임
                            </TableCell>
                            <TableCell>사회</TableCell>
                            <TableCell>경제생활과 합리적 선택</TableCell>
                            <TableCell>의사결정력, 문제해결력</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>기술·가정</TableCell>
                            <TableCell>생활과 자산관리, 진로 탐색</TableCell>
                            <TableCell>자기관리역량, 창의력</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium" rowSpan={2}>
                              금융 투자 보드게임
                            </TableCell>
                            <TableCell>사회</TableCell>
                            <TableCell>금융의 필요성과 역할, 시장의 원리</TableCell>
                            <TableCell>수리적 사고력, 경제이해</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>수학</TableCell>
                            <TableCell>비와 비율, 자료의 정리</TableCell>
                            <TableCell>분석력, 자료해석</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium" rowSpan={2}>
                              SDGs 보드게임
                            </TableCell>
                            <TableCell>과학</TableCell>
                            <TableCell>인간 활동과 환경 변화</TableCell>
                            <TableCell>환경감수성, 과학탐구</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>도덕</TableCell>
                            <TableCell>세계 시민과 지속 가능한 삶</TableCell>
                            <TableCell>윤리적 책임, 공동체 의식</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-bold mb-4">중학교 운영 흐름 및 수업 구성</h4>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>차시</TableHead>
                            <TableHead>활동명</TableHead>
                            <TableHead>내용 및 활동 내용</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">1차시</TableCell>
                            <TableCell>오리엔테이션 & 핵심개념 이해</TableCell>
                            <TableCell>주제별(경제/환경/금융) 핵심 개념 정리, 게임 룰 학습, 역할 설정</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">2차시</TableCell>
                            <TableCell>실전 게임 탐구</TableCell>
                            <TableCell>
                              보드게임 실전 운영(예: 창업의 정석, Go Goals!) / 탐구카드, 미션 수행 / 자원관리 및
                              의사결정
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">3차시</TableCell>
                            <TableCell>결과 공유 & 리플렉션</TableCell>
                            <TableCell>
                              결과 발표 및 전략 분석 / 워크북 작성: "내가 오늘 배운 것" / 교사 피드백 및 확장 질문 활동
                              진행
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="high">
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold mb-6">고등학교 인문사회융합탐구활동</h3>

                  <div className="mb-8">
                    <h4 className="text-xl font-bold mb-4">고등학교 프로그램 구성</h4>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>보드게임 유형</TableHead>
                            <TableHead>연계 교과</TableHead>
                            <TableHead>관련 단원 (2022 교육과정 기준)</TableHead>
                            <TableHead>함양 역량</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium" rowSpan={3}>
                              경영 창업 보드게임
                            </TableCell>
                            <TableCell>통합사회</TableCell>
                            <TableCell>경제생활과 합리적 선택</TableCell>
                            <TableCell>창의적 문제해결, 진로탐색</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>일반사회</TableCell>
                            <TableCell>기업 경영과 창업</TableCell>
                            <TableCell>경제이해력, 기획력</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>기술·가정</TableCell>
                            <TableCell>진로설계와 직업 탐색</TableCell>
                            <TableCell>실천력, 자기이해</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium" rowSpan={3}>
                              금융 투자 보드게임
                            </TableCell>
                            <TableCell>경제</TableCell>
                            <TableCell>금융과 자산 관리, 투자</TableCell>
                            <TableCell>금융소양, 미래설계</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>수학</TableCell>
                            <TableCell>통계, 확률, 함수 그래프</TableCell>
                            <TableCell>수리논리력, 데이터 분석</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>생활과 윤리</TableCell>
                            <TableCell>합리적 소비와 윤리적 삶</TableCell>
                            <TableCell>가치판단력, 자기조절</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium" rowSpan={3}>
                              SDGs 보드게임
                            </TableCell>
                            <TableCell>통합과학</TableCell>
                            <TableCell>환경과 에너지, 지속가능성</TableCell>
                            <TableCell>과학적 사고력, 생태감수성</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>지구과학</TableCell>
                            <TableCell>기후 변화, 자원 문제</TableCell>
                            <TableCell>분석력, 문제의식</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>윤리와 사상</TableCell>
                            <TableCell>지속 가능한 삶과 인간의 역할</TableCell>
                            <TableCell>비판적 사고, 책임윤리</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-bold mb-4">고등학교 운영 흐름 및 수업 구성</h4>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>차시</TableHead>
                            <TableHead>활동명</TableHead>
                            <TableHead>내용 및 활동 내용</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">1차시</TableCell>
                            <TableCell>주제 강의 & 사전 브리핑</TableCell>
                            <TableCell>
                              창업/금융/환경 중 택 1 주제 강의 / 교과 개념 정리 / 게임 룰 이해 및 팀 빌딩
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">2차시</TableCell>
                            <TableCell>핵심 게임 탐구 활동</TableCell>
                            <TableCell>
                              보드게임 실전 플레이 / 투자·생산·전략 시뮬레이션 / 탐구카드 기반 과제 수행
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">3차시</TableCell>
                            <TableCell>분석 정리 & 탐구 보고서 작성</TableCell>
                            <TableCell>
                              게임 결과 분석표 작성 / '나의 선택과 전략' 글쓰기 / 발표 및 토론 / 교과 연계 확장 활동
                              진행
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-bold mb-4">운영 방법 및 안내</h4>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>구분</TableHead>
                            <TableHead>중학교 프로그램</TableHead>
                            <TableHead>고등학교 프로그램</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">대상</TableCell>
                            <TableCell>중학생 (1~3학년, 학급 단위 또는 학년 단위 운영)</TableCell>
                            <TableCell>고등학생 (전 학년 가능, 진로탐색 또는 체험활동 시 활용)</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">회차</TableCell>
                            <TableCell>3차시 내외 (협의 가능)</TableCell>
                            <TableCell>3차시 내외 (협의 가능)</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">참가비</TableCell>
                            <TableCell>1인당 25,000원 (20명 이상 지불 보증)</TableCell>
                            <TableCell>1인당 25,000원 (20명 이상 지불 보증)</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">장소</TableCell>
                            <TableCell>학교 또는 미리캠퍼스 센터 방문형 운영 가능</TableCell>
                            <TableCell>동일</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">활용 가능 교과 활동 시간</TableCell>
                            <TableCell>자유학기 활동, 창체 시간, 주제선택 활동 등 활용</TableCell>
                            <TableCell>진로집중학기, 고교학점제 연계 탐구 활동 활용 가능</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">진행 인원 구성</TableCell>
                            <TableCell>보드게임 전문 강사 + 보조진행자 팀티칭</TableCell>
                            <TableCell>동일</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-bold mb-4">실제 학교 운영 예시</h4>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>차수</TableHead>
                            <TableHead>구분</TableHead>
                            <TableHead>1학년 (13개반)</TableHead>
                            <TableHead>2학년 (13개반)</TableHead>
                            <TableHead>3학년 (12개반)</TableHead>
                            <TableHead>비고</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium" rowSpan={6}>
                              1
                            </TableCell>
                            <TableCell className="font-medium">1</TableCell>
                            <TableCell>나만의 향수 만들기</TableCell>
                            <TableCell>나만의 향수 만들기</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">2</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell>탐구활동보고서활동 포함 가능</TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">3</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell>탐구활동보고서활동 포함 가능</TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">4</TableCell>
                            <TableCell>창업 경영 보드게임 활동</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">5</TableCell>
                            <TableCell></TableCell>
                            <TableCell>탐구활동보고서활동 포함 가능</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">6</TableCell>
                            <TableCell></TableCell>
                            <TableCell>탐구활동보고서활동 포함 가능</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium" rowSpan={1}>
                              2
                            </TableCell>
                            <TableCell className="font-medium">1</TableCell>
                            <TableCell>SDGs(지속가능한발전목표) 보드게임활동+탐구활동</TableCell>
                            <TableCell>주제탐구활동 사전 체험(자기주도학습)</TableCell>
                            <TableCell></TableCell>
                            <TableCell>고교학점제, 진로/전공 탐색 활동</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-4">예약 및 상담 안내</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>전화번호: 000-0000-0000</li>
                      <li>운영 시간: 화요일~일요일, 오전 9:30 ~ 오후 5:00</li>
                      <li>예약 필수: 최소 1주일 전 전화 예약 필요</li>
                      <li>장소: 학교 또는 방문형/센터형 선택 가능</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* 주제탐구활동 */}
      <section id="thematic-exploration" className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-green-500 text-white text-3xl font-bold w-16 h-16 rounded-full flex items-center justify-center">
                03
              </div>
              <h2 className="text-3xl font-bold">주제탐구활동</h2>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm mb-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-green-600 mb-2">프로젝트형 탐구 수업</h3>
                <p className="text-xl font-medium">주제탐구활동은 단순한 소논문 활동이 아닙니다</p>
              </div>

              <div className="mb-8">
                <p className="text-lg leading-relaxed mb-4">
                  미리캠퍼스의 주제탐구 활동은 단순한 리포트나 소논문 쓰기 활동이 아닙니다. 학생 스스로 질문을 설정하고,
                  탐구를 설계하며, 직접 실험과 자료 분석을 수행하는 R&E 기반의 '탐구 중심 수업'입니다.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  이과정에서 (주)미리캠퍼스만의 차별성은 프로젝트형 탐구수업을 활용해 입시에 성공한 경험을 가진 전공
                  강사들을 활용하여 학생 개개인의 생활기록부를 분석하고 교과와 진로를 연결한 입시 맞춤형 프로그램을
                  진행할 뿐 아니라 실제 사회 문제와 연계된 탐구 주제를 통해 차별화된 활동 결과물(탐구보고서)을
                  도출합니다.
                </p>
                <p className="text-lg leading-relaxed">
                  과학실험, 사회탐구활동, 독서프로그램 등 탐구력을 키우기 위한 활동으로 구성됩니다.
                </p>
              </div>
            </div>

            <Tabs defaultValue="level1" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="level1" className="text-lg py-3">
                  레벨1 프로그램
                </TabsTrigger>
                <TabsTrigger value="level2" className="text-lg py-3">
                  레벨2 프로그램
                </TabsTrigger>
              </TabsList>

              <TabsContent value="level1">
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold mb-6">레벨1 주제탐구활동</h3>

                  <div className="mb-8">
                    <h4 className="text-xl font-bold mb-4">프로그램 개요</h4>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>구분</TableHead>
                            <TableHead>주요 내용</TableHead>
                            <TableHead>대상</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">레벨1</TableCell>
                            <TableCell>
                              <ul className="list-disc pl-5">
                                <li>2028 대입과 학생부 종합전형이해</li>
                                <li>자기탐색을 기반으로 한 대학/학과/직업 탐색 및 진로/학과 보고서 작성 및 발표</li>
                                <li>탐구력을 키우기 위한 전공분야별 주제탐구활동 보고서 작성</li>
                                <li>과목선택 실습 및 주제탐구 발표</li>
                              </ul>
                            </TableCell>
                            <TableCell>
                              중학생(일반)
                              <br />
                              고1
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-bold mb-4">운영 예시</h4>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>차시</TableHead>
                            <TableHead>활동내용</TableHead>
                            <TableHead>비고</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">1</TableCell>
                            <TableCell>
                              <p className="font-medium">대입과 학생부종합전형의 이해</p>
                              <ul className="list-disc pl-5 text-sm mt-1">
                                <li>대입 과정 및 전략 수립 과정 설명</li>
                                <li>학교생활기록부와 학종에서의 R&E활동의 중요성 설명</li>
                              </ul>
                              <p className="font-medium mt-2">자기이해를 기반으로 한 진로탐색 및 주제선정 고민</p>
                              <ul className="list-disc pl-5 text-sm mt-1">
                                <li>강사의 학교생활기록부 실제 사례제공</li>
                                <li>개인 학교생활기록부 컨셉 파악 및 선정</li>
                              </ul>
                            </TableCell>
                            <TableCell>
                              노트북지참
                              <br />
                              진로검사
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">2</TableCell>
                            <TableCell>
                              <p className="font-medium">논문 사이트 활용하는 방법</p>
                              <p className="font-medium mt-2">
                                팀별 또는 개별 주제 3개 이상 후보 주제 선정, 브레인스토밍
                              </p>
                              <ul className="list-disc pl-5 text-sm mt-1">
                                <li>최신 논문, 이슈 등 자료 참고하여 모색</li>
                              </ul>
                            </TableCell>
                            <TableCell>주제선정</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">3</TableCell>
                            <TableCell>
                              <p className="font-medium">주제탐구활동</p>
                              <ul className="list-disc pl-5 text-sm mt-1">
                                <li>서론, 본론, 결론 흐름 잡기</li>
                                <li>탐구 과정에서 필요한 자료 파악</li>
                                <li>탐구 주제 및 목차 재정비</li>
                              </ul>
                            </TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">4</TableCell>
                            <TableCell>
                              <p className="font-medium">주제탐구활동</p>
                              <ul className="list-disc pl-5 text-sm mt-1">
                                <li>자료 조사 및 자료 정리</li>
                                <li>본문 작성 및 서론, 본론, 결론 흐름에 맞게 정리</li>
                              </ul>
                            </TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">5</TableCell>
                            <TableCell>
                              <p className="font-medium">주제탐구활동</p>
                              <ul className="list-disc pl-5 text-sm mt-1">
                                <li>자료 조사 및 자료 정리</li>
                                <li>본문 작성 및 서론, 본론, 결론 흐름에 맞게 정리</li>
                              </ul>
                            </TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">6</TableCell>
                            <TableCell>
                              <p className="font-medium">주제탐구활동</p>
                              <ul className="list-disc pl-5 text-sm mt-1">
                                <li>PPT 제작 완료</li>
                                <li>PPT 피드백</li>
                                <li>요약 정리(자기평가서) 작성</li>
                              </ul>
                            </TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">7</TableCell>
                            <TableCell>
                              <p className="font-medium">주제탐구활동</p>
                              <ul className="list-disc pl-5 text-sm mt-1">
                                <li>조별 PPT 발표</li>
                                <li>자기평가 및 동료평가</li>
                                <li>학교생활디자인</li>
                              </ul>
                            </TableCell>
                            <TableCell>교육과정선택실습</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="level2">
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold mb-6">레벨2 주제탐구활동</h3>

                  <div className="mb-8">
                    <h4 className="text-xl font-bold mb-4">프로그램 개요</h4>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>구분</TableHead>
                            <TableHead>주요 내용</TableHead>
                            <TableHead>대상</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">레벨2</TableCell>
                            <TableCell>
                              <ul className="list-disc pl-5">
                                <li>내신대비 학습 전략 수립/ 학습코칭 및 자기주도학습 방향 설정</li>
                                <li>학생 개인별 학기 중 교과활동 방향성 찾기 – 개인 전공분야 맞춤형</li>
                                <li>교과 수행평가 보고서 및 후속활동 독서 보고서 작성 방법 익히기</li>
                                <li>학생부 스스로 디자인하기/자기평가서 작성방법 익히기</li>
                                <li>전공분야별 주제탐구 활동 심화</li>
                              </ul>
                            </TableCell>
                            <TableCell>
                              중학생(특목)
                              <br />
                              고2
                              <br />
                              고3
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-bold mb-4">운영 예시</h4>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>차시</TableHead>
                            <TableHead>활동내용</TableHead>
                            <TableHead>비고</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">1</TableCell>
                            <TableCell>
                              <p className="font-medium">대입과 학생부종합전형의 이해</p>
                              <ul className="list-disc pl-5 text-sm mt-1">
                                <li>대입 과정 및 전략 수립 과정 설명</li>
                                <li>학교생활기록부와 학종에서의 R&E활동의 중요성 설명</li>
                              </ul>
                              <p className="font-medium mt-2">내신대비 학습 전략 수립</p>
                              <ul className="list-disc pl-5 text-sm mt-1">
                                <li>학습코칭 및 자기주도학습 방향 설정</li>
                                <li>학생 개인별 학기 중 교과활동 방향성 찾기 (개인 전공분야 맞춤형)</li>
                              </ul>
                            </TableCell>
                            <TableCell>노트북지참</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">2</TableCell>
                            <TableCell>
                              <p className="font-medium">논문 사이트 활용하는 방법</p>
                              <p className="font-medium mt-2">
                                팀별 또는 개별 주제 3개 이상 후보 주제 선정, 브레인스토밍
                              </p>
                              <ul className="list-disc pl-5 text-sm mt-1">
                                <li>최신 논문, 이슈 등 자료 참고하여 모색</li>
                              </ul>
                            </TableCell>
                            <TableCell>주제선정</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">3</TableCell>
                            <TableCell>
                              <p className="font-medium">주제탐구활동 심화</p>
                              <ul className="list-disc pl-5 text-sm mt-1">
                                <li>서론, 본론, 결론 흐름 잡기</li>
                                <li>탐구 과정에서 필요한 자료 파악</li>
                                <li>탐구 주제 및 목차 재정비</li>
                              </ul>
                            </TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">4</TableCell>
                            <TableCell>
                              <p className="font-medium">주제탐구활동 심화</p>
                              <ul className="list-disc pl-5 text-sm mt-1">
                                <li>자료 조사 및 자료 정리</li>
                                <li>본문 작성 및 서론, 본론, 결론 흐름에 맞게 정리</li>
                              </ul>
                            </TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">5</TableCell>
                            <TableCell>
                              <p className="font-medium">주제탐구활동 심화</p>
                              <ul className="list-disc pl-5 text-sm mt-1">
                                <li>자료 조사 및 자료 정리</li>
                                <li>본문 작성 및 서론, 본론, 결론 흐름에 맞게 정리</li>
                              </ul>
                              <p className="font-medium mt-2">
                                교과 수행평가 보고서 및 후속활동 독서 보고서 작성 방법 익히기
                              </p>
                              <p className="font-medium mt-2">학생부 스스로 디자인하기/자기평가서 작성방법 익히기</p>
                              <p className="font-medium mt-2">전공분야별 주제탐구 활동 심화</p>
                            </TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">6</TableCell>
                            <TableCell>
                              <p className="font-medium">주제탐구활동 심화</p>
                              <ul className="list-disc pl-5 text-sm mt-1">
                                <li>PPT 제작 완료</li>
                                <li>PPT 피드백</li>
                                <li>요약 정리(자기평가서) 작성</li>
                              </ul>
                            </TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">7</TableCell>
                            <TableCell>
                              <p className="font-medium">주제탐구활동</p>
                              <ul className="list-disc pl-5 text-sm mt-1">
                                <li>조별 PPT 발표</li>
                                <li>자기평가서활동 완성</li>
                              </ul>
                            </TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">8</TableCell>
                            <TableCell>
                              <p className="font-medium">학생부 스스로 디자인하기</p>
                              <p className="font-medium mt-2">교과 수행평가 보고서</p>
                              <p className="font-medium mt-2">후속활동 독서 보고서 작성 방법 익히기</p>
                            </TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="bg-white p-8 rounded-xl shadow-sm mt-12">
              <h3 className="text-2xl font-bold mb-6">주제탐구 직영 강사 현황</h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>순번</TableHead>
                      <TableHead>분야</TableHead>
                      <TableHead>성명</TableHead>
                      <TableHead>소속</TableHead>
                      <TableHead>학과/부서</TableHead>
                      <TableHead>직위</TableHead>
                      <TableHead>전공</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>1</TableCell>
                      <TableCell>커리큘럼개발</TableCell>
                      <TableCell>정제원</TableCell>
                      <TableCell>숭의여고</TableCell>
                      <TableCell>EBS대표컨설턴트</TableCell>
                      <TableCell>고문</TableCell>
                      <TableCell>역사</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2</TableCell>
                      <TableCell>커리큘럼개발</TableCell>
                      <TableCell>박정준</TableCell>
                      <TableCell>대치학원</TableCell>
                      <TableCell></TableCell>
                      <TableCell>원장고문</TableCell>
                      <TableCell>국어국문</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>3</TableCell>
                      <TableCell>의생명</TableCell>
                      <TableCell>김동헌</TableCell>
                      <TableCell>부산대</TableCell>
                      <TableCell>의학과</TableCell>
                      <TableCell>대표강사</TableCell>
                      <TableCell>의학</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>4</TableCell>
                      <TableCell>의생명</TableCell>
                      <TableCell>윤태현</TableCell>
                      <TableCell>부산대</TableCell>
                      <TableCell>의학과</TableCell>
                      <TableCell>강사</TableCell>
                      <TableCell>의학</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>5</TableCell>
                      <TableCell>의생명</TableCell>
                      <TableCell>김채린</TableCell>
                      <TableCell>부산대</TableCell>
                      <TableCell>의학과</TableCell>
                      <TableCell>강사</TableCell>
                      <TableCell>의학</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>6</TableCell>
                      <TableCell>의생명</TableCell>
                      <TableCell>윤서인</TableCell>
                      <TableCell>부산대</TableCell>
                      <TableCell>의학과</TableCell>
                      <TableCell>강사</TableCell>
                      <TableCell>의학</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>7</TableCell>
                      <TableCell>의생명</TableCell>
                      <TableCell>장서원</TableCell>
                      <TableCell>부산대</TableCell>
                      <TableCell>의학과</TableCell>
                      <TableCell>강사</TableCell>
                      <TableCell>의학</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>8</TableCell>
                      <TableCell>경영</TableCell>
                      <TableCell>배정은</TableCell>
                      <TableCell>서울대</TableCell>
                      <TableCell>경영학석사</TableCell>
                      <TableCell>강사</TableCell>
                      <TableCell>병원경영</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>9</TableCell>
                      <TableCell>인문사회</TableCell>
                      <TableCell>김화성</TableCell>
                      <TableCell>부산대</TableCell>
                      <TableCell>교육심리</TableCell>
                      <TableCell>강사</TableCell>
                      <TableCell>교육심리</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>10</TableCell>
                      <TableCell>역사</TableCell>
                      <TableCell>곽희정</TableCell>
                      <TableCell>숙명여대</TableCell>
                      <TableCell>역사</TableCell>
                      <TableCell>강사</TableCell>
                      <TableCell>다문화</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>11</TableCell>
                      <TableCell>지리</TableCell>
                      <TableCell>현순안</TableCell>
                      <TableCell>경희대</TableCell>
                      <TableCell></TableCell>
                      <TableCell>교수강사</TableCell>
                      <TableCell>교육,지리</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>12</TableCell>
                      <TableCell>화학</TableCell>
                      <TableCell>김종복</TableCell>
                      <TableCell>효고현립대</TableCell>
                      <TableCell></TableCell>
                      <TableCell>교수강사</TableCell>
                      <TableCell>물질과학</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>13</TableCell>
                      <TableCell>약학</TableCell>
                      <TableCell>백진아</TableCell>
                      <TableCell>경성대</TableCell>
                      <TableCell>약학과</TableCell>
                      <TableCell>강사</TableCell>
                      <TableCell>약학</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>14</TableCell>
                      <TableCell>한의학</TableCell>
                      <TableCell>정지현</TableCell>
                      <TableCell>동의대</TableCell>
                      <TableCell>한의과</TableCell>
                      <TableCell>강사</TableCell>
                      <TableCell>동의대</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>15</TableCell>
                      <TableCell>바이오</TableCell>
                      <TableCell>조현제</TableCell>
                      <TableCell>식약청</TableCell>
                      <TableCell></TableCell>
                      <TableCell>교수강사</TableCell>
                      <TableCell>제약공정</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 문의 및 신청 섹션 */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">미리캠퍼스 교육 프로그램 신청</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            미리캠퍼스의 다양한 교육 프로그램에 참여하여 학생들의 잠재력을 발견하고 미래를 준비하세요.
            <br />
            아래 버튼을 통해 문의하시면 상세한 안내를 받으실 수 있습니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="text-lg bg-white text-primary hover:bg-gray-100">
              <Link href="/inquiry">교육 문의하기</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white/10">
              <Link href="/programs/camp">캠프 프로그램 보기</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
