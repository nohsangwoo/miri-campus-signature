"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function OrganizationPage() {
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
            <span className="text-primary font-medium">조직도</span>
          </div>
        </div>
      </div>

      {/* 페이지 제목 */}
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold">조직도</h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
          미리캠퍼스의 전문적인 조직 구성을 소개합니다
        </p>
      </div>

      {/* 조직도 소개 */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">효율적인 조직 운영으로 최고의 교육을 제공합니다</h2>
            <p className="text-xl leading-relaxed">
              미리캠퍼스는 체계적인 조직 구성을 통해 학생들에게 최상의 교육 경험을 제공하고 있습니다.
              <br />각 부서는 전문성을 바탕으로 유기적으로 협력하여 교육의 질을 높이고 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 조직도 다이어그램 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="org-chart">
              {/* CEO */}
              <div className="flex justify-center mb-16">
                <div className="org-box bg-gray-600 text-white">
                  <h3 className="text-xl font-bold">대표이사</h3>
                  <p>김수범</p>
                </div>
              </div>

              {/* 2단계: 운영 및 자문위원회 + 교육연구소 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="flex justify-center">
                  <div className="org-box bg-gray-200">
                    <h3 className="text-xl font-bold">운영 및 자문위원회</h3>
                    <p>교육 전문가 자문단</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="org-box bg-red-200">
                    <h3 className="text-xl font-bold">교육연구소</h3>
                    <p>교육 프로그램 연구개발</p>
                  </div>
                </div>
              </div>

              {/* 3단계: 경영지원부, 영업기획부, 미래전략부 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="flex justify-center">
                  <div className="org-box bg-gray-200">
                    <h3 className="text-xl font-bold">경영지원부</h3>
                    <p>인사, 회계, 총무</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="org-box bg-gray-200">
                    <h3 className="text-xl font-bold">영업기획부</h3>
                    <p>마케팅, 영업, 홍보</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="org-box bg-yellow-400">
                    <h3 className="text-xl font-bold">미래전략부</h3>
                    <p>신규 사업 개발</p>
                  </div>
                </div>
              </div>

              {/* 4단계: 교육연구소 하위 부서 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="md:col-start-2 flex justify-center">
                  <div className="org-box bg-gray-200">
                    <h3 className="text-xl font-bold">시설위탁운영</h3>
                    <p>(직영 위탁)</p>
                  </div>
                </div>
                <div className="md:col-start-3 flex justify-center">
                  <div className="org-box bg-gray-200">
                    <h3 className="text-xl font-bold">프로그램운영</h3>
                    <p>(초중고)</p>
                  </div>
                </div>
              </div>

              {/* 5단계: 미래전략부 하위 프로그램 */}
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4 max-w-xs mx-auto text-center">
                <div className="text-blue-600 font-bold text-xl">멘토링플랫폼</div>
                <div className="text-blue-600 font-bold text-xl">공부습관캠프</div>
              </div>
            </div>

            {/* 연결선 SVG */}
            <div className="relative mt-20">
              <h3 className="text-2xl font-bold mb-6 text-center">조직도 설명</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-xl font-bold mb-4 text-gray-600">대표이사</h4>
                  <p className="text-lg leading-relaxed">
                    미리캠퍼스의 전체적인 비전과 방향성을 제시하고, 모든 부서의 활동을 총괄합니다. 교육 철학을 바탕으로
                    회사의 성장 전략을 수립하고 실행합니다.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-xl font-bold mb-4 text-gray-600">운영 및 자문위원회</h4>
                  <p className="text-lg leading-relaxed">
                    교육 분야의 전문가들로 구성된 자문단으로, 미리캠퍼스의 교육 프로그램과 운영 방향에 대한 전문적인
                    조언을 제공합니다.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-xl font-bold mb-4 text-red-400">교육연구소</h4>
                  <p className="text-lg leading-relaxed">
                    미리캠퍼스의 핵심 부서로, 교육 프로그램 연구 및 개발을 담당합니다. 최신 교육 트렌드를 분석하고
                    혁신적인 교육 방법론을 개발합니다.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-xl font-bold mb-4 text-yellow-500">미래전략부</h4>
                  <p className="text-lg leading-relaxed">
                    미래 교육 시장을 예측하고 새로운 사업 기회를 발굴합니다. 멘토링 플랫폼과 공부습관캠프 등 혁신적인
                    교육 서비스를 기획하고 개발합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 팀 소개 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">핵심 팀원 소개</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="aspect-square relative">
                <Image src="/placeholder.svg?key=ceo-profile" alt="김수범 대표이사" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">김수범</h3>
                <p className="text-primary font-medium mb-3">대표이사</p>
                <p className="text-gray-600 mb-4">
                  교육 분야에서 15년 이상의 경험을 가진 전문가로, 미리캠퍼스의 비전과 미션을 이끌고 있습니다.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="aspect-square relative">
                <Image
                  src="/placeholder.svg?key=research-director"
                  alt="이지원 교육연구소장"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">이지원</h3>
                <p className="text-primary font-medium mb-3">교육연구소장</p>
                <p className="text-gray-600 mb-4">
                  교육학 박사로 혁신적인 교육 방법론 개발과 프로그램 설계를 담당하고 있습니다.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="aspect-square relative">
                <Image
                  src="/placeholder.svg?key=future-director"
                  alt="박민준 미래전략부장"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">박민준</h3>
                <p className="text-primary font-medium mb-3">미래전략부장</p>
                <p className="text-gray-600 mb-4">
                  에듀테크 전문가로 디지털 교육 플랫폼과 혁신적인 교육 서비스 개발을 주도하고 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 채용 정보 */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">미리캠퍼스와 함께 성장할 인재를 찾습니다</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            교육의 미래를 함께 만들어갈 열정적인 인재를 기다립니다. 미리캠퍼스에서 여러분의 역량을 마음껏 발휘해보세요.
          </p>
          <Link
            href="/careers"
            className="inline-block bg-white text-primary font-medium px-8 py-3 rounded-lg text-lg hover:bg-gray-100 transition-colors"
          >
            채용 정보 보기
          </Link>
        </div>
      </section>

      <style jsx>{`
        .org-chart {
          position: relative;
        }

        .org-box {
          padding: 1.5rem;
          border-radius: 0.5rem;
          min-width: 200px;
          text-align: center;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        @media (min-width: 768px) {
          .org-chart::before {
            content: "";
            position: absolute;
            top: 80px;
            left: 50%;
            width: 2px;
            height: 40px;
            background-color: #ccc;
          }

          .org-chart::after {
            content: "";
            position: absolute;
            top: 120px;
            left: 25%;
            width: 50%;
            height: 2px;
            background-color: #ccc;
          }
        }
      `}</style>
    </main>
  )
}
