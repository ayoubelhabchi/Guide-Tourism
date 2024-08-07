
export default function Component() {
  return (
    <div className="w-full max-w3xl mt-10 px2 pb8 flex flex-col items-center overflow-x-hidden">
      <div className="flex items-center justify-center mb-3">
        <h2 className="text-2xl font-bold">Reviews By Our Custmers</h2>

      </div>
      <div className=" overflow-x-hidden scrollbar-hide pb-8">
        <div className="flex gap-3 px-4">
          <div className="flex-shrink-0 w-80 bg-background rounded-lg shadow-md p-6">
            <div className="flex items-center gap-4 mb-4">
              {/* <Avatar className="w-12 h-12 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar> */}
              <div>
                <h3 className="font-semibold">Johnson</h3>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
            Our guide's deep knowledge and passion for Morocco made our tour unforgettable. The service was impeccable from start to finish!
            </p>
          </div>
          <div className="flex-shrink-0 w-80 bg-background rounded-lg shadow-md p-6">
            <div className="flex items-center gap-4 mb-4">
              {/* <Avatar className="w-12 h-12 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar> */}
              <div>
                <h3 className="font-semibold">Sarah Johnson</h3>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
            Exploring Morocco with this tour service was a dream come true! Professional guides and well-organized itineraries made for a perfect experience.
            </p>
          </div>
          <div className="flex-shrink-0 w-80 bg-background rounded-lg shadow-md p-6">
            <div className="flex items-center gap-4 mb-4">
              {/* <Avatar className="w-12 h-12 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar> */}
              <div>
                <h3 className="font-semibold">Alex Chen</h3>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                  <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
            From the bustling markets of Fez to the tranquil Atlas Mountains, our guide provided exceptional service and insider knowledge.
            </p>
          </div>
          {/* <div className="flex-shrink-0 w-80 bg-background rounded-lg shadow-md p-6">
            <div className="flex items-center gap-4 mb-4">
             
              <div>
                <h3 className="font-semibold">Emily Parker</h3>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-primary" />
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
            Exploring the Sahara with this tour was an unforgettable experience. The guides were friendly and well-prepared.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  )
}

function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}