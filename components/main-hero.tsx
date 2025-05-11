import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function MainHero() {
  return (
    <section className="relative overflow-hidden bg-blue-500 py-20 text-white">
      <div className="absolute inset-0 z-0">
        <Image src="/education-background-pattern.png" alt="배경 패턴" fill className="object-cover opacity-20" />
      </div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block">가능성을 미리 만나는 곳,</span>
              <span className="block text-yellow-300">미리캠퍼스</span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              스스로 생각하고, 자신있게 문제를 해결해 가는
              <br />
              <strong className="text-yellow-300">자기주도 미래교육</strong>의 시작
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg">
                프로그램 알아보기
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black bg-white hover:bg-white/90 text-lg"
              >
                교육 문의하기
              </Button>
            </div>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-md rounded-full bg-white/10 p-4">
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image src="/children-science-experiment.png" alt="미리캠퍼스 교육 현장" fill className="object-cover" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8" />
        </div>
      </div>
    </section>
  )
}
