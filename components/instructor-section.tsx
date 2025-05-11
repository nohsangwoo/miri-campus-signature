import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function InstructorSection() {
  return (
    <section className="py-20 bg-slate-50" id="instructors">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">주제탐구 직영 강사진</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">각 분야 전문가들이 학생들의 성장을 돕습니다</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl overflow-hidden shadow-md">
            <div className="aspect-[3/2] relative">
              <Image
                src="/placeholder.svg?height=400&width=600&query=교육 전문가 남성"
                alt="정제원 강사"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-1">정제원</h3>
              <p className="text-blue-600 font-medium mb-3">커리큘럼개발 / 역사</p>
              <p className="mb-4">숭의여고 EBS대표컨설턴트 고문</p>
              <Button variant="outline" className="w-full">
                프로필 보기
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-md">
            <div className="aspect-[3/2] relative">
              <Image
                src="/placeholder.svg?height=400&width=600&query=교육 전문가 여성"
                alt="배정은 강사"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-1">배정은</h3>
              <p className="text-blue-600 font-medium mb-3">경영 / 병원경영</p>
              <p className="mb-4">서울대 경영학석사</p>
              <Button variant="outline" className="w-full">
                프로필 보기
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-md">
            <div className="aspect-[3/2] relative">
              <Image
                src="/placeholder.svg?height=400&width=600&query=교육 전문가 남성"
                alt="김동헌 강사"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-1">김동헌</h3>
              <p className="text-blue-600 font-medium mb-3">의생명 / 의학</p>
              <p className="mb-4">부산대 의학과 대표강사</p>
              <Button variant="outline" className="w-full">
                프로필 보기
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-md">
            <div className="aspect-[3/2] relative">
              <Image
                src="/placeholder.svg?height=400&width=600&query=교육 전문가 여성"
                alt="김화성 강사"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-1">김화성</h3>
              <p className="text-blue-600 font-medium mb-3">인문사회 / 교육심리</p>
              <p className="mb-4">부산대 교육심리</p>
              <Button variant="outline" className="w-full">
                프로필 보기
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-md">
            <div className="aspect-[3/2] relative">
              <Image
                src="/placeholder.svg?height=400&width=600&query=교육 전문가 남성"
                alt="김종복 강사"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-1">김종복</h3>
              <p className="text-blue-600 font-medium mb-3">화학 / 물질과학</p>
              <p className="mb-4">효고현립대 교수</p>
              <Button variant="outline" className="w-full">
                프로필 보기
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-md">
            <div className="aspect-[3/2] relative">
              <Image
                src="/placeholder.svg?height=400&width=600&query=교육 전문가 여성"
                alt="백진아 강사"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-1">백진아</h3>
              <p className="text-blue-600 font-medium mb-3">약학</p>
              <p className="mb-4">경성대 약학과</p>
              <Button variant="outline" className="w-full">
                프로필 보기
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button size="lg" className="text-lg">
            모든 강사진 보기
          </Button>
        </div>
      </div>
    </section>
  )
}
