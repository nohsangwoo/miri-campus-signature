"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, MapPin, Phone, Mail, ExternalLink } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import KoreaMap from "@/components/korea-map"

// 체험센터 데이터
const experienceCenters = {
  부산광역시: [
    {
      id: "pukyong",
      name: "부경대학교센터",
      location: "부산광역시 남구 신선로 365",
      specialty: "수산해양",
      phone: "1555-1157",
      email: "campus-tour@naver.com",
      description:
        "수산해양 분야 특화 체험 프로그램을 운영하는 부경대학교 센터입니다. 해양 생물 관찰, 해양 환경 탐구, 수산물 가공 체험 등 다양한 체험 활동을 제공합니다. 특히 해양 생태계와 수산업에 관심 있는 학생들에게 실질적인 경험을 제공합니다.",
      image: "/centers/pukyong.png",
      logo: "/logos/pukyong-logo.png",
      programs: ["해양생물 관찰", "수산물 가공 체험", "해양환경 탐구", "해양 로봇 체험"],
      mapUrl: "https://maps.google.com/?q=부산광역시 남구 신선로 365",
      availableDates: ["월요일-금요일 (9:00-17:00)", "토요일 (9:00-12:00)"],
      capacity: "1회 최대 30명",
      targetAge: "초등학교 고학년-고등학생",
    },
    {
      id: "kyungsung",
      name: "경성대학교센터",
      location: "부산광역시 남구 수영로 309",
      specialty: "바이오의생명",
      phone: "1555-1157",
      email: "campus-tour@naver.com",
      description:
        "바이오의생명 분야 특화 체험 프로그램을 운영하는 경성대학교 센터입니다. 생명과학 실험, 의학 체험, 바이오 연구 탐방 등 다양한 활동을 제공합니다. 미래 의학자와 생명과학자를 꿈꾸는 학생들에게 실험 기회를 제공합니다.",
      image: "/centers/kyungsung.png",
      logo: "/logos/kyungsung-logo.png",
      programs: ["생명과학 실험", "의학 체험", "바이오 연구 탐방", "현미경 관찰 실습"],
      mapUrl: "https://maps.google.com/?q=부산광역시 남구 수영로 309",
      availableDates: ["화요일-금요일 (10:00-16:00)"],
      capacity: "1회 최대 25명",
      targetAge: "중학생-고등학생",
    },
    {
      id: "pusan",
      name: "부산대학교센터",
      location: "경상남도 양산시 부산대학로 49",
      specialty: "의생명,인문사회",
      phone: "1555-1157",
      email: "campus-tour@naver.com",
      description:
        "의생명 및 인문사회 분야 특화 체험 프로그램을 운영하는 부산대학교 센터입니다. 의학 체험, 인문학 탐구, 사회과학 연구 등 다양한 활동을 제공합니다. 종합대학의 특성을 살려 다양한 학문 분야를 경험할 수 있습니다.",
      image: "/centers/pusan.png",
      logo: "/logos/pusan-logo.png",
      programs: ["의학 체험", "인문학 탐구", "사회과학 연구", "대학 캠퍼스 투어"],
      mapUrl: "https://maps.google.com/?q=경상남도 양산시 부산대학로 49",
      availableDates: ["월요일-목요일 (9:30-16:30)"],
      capacity: "1회 최대 40명",
      targetAge: "중학생-고등학생",
    },
    {
      id: "maritime",
      name: "해양대학교센터",
      location: "부산시 영도구 태종로 727",
      specialty: "국제,해양",
      phone: "1555-1157",
      email: "campus-tour@naver.com",
      description:
        "국제 및 해양 분야 특화 체험 프로그램을 운영하는 해양대학교 센터입니다. 선박 운항 체험, 해양 탐사, 국제 물류 체험 등 다양한 활동을 제공합니다. 해양 산업과 국제 무역에 관심 있는 학생들에게 특화된 프로그램을 제공합니다.",
      image: "/centers/maritime.png",
      logo: "/logos/maritime-logo.png",
      programs: ["선박 운항 체험", "해양 탐사", "국제 물류 체험", "해양 안전 교육"],
      mapUrl: "https://maps.google.com/?q=부산시 영도구 태종로 727",
      availableDates: ["화요일-금요일 (10:00-17:00)", "토요일 (10:00-15:00, 격주)"],
      capacity: "1회 최대 35명",
      targetAge: "초등학교 고학년-고등학생",
    },
  ],
  서울특별시: [
    {
      id: "seoul-science",
      name: "서울과학기술센터",
      location: "서울특별시 노원구 공릉로 232",
      specialty: "과학기술",
      phone: "1555-1158",
      email: "campus-tour@naver.com",
      description:
        "과학기술 분야 특화 체험 프로그램을 운영하는 서울과학기술센터입니다. 로봇 공학, 신소재 개발 등 다양한 체험 활동을 제공합니다.",
      image: "/placeholder.svg?key=seoul-science",
      logo: "/placeholder.svg?key=seoul-science-logo",
      programs: ["로봇 공학 체험", "신소재 개발 실습", "과학기술 탐구"],
      mapUrl: "https://maps.google.com/?q=서울특별시 노원구 공릉로 232",
    },
  ],
  대전광역시: [
    {
      id: "kaist",
      name: "KAIST 체험센터",
      location: "대전광역시 유성구 대학로 291",
      specialty: "첨단과학",
      phone: "1555-1159",
      email: "campus-tour@naver.com",
      description:
        "첨단과학 분야 특화 체험 프로그램을 운영하는 KAIST 체험센터입니다. 인공지능, 나노기술 등 다양한 체험 활동을 제공합니다.",
      image: "/placeholder.svg?key=kaist",
      logo: "/placeholder.svg?key=kaist-logo",
      programs: ["인공지능 체험", "나노기술 탐구", "첨단과학 실험"],
      mapUrl: "https://maps.google.com/?q=대전광역시 유성구 대학로 291",
    },
  ],
}

