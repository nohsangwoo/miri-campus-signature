import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function HistoryPage() {
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
            <Link href="/about" className="hover:text-primary">
              회사소개
            </Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-primary font-medium">회사연혁</span>
          </div>
        </div>
      </div>

      {/* 페이지 제목 */}
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold">회사연혁</h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
          미리캠퍼스가 걸어온 길과 함께 만들어갈 미래
        </p>
      </div>

      {/* 연혁 소개 */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">미래 교육의 새로운 길을 열어갑니다</h2>
            <p className="text-xl leading-relaxed">
              미리캠퍼스는 2023년 설립 이후 지속적인 혁신과 성장을 통해 교육의 새로운 패러다임을 만들어가고 있습니다.
              <br />
              아이들의 잠재력을 발견하고 미래를 준비하는 교육 여정에 함께해 주셔서 감사합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 타임라인 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {historyItems.map((year, yearIndex) => (
              <div key={yearIndex} className="mb-20 last:mb-0">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4">
                    <div className="sticky top-20 mb-8 md:mb-0">
                      <h3 className="text-5xl font-bold text-primary">{year.year}</h3>
                      {year.subtitle && <p className="mt-2 text-xl text-gray-500">{year.subtitle}</p>}
                    </div>
                  </div>
                  <div className="md:w-3/4 md:pl-12 relative">
                    <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gray-200"></div>

                    <div className="space-y-12">
                      {year.events.map((event, eventIndex) => (
                        <div key={eventIndex} className="relative">
                          <div className="hidden md:block absolute -left-6 top-2 w-3 h-3 rounded-full bg-primary"></div>

                          <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                            <h4 className="text-2xl font-bold mb-4">{event.title}</h4>
                            <div className="space-y-4">
                              {event.descriptions.map((desc, descIndex) => (
                                <p key={descIndex} className="text-lg leading-relaxed">
                                  {desc}
                                </p>
                              ))}
                            </div>

                            {event.image && (
                              <div className="mt-6 rounded-lg overflow-hidden">
                                <Image
                                  src={event.image || "/placeholder.svg"}
                                  alt={event.title}
                                  width={800}
                                  height={400}
                                  className="w-full object-cover"
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 미래 비전 */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">미리캠퍼스의 미래</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            앞으로도 미리캠퍼스는 혁신적인 교육 프로그램과 연구를 통해 아이들이 미래 사회의 주역으로 성장할 수 있도록
            최선을 다하겠습니다.
          </p>
          <Link
            href="/about/story"
            className="inline-block bg-white text-primary font-medium px-8 py-3 rounded-lg text-lg hover:bg-gray-100 transition-colors"
          >
            미리캠퍼스 스토리 보기
          </Link>
        </div>
      </section>
    </main>
  )
}

// 연혁 데이터
const historyItems = [
  {
    year: "2025.03",
    events: [
      {
        title: "(주)미리캠퍼스 교육개발연구소 설립 (사학연금관리공단 제휴)",
        descriptions: [
          "미리캠퍼스의 교육 철학과 방법론을 체계화하고 발전시키기 위한 교육개발연구소를 설립했습니다.",
          "사학연금관리공단과의 제휴를 통해 교육 프로그램의 전문성과 신뢰성을 높였습니다.",
        ],
        image: "/placeholder.svg?key=history-2025-research",
      },
      {
        title: "멘토링 플랫폼 개발",
        descriptions: [
          "학생들이 다양한 분야의 전문가와 연결될 수 있는 온라인 멘토링 플랫폼을 개발했습니다.",
          "진로 탐색과 학습 동기 부여에 큰 도움이 되는 서비스로 자리매김하고 있습니다.",
        ],
      },
      {
        title: "SDGs 주제탐구 프로그램 개발 운영 시작",
        descriptions: [
          "지속가능발전목표(SDGs)를 주제로 한 탐구 프로그램을 개발하여 학생들에게 글로벌 이슈에 대한 인식과 해결 능력을 키워주고 있습니다.",
          "환경, 사회, 경제적 지속가능성에 대한 이해를 높이는 교육을 제공합니다.",
        ],
      },
      {
        title: "대치동 주제탐구 전문 학원 딥유니온 제휴, 주제탐구교육원 런칭",
        descriptions: [
          "대치동의 유명 학원인 딥유니온과 제휴하여 주제탐구교육원을 런칭했습니다.",
          "학생들에게 더욱 전문적이고 체계적인 탐구 교육을 제공할 수 있게 되었습니다.",
        ],
      },
      {
        title: '전교일등 공부습관 캠프 "집일공" 런칭',
        descriptions: [
          "학생들의 효과적인 학습 습관 형성을 위한 특별 캠프 프로그램을 개발했습니다.",
          "자기주도학습 능력 향상에 초점을 맞춘 이 캠프는 많은 학생과 학부모님들로부터 호평을 받고 있습니다.",
        ],
      },
    ],
  },
  {
    year: "2024.09",
    events: [
      {
        title: "법인 전환 : 교육체험세상 ⇒ (주)미리캠퍼스",
        descriptions: [
          "교육체험세상에서 (주)미리캠퍼스로 법인 전환을 완료했습니다.",
          "이를 통해 더욱 체계적이고 전문적인 교육 서비스를 제공할 수 있는 기반을 마련했습니다.",
        ],
        image: "/placeholder.svg?key=history-2024-incorporation",
      },
      {
        title: "(주)미리캠퍼스 상표등록",
        descriptions: ["미리캠퍼스의 브랜드 가치를 보호하고 신뢰성을 높이기 위해 상표등록을 완료했습니다."],
      },
      {
        title: '과학실험을 통한 주제탐구 프로그램 "러닝랩" 등 지식특허 8종 출원',
        descriptions: [
          "미리캠퍼스의 대표 프로그램인 '러닝랩'을 포함한 8종의 교육 프로그램에 대한 지식특허를 출원했습니다.",
          "이는 미리캠퍼스 교육 프로그램의 독창성과 전문성을 인정받은 결과입니다.",
        ],
      },
      {
        title: "과학실험 키트 8종 특허 출원 신청",
        descriptions: [
          "학생들의 과학적 탐구와 실험을 돕기 위한 8종의 과학실험 키트에 대한 특허를 출원했습니다.",
          "이 키트들은 학교와 가정에서 쉽게 활용할 수 있도록 설계되었습니다.",
        ],
      },
      {
        title: "대학연계 전공체험 프로그램 특허 출원 신청",
        descriptions: [
          "대학과 연계하여 학생들에게 실질적인 전공 체험 기회를 제공하는 프로그램의 특허를 출원했습니다.",
          "이를 통해 학생들은 진로 탐색과 대학 전공에 대한 이해를 높일 수 있습니다.",
        ],
      },
    ],
  },
  {
    year: "2024.05",
    events: [
      {
        title: "부산경제진흥원 기술인큐베이팅 사업 선정",
        descriptions: [
          "부산경제진흥원의 기술인큐베이팅 사업에 선정되어 미리캠퍼스의 교육 기술과 프로그램 개발에 대한 지원을 받게 되었습니다.",
          "이를 통해 더욱 혁신적인 교육 서비스를 개발할 수 있는 기회를 얻었습니다.",
        ],
        image: "/placeholder.svg?key=history-2024-incubating",
      },
      {
        title: "과학실험을 통한 진로탐색 및 주제탐구 프로그램 전국 200여개 학교 2,000여명 참가 달성",
        descriptions: [
          "미리캠퍼스의 대표 프로그램인 과학실험 기반 진로탐색 및 주제탐구 프로그램이 전국 200여개 학교, 2,000여명의 학생들에게 제공되었습니다.",
          "이는 미리캠퍼스 교육 프로그램의 우수성과 효과성을 입증하는 성과입니다.",
        ],
      },
    ],
  },
  {
    year: "2023.05",
    events: [
      {
        title: "교육체험세상 설립",
        descriptions: [
          "미리캠퍼스의 전신인 교육체험세상이 설립되었습니다.",
          "자기주도적 학습과 창의적 문제해결 능력 향상을 위한 교육 프로그램 개발을 시작했습니다.",
          "이때부터 과학실험, 진로탐색, 주제탐구 등 다양한 교육 프로그램의 기초를 다졌습니다.",
        ],
        image: "/placeholder.svg?key=history-2023-founding",
      },
    ],
  },
]
