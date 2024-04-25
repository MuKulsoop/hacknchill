import { Button } from "@/components/ui/button";
import "./Home.css";

// TickIcon component for outlined tick icon
function TickIcon(props) {
  const { size = 24, strokeWidth = 2, color = 'currentColor', backgroundColor = 'white', ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      {...rest}
    >
      {/* Circle background */}
      <circle cx="12" cy="12" r="10" fill={backgroundColor} stroke="none" />

      {/* Tick symbol */}
      <path d="M9 12l2 2 4-4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}


// ArrowRightIcon component for arrow pointing right
function ArrowRightIcon(props) {
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
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}  

export default function Home() {
  return (
    <div className=" min-h-screen ">
      <header className="bg-[#005D9c] max-w-7xl mx-auto pt-10 pb-10 px-4 sm:px-6 lg:px-8 rounded-bl-lg rounded-br-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex items-start justify-center flex-col">
            <h1 className="text-4xl font-500 text-white leading-tight sm:text-5xl md:text-6xl">
              ThreadHive is your all-in-one Clothing Platform
            </h1>
            <ul className="mt-4 space-y-2 flex flex-row items-start sm:flex-col sm:justify-center sm:items-start">
              <li className="flex items-center text-white pl-0">
                <TickIcon size={30} color="black" backgroundColor="white" />
                <span className="ml-2">G3's Leader in global employment platforms</span>
              </li>
              <li className="flex items-center text-white pl-0">
                <TickIcon size={30} color="black" backgroundColor="white" />
                <span className="ml-2">90% customer satisfaction rate</span>
              </li>
            </ul>

            <Button className="mt-6 rounded-lg bg-white text-[#0C4A6E] px-4 py-2 flex items-center justify-between hover:bg-[#e2e2e2]">
              Get Started Now <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Button>



          </div>
          <div>
            {/* Placeholder image */}
            <img
              alt="Tailor working on clothes"
              className="rounded-lg w-full h-auto"
              height="360"
              src="https://s3-alpha-sig.figma.com/img/6622/c6f6/399e335de15f059fea02dcc7ef2e65f1?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SvhE0jCjzyk2q3aak7xdR5CaNfCi5L-~igTl9BUSsd2kxxrjci2FBb1~by4khHs1Q36QZ4hj7CIOPWQm01AriIRD7J2nBIjRBcqqeOE0YobKNKSkidJaSQnTmFR7QNiru~LXmfXIfci1LT3ECTGen-3I2pXWTqO8N37djvgH8qHgXSptjZL1bR6i7ZBJc35PjmR7GqOyMO5c7zaTMMVm-G4wRM58MmnjhcYLPuBmzqZGsXY4vREScK0vWsDo~3dT4vcRK7BmrMnJJ3R6o0iTYDHACAysQDpjTDRjKMr~ml3tEeEfVmN-PgaQUAnbic5NeAQeO1KtV4QmPBsnuzpQtg__"
              style={{
                aspectRatio: "360/360",
                objectFit: "cover",
              }}
              width="360"
            />
            {/* <div className="flex justify-between mt-6 flex-col sm:flex-row">
              <Button className="bg-white text-[#0C4A6E] mb-4 sm:mb-0" variant="secondary">
                Find tailors near you
              </Button>
              <Button className="bg-[#F4CA64] text-[#0C4A6E]">
                Find perfect Stitch-Partner <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
            </div> */}
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">
        <section className="text-center py-12 bg-white rounded-lg">
          <h2 className="text-3xl font-bold text-[#8f8f8f] sm:text-4xl md:text-5xl">
            Trusted by <span className="text-[#424242]">25,000+</span> companies from startups to enterprise
          </h2>
          <div className="flex flex-wrap justify-center items-center mt-8 gap-4">
            {/* Placeholder images */}
            {Array.from({ length: 12 }).map((_, index) => (
              <img
                key={index}
                alt={`Logo ${index + 1}`}
                className="m-4 sm:m-0"
                height="40"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "100/40",
                  objectFit: "cover",
                }}
                width="100"
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
