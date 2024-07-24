export default function Loading() {
    return (
      <div className="w-full  maxw5xl mxauto py10 px4 sm:px6 lg:px8">
        <div className="grid grid-cols-2 gap-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-gradient-to-br from-gray rounded-lg shadow-sm animate-pulse lg:h-[260px] h-[100px]">
              <div className="aspect-square flex items-center justify-center p-6">
                <div className="bg-muted rounded-md w-full h-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }