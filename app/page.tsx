import Image from "next/image"
import Link from "next/link"
import { Menu, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import MainHero from "@/components/main-hero"
import ProgramSection from "@/components/program-section"
import AboutSection from "@/components/about-section"
import FeatureSection from "@/components/feature-section"
import InstructorSection from "@/components/instructor-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import EducationHighlights from "@/components/education-highlights"
import SteamEducation from "@/components/steam-education"
import ParentReviews from "@/components/parent-reviews"
import Achievements from "@/components/achievements"
import ConsultationSection from "@/components/consultation-section"
import { MainNav } from "@/components/main-nav"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/mirecampus-logo.png" alt="미리캠퍼스 로고" width={40} height={40} className="h-10 w-10" />
              <span className="text-2xl font-bold text-primary">미리캠퍼스</span>
            </Link>
            <MainNav />
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2">
              <Link href="/login" className="text-lg font-medium hover:text-primary">
                로그인
              </Link>
              <span>|</span>
              <Link href="/register" className="text-lg font-medium hover:text-primary">
                회원가입
              </Link>
            </div>
            <Button variant="outline" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
              <span className="sr-only">검색</span>
            </Button>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">메뉴</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <MainHero />
        <EducationHighlights />
        <AboutSection />
        <SteamEducation />
        <ProgramSection />
        <ParentReviews />
        <FeatureSection />
        <Achievements />
        <InstructorSection />
        <ConsultationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
