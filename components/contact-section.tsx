import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">교육 문의</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            미리캠퍼스의 교육 프로그램에 대해 궁금하신 점이 있으시면 언제든지 문의해주세요
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">문의하기</h3>
              <p className="text-lg">프로그램 신청 및 상담에 대한 문의사항을 남겨주시면 빠르게 답변 드리겠습니다.</p>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    이름
                  </label>
                  <Input id="name" placeholder="이름을 입력하세요" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    연락처
                  </label>
                  <Input id="phone" placeholder="연락처를 입력하세요" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  이메일
                </label>
                <Input id="email" type="email" placeholder="이메일을 입력하세요" />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  문의 제목
                </label>
                <Input id="subject" placeholder="문의 제목을 입력하세요" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  문의 내용
                </label>
                <Textarea id="message" placeholder="문의 내용을 입력하세요" rows={5} />
              </div>

              <Button type="submit" size="lg" className="w-full text-lg bg-primary text-white hover:bg-primary/90">
                문의하기
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">연락처 정보</h3>
              <p className="text-lg">미리캠퍼스에 방문하시거나 전화, 이메일로 문의하실 수 있습니다.</p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-blue-100 rounded-full p-3">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">전화번호</h4>
                  <p className="text-lg">000-0000-0000</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-blue-100 rounded-full p-3">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">이메일</h4>
                  <p className="text-lg">info@miricampus.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-blue-100 rounded-full p-3">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">주소</h4>
                  <p className="text-lg">서울특별시 강남구 테헤란로 123 미리캠퍼스 빌딩</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-blue-100 rounded-full p-3">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">운영 시간</h4>
                  <p className="text-lg">화요일~일요일 / 오전 9:30 ~ 오후 5:00</p>
                  <p className="text-lg">매주 월요일 휴무</p>
                </div>
              </div>
            </div>

            <div className="aspect-video relative rounded-xl overflow-hidden border">
              {/* 지도 이미지 대체 */}
              <div className="absolute inset-0 bg-slate-100 flex items-center justify-center">
                <p className="text-xl font-semibold">지도가 표시됩니다</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
