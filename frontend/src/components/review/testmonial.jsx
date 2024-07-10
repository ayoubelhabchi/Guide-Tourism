import client from '../../assets/guide2.jpg';
import testimg from '../../assets/campingPlan.png';
import testimg2 from '../../assets/camper.jpg'
import testimg3 from '../../assets/tent.png'

export default function Component() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex-shrink-0">
            <img
              alt="Decoration"
              className="w-24 h-24"
              height={100}
              src={testimg3}
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width={100}
            />
          </div>
          <div className="text-center">
            <span className="text-xs font-semibold uppercase text-[#bd1e59]">Promotion</span>
            <h2 className="text-4xl font-bold mt-1 mb-4">See What Our Clients Say About Us</h2>
            <div className="relative mx-auto w-full max-w-xl px-8 py-4 bg-white rounded-lg shadow">
              <blockquote className="text-center">
                <p className="text-lg italic text-gray-600">
                  {`"Vivamus dictum eros id leo aliquet ullamcorper non tincidunt magna. Aenean auctor, nisi et ultricies
                  vulputate, erat dui tincidunt purus, vitae posuere est ipsum et velit. Suspendisse potenti. Cras a
                  ornare massa. In eget dolor eleifend, accumsan odio et, ullamcorper mi."`}
                </p>
                <footer className="mt-4">
                  <div className="flex items-center justify-center">
                    <div className="rounded-full bg-gray-200 w-10 h-10 flex items-center justify-center">
                      <img
                        alt="Client"
                        className="rounded-full"
                        height={40}
                        src={client}
                        style={{
                          aspectRatio: "40/40",
                          objectFit: "cover",
                        }}
                        width={40}
                      />
                    </div>
                    <div className="ml-2 text-sm font-medium">
                      <div>Christina</div>
                      <div className="text-gray-500">CEO at TechCompany</div>
                    </div>
                  </div>
                </footer>
              </blockquote>
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 ml-4">
                <svg
                  className="h-8 w-8 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                </svg>
              </div>
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2 mr-4">
                <svg
                  className="h-8 w-8 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-shrink-0 space-x-2">
            <img
              alt="Client photo 1"
              className="w-24 h-24 transform rotate-12 shadow-lg"
              height={100}
              src={testimg}
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width={100}
            />
            <img
              alt="Client photo 2"
              className="w-24 h-24 transform -rotate-12 shadow-lg"
              height={100}
              src={ testimg2}
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width={100}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
