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

      <div className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Skeleton className="h-10 w-64 mx-auto mb-12" />

            <div className="grid md:grid-cols-3 gap-12 items-start">
              <div className="md:col-span-1">
                <Skeleton className="aspect-square w-full rounded-full" />
                <Skeleton className="h-6 w-32 mx-auto mt-6" />
                <Skeleton className="h-4 w-48 mx-auto mt-2" />
              </div>

              <div className="md:col-span-2 space-y-6">
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-32 ml-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Skeleton className="h-10 w-64 mx-auto mb-12" />
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
            </div>
            <Skeleton className="aspect-video w-full rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  )
}
