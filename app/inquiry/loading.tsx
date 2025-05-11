import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen">
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <Skeleton className="h-6 w-64" />
        </div>
      </div>

      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <Skeleton className="h-12 w-64 mx-auto mb-6" />
          <Skeleton className="h-6 w-full max-w-3xl mx-auto mb-2" />
          <Skeleton className="h-6 w-4/5 max-w-2xl mx-auto" />
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Skeleton className="h-10 w-64 mx-auto mb-12" />

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex gap-4">
                    <Skeleton className="h-12 w-12 rounded-full flex-shrink-0" />
                    <div className="space-y-2 flex-grow">
                      <Skeleton className="h-6 w-32" />
                      <Skeleton className="h-5 w-full" />
                      <Skeleton className="h-4 w-48" />
                    </div>
                  </div>
                ))}
                <Skeleton className="h-64 w-full rounded-xl" />
              </div>

              <Skeleton className="h-[500px] rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Skeleton className="h-10 w-64 mx-auto mb-12" />
            <Skeleton className="h-[600px] rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  )
}