// 지역별 색상 매핑
const regionColors: Record<string, string> = {
  서울특별시: "#FFD1DC", // 연한 핑크
  부산광역시: "#FFECB3", // 연한 황색
  대구광역시: "#E1F5FE", // 연한 하늘색
  인천광역시: "#DCEDC8", // 연한 연두색
  광주광역시: "#F8BBD0", // 연한 분홍색
  대전광역시: "#D1C4E9", // 연한 보라색
  울산광역시: "#B3E5FC", // 연한 파랑색
  세종특별자치시: "#CFD8DC", // 연한 회색
  경기도: "#C8E6C9", // 연한 초록색
  강원특별자치도: "#B2DFDB", // 연한 청록색
  충청북도: "#BBDEFB", // 연한 남색
  충청남도: "#D7CCC8", // 연한 갈색
  전라북도: "#FFF9C4", // 연한 노란색
  전라남도: "#C5CAE9", // 연한 인디고색
  경상북도: "#FFE0B2", // 연한 주황색
  경상남도: "#F0F4C3", // 연한 라임색
  제주특별자치도: "#B39DDB", // 연한 자주색
}

export default function FieldExperienceCentersPage() {
  const [selectedCenter, setSelectedCenter] = useState<string | null>(null)
  const [selectedRegion, setSelectedRegion] = useState<string | null>("부산광역시")
  const [isListVisible, setIsListVisible] = useState(false)

  useEffect(() => {
    // 컴포넌트 마운트 시 부산 지역 선택 상태로 시작
    setIsListVisible(true)
  }, [])

  const handleCenterClick = (centerId: string) => {
    setSelectedCenter(centerId)

    // 선택된 센터로 스크롤
    const element = document.getElementById(`center-${centerId}`)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  // 선택된 센터 정보 찾기
  const findCenterById = (id: string) => {
    for (const region in experienceCenters) {
      const center = experienceCenters[region as keyof typeof experienceCenters].find((c) => c.id === id)
      if (center) return center
    }
    return null
  }

  const selectedCenterInfo = selectedCenter ? findCenterById(selectedCenter) : null

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
            <span className="text-primary font-medium">현장체험센터안내</span>
          </div>
        </div>
      </div>

      {/* 페이지 제목 */}
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold">현장체험센터안내</h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
          미리캠퍼스와 함께하는 다양한 현장체험센터를 소개합니다
        </p>
      </div>

      {/* 지도 섹션 */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">지역별 현장체험센터</h2>
            <p className="text-lg text-center mb-10">지도에서 지역을 선택하여 해당 지역의 현장체험센터를 확인하세요</p>

            <KoreaMap sellers={experienceCenters} onSellerClick={handleCenterClick} />
          </div>
        </div>
      </section>

      {/* 센터 목록 섹션 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">현장체험센터 목록</h2>

          <Tabs defaultValue="부산광역시" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="부산광역시" className="text-lg py-3">
                부산광역시
              </TabsTrigger>
              <TabsTrigger value="서울특별시" className="text-lg py-3">
                서울특별시
              </TabsTrigger>
              <TabsTrigger value="대전광역시" className="text-lg py-3">
                대전광역시
              </TabsTrigger>
            </TabsList>

            {Object.keys(experienceCenters).map((region) => (
              <TabsContent key={region} value={region} className="space-y-8">
                {experienceCenters[region as keyof typeof experienceCenters].map((center) => (
                  <div
                    key={center.id}
                    id={`center-${center.id}`}
                    className={`bg-white rounded-xl overflow-hidden shadow-md transition-all ${
                      selectedCenter === center.id ? "ring-2 ring-primary" : ""
                    }`}
                  >
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="relative aspect-video md:aspect-square overflow-hidden">
                        <Image
                          src={center.image || "/placeholder.svg"}
                          alt={center.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6 md:col-span-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-2xl font-bold mb-2">{center.name}</h3>
                            <p className="text-primary font-medium mb-4">{center.specialty} 분야 특화</p>
                          </div>
                          {center.logo && (
                            <div className="w-16 h-16 relative flex-shrink-0">
                              <Image
                                src={center.logo || "/placeholder.svg"}
                                alt={`${center.name} 로고`}
                                fill
                                className="object-contain"
                              />
                            </div>
                          )}
                        </div>

                        <p className="text-gray-600 mb-6">{center.description}</p>

                        <div className="space-y-3 mb-6">
                          <div className="flex items-start">
                            <MapPin className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                            <span>{center.location}</span>
                          </div>
                          <div className="flex items-start">
                            <Phone className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                            <span>{center.phone}</span>
                          </div>
                          <div className="flex items-start">
                            <Mail className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                            <span>{center.email}</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          <div>
                            <h4 className="font-medium mb-2">운영 시간</h4>
                            <ul className="text-sm space-y-1">
                              {center.availableDates?.map((date, idx) => (
                                <li key={idx} className="text-gray-600">
                                  {date}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">수용 인원 및 대상</h4>
                            <p className="text-sm text-gray-600">{center.capacity}</p>
                            <p className="text-sm text-gray-600">{center.targetAge}</p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {center.programs.map((program, index) => (
                            <span
                              key={index}
                              className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {program}
                            </span>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-3">
                          <Button variant="outline" asChild>
                            <Link href={center.mapUrl} target="_blank" rel="noopener noreferrer">
                              <MapPin className="h-4 w-4 mr-2" />
                              지도 보기
                            </Link>
                          </Button>
                          <Button asChild>
                            <Link href={`/field-experience/programs?center=${center.id}`}>
                              <ExternalLink className="h-4 w-4 mr-2" />
                              프로그램 보기
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* 센터 신청 안내 */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">현장체험 신청 안내</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            미리캠퍼스 현장체험 프로그램은 학교 및 단체 단위로 신청 가능합니다.
            <br />
            아래 버튼을 통해 프로그램을 확인하고 신청해보세요.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="text-lg">
              <Link href="/field-experience/programs">프로그램 알아보기</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              <Link href="/inquiry">문의하기</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
