import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// 갤러리 아이템 타입 정의
interface GalleryItem {
  id: number
  title: string
  date: string
  image: string
  category: string
  content?: string
  images?: string[]
}

// 샘플 갤러리 데이터
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "「서서히드는 꿈학교」홍보대학과의 인솔자 현장답 다녀와",
    date: "2025-05-02",
    image: "/gallery/university-visit.png",
    category: "현장학습",
    content: `
      미리캠퍼스의 「서서히드는 꿈학교」프로그램의 일환으로 홍보대학교를 방문하였습니다.
      
      이번 방문은 학생들의 진로 탐색을 돕기 위한 현장 체험 학습으로, 대학 캠퍼스 투어와 학과 소개, 전공 체험 활동 등 다양한 프로그램으로 진행되었습니다.
      
      특히 학생들은 실제 대학 강의실에서 진행된 모의 수업에 참여하며 대학 생활을 간접적으로 체험할 수 있었습니다. 또한 대학생 멘토들과의 만남을 통해 진학 준비와 대학 생활에 대한 생생한 이야기를 들을 수 있었습니다.
      
      참가한 학생들은 "막연하게만 생각했던 대학 생활을 직접 체험해볼 수 있어서 좋았다", "진로 선택에 많은 도움이 되었다"는 등의 긍정적인 반응을 보였습니다.
      
      미리캠퍼스는 앞으로도 다양한 현장 체험 학습을 통해 학생들의 진로 탐색과 미래 설계를 적극 지원할 예정입니다.
    `,
    images: [
      "/gallery/university-visit.png",
      "/gallery/university-visit-2.jpg",
      "/gallery/university-visit-3.png",
      "/gallery/university-visit-4.png",
    ],
  },
  {
    id: 2,
    title: "5월 캐릭터 워크샵",
    date: "2025-04-28",
    image: "/gallery/character-workshop.jpg",
    category: "워크샵",
    content: `
      미리캠퍼스에서 5월 캐릭터 워크샵을 진행했습니다.
      
      이번 워크샵은 초등학생들을 대상으로 창의력 향상과 자기표현 능력 개발을 목표로 기획되었습니다. 학생들은 자신만의 캐릭터를 디자인하고 스토리를 만들어보는 시간을 가졌습니다.
      
      전문 일러스트레이터의 지도 아래 캐릭터 디자인의 기본 원리부터 표정과 동작 표현까지 다양한 기법을 배우며 즐거운 시간을 보냈습니다.
      
      완성된 캐릭터들은 미니 전시회를 통해 서로의 작품을 감상하고 이야기를 나누는 시간도 가졌습니다. 학부모님들도 아이들의 창의적인 작품에 많은 관심과 칭찬을 보내주셨습니다.
      
      미리캠퍼스는 앞으로도 다양한 주제의 워크샵을 통해 아이들의 창의력과 표현력 향상을 지원할 계획입니다.
    `,
    images: [
      "/gallery/character-workshop.jpg",
      "/gallery/character-workshop-2.png",
      "/gallery/character-workshop-3.png",
    ],
  },
  // 다른 갤러리 아이템들...
]

export default function GalleryDetailPage({ params }: { params: { id: string } }) {
  const galleryId = Number.parseInt(params.id)
  const galleryItem = galleryItems.find((item) => item.id === galleryId)

  // 이전 및 다음 갤러리 찾기
  const currentIndex = galleryItems.findIndex((item) => item.id === galleryId)
  const prevGallery = currentIndex < galleryItems.length - 1 ? galleryItems[currentIndex + 1] : null
  const nextGallery = currentIndex > 0 ? galleryItems[currentIndex - 1] : null

  if (!galleryItem) {
    return (
      <main className="min-h-screen">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold mb-6">존재하지 않는 갤러리입니다</h1>
          <Button>
            <Link href="/community/gallery">목록으로 돌아가기</Link>
          </Button>
        </div>
      </main>
    )
  }

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
            <Link href="/community" className="hover:text-primary">
              커뮤니티
            </Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <Link href="/community/gallery" className="hover:text-primary">
              포토갤러리
            </Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-primary font-medium">상세보기</span>
          </div>
        </div>
      </div>

      {/* 갤러리 상세 */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* 갤러리 헤더 */}
          <div className="border-b pb-6 mb-8">
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm mb-4">
              {galleryItem.category}
            </div>
            <h1 className="text-3xl font-bold mb-4">{galleryItem.title}</h1>
            <div className="flex flex-wrap justify-between text-gray-500">
              <div className="space-x-4">
                <span>등록일: {galleryItem.date}</span>
              </div>
            </div>
          </div>

          {/* 갤러리 내용 */}
          <div className="mb-12">
            {/* 메인 이미지 */}
            <div className="aspect-video relative rounded-lg overflow-hidden mb-8">
              <Image
                src={galleryItem.image || "/placeholder.svg"}
                alt={galleryItem.title}
                fill
                className="object-cover"
              />
            </div>

            {/* 텍스트 내용 */}
            <div className="prose max-w-none mb-12 leading-relaxed text-lg">
              <p className="whitespace-pre-line">{galleryItem.content}</p>
            </div>

            {/* 추가 이미지 갤러리 */}
            {galleryItem.images && galleryItem.images.length > 1 && (
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">갤러리</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {galleryItem.images.map((image, index) => (
                    <div key={index} className="aspect-square relative rounded-lg overflow-hidden">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${galleryItem.title} 이미지 ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 버튼 */}
          <div className="flex justify-between">
            <div>
              <Button variant="outline">
                <Link href="/community/gallery">목록</Link>
              </Button>
            </div>
            <div className="space-x-2">
              <Button variant="outline">
                <Link href={`/community/gallery/edit/${galleryItem.id}`}>수정</Link>
              </Button>
              <Button variant="destructive">삭제</Button>
            </div>
          </div>

          {/* 이전글/다음글 */}
          <div className="mt-12 border-t border-b">
            <div className="py-4 border-b flex hover:bg-gray-50">
              <span className="font-medium w-24 text-gray-600">다음글</span>
              {nextGallery ? (
                <Link
                  href={`/community/gallery/${nextGallery.id}`}
                  className="hover:text-primary hover:underline flex-1"
                >
                  {nextGallery.title}
                </Link>
              ) : (
                <span className="text-gray-500">다음 갤러리가 없습니다.</span>
              )}
            </div>
            <div className="py-4 flex hover:bg-gray-50">
              <span className="font-medium w-24 text-gray-600">이전글</span>
              {prevGallery ? (
                <Link
                  href={`/community/gallery/${prevGallery.id}`}
                  className="hover:text-primary hover:underline flex-1"
                >
                  {prevGallery.title}
                </Link>
              ) : (
                <span className="text-gray-500">이전 갤러리가 없습니다.</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
