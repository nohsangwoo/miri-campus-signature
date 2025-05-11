import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/mirecampus-logo.png"
                alt="미리캠퍼스 로고"
                width={40}
                height={40}
                className="h-10 w-10 bg-white rounded-full p-1"
              />
              <span className="text-2xl font-bold">미리캠퍼스</span>
            </Link>
            <p className="text-slate-300">가능성을 미리 만나는 곳, 미리캠퍼스는 자기주도 미래교육의 시작입니다.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-white hover:text-blue-400">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white hover:text-blue-400">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white hover:text-blue-400">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">Youtube</span>
              </Link>
              <Link href="#" className="text-white hover:text-blue-400">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">회사 정보</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about/story" className="text-slate-300 hover:text-white">
                  미리캠퍼스 스토리
                </Link>
              </li>
              <li>
                <Link href="/about/history" className="text-slate-300 hover:text-white">
                  회사연혁
                </Link>
              </li>
              <li>
                <Link href="/about/organization" className="text-slate-300 hover:text-white">
                  조직도
                </Link>
              </li>
              <li>
                <Link href="/about/news" className="text-slate-300 hover:text-white">
                  보도자료
                </Link>
              </li>
              <li>
                <Link href="/about/location" className="text-slate-300 hover:text-white">
                  오시는 길
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">프로그램</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/programs/science" className="text-slate-300 hover:text-white">
                  과학융합탐구활동
                </Link>
              </li>
              <li>
                <Link href="/programs/humanities" className="text-slate-300 hover:text-white">
                  인문사회융합탐구활동
                </Link>
              </li>
              <li>
                <Link href="/programs/research" className="text-slate-300 hover:text-white">
                  주제탐구활동
                </Link>
              </li>
              <li>
                <Link href="/programs/camp" className="text-slate-300 hover:text-white">
                  캠프프로그램
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">고객 지원</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/inquiry" className="text-slate-300 hover:text-white">
                  교육문의
                </Link>
              </li>
              <li>
                <Link href="/community/faq" className="text-slate-300 hover:text-white">
                  자주하는질문
                </Link>
              </li>
              <li>
                <Link href="/community/news" className="text-slate-300 hover:text-white">
                  소식알림
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-300 hover:text-white">
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-300 hover:text-white">
                  이용약관
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700 text-slate-400 text-sm">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div>
              <p>주소: 서울특별시 강남구 테헤란로 123 미리캠퍼스 빌딩</p>
              <p>대표: 김수범 | 사업자등록번호: 123-45-67890</p>
            </div>
            <div>
              <p>전화: 000-0000-0000 | 이메일: info@miricampus.com</p>
              <p>© {new Date().getFullYear()} 미리캠퍼스. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
