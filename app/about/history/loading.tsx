import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen">
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <Skeleton className="h-6 w-64" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 text-center">
        <Skeleton className="h-12 w-64 mx-auto" />
        <Skeleton className="h-6 w-96 mx-auto mt-4" />
      </div>

      <div className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Skeleton className="h-10 w-96 mx-auto mb-6" />
            <Skeleton className="h-6 w-full mx-auto mb-2" />
            <Skeleton className="h-6 w-4/5 mx-auto" />
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {[1, 2, 3].map((year) => (
              <div key={year} className="mb-20">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4">
                    <Skeleton className="h-16 w-32 mb-8" />
                  </div>
                  <div className="md:w-3/4 md:pl-12">
                    <div className="space-y-12">
                      {[1, 2].map((event) => (
                        <div key={event} className="bg-gray-50 p-8 rounded-xl">
                          <Skeleton className="h-8 w-3/4 mb-4" />
                          <Skeleton className="h-6 w-full mb-2" />
                          <Skeleton className="h-6 w-full mb-2" />
                          <Skeleton className="h-6 w-4/5" />
                          <Skeleton className="h-48 w-full mt-6 rounded-lg" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
