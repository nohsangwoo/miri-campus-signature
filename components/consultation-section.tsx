import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ConsultationSection() {
  return (
    <section className="py-16 bg-green-100 relative overflow-hidden" id="consultation">
      <div className="absolute right-0 bottom-0 w-32 h-32">
        <Image src="/decoration-leaf.png" alt="장식 이미지" width={128} height={128} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <p className="text-lg text-green-600 font-medium mb-2">우리 아이 미래를 위한 첫걸음!</p>
          <h2 className="text-3xl font-bold">창의력과 사고력을 키우는 통합 교육 솔루션</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col space-y-6">
            <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                <Image src="/icons/education-icon.png" alt="교육 아이콘" width={40} height={40} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">교육 상담 문의하기</h3>
                <p className="text-gray-600">
                  미리캠퍼스의 교육 전문가가 학생에게 맞는 최적의 교육 프로그램을 안내해 드립니다.
                </p>
                <Button className="mt-4 bg-green-600 hover:bg-green-700 text-white">상담 신청하기</Button>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                <Image src="/icons/program-icon.png" alt="프로그램 아이콘" width={40} height={40} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">개설 상담 문의하기</h3>
                <p className="text-gray-600">
                  학교나 기관에서 미리캠퍼스의 프로그램을 개설하고 싶으신가요? 맞춤형 프로그램을 제안해 드립니다.
                </p>
                <Button className="mt-4 bg-green-600 hover:bg-green-700 text-white">개설 문의하기</Button>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">미리캠퍼스 상담 신청</h3>
              <p className="text-gray-600">빠른 상담을 원하시면 아래 정보를 입력해주세요</p>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    이름
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="이름을 입력하세요"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    연락처
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="연락처를 입력하세요"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  이메일
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="이메일을 입력하세요"
                />
              </div>

              <div>
                <label htmlFor="program" className="block text-sm font-medium mb-1">
                  관심 프로그램
                </label>
                <select id="program" className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option value="">관심 프로그램을 선택하세요</option>
                  <option value="science">과학융합탐구활동</option>
                  <option value="humanities">인문사회융합탐구활동</option>
                  <option value="research">주제탐구활동</option>
                  <option value="camp">캠프프로그램</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  문의사항
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="문의사항을 입력하세요"
                ></textarea>
              </div>

              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
                상담 신청하기
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
