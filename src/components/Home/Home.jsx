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
      <header className="bg-[#005D9c] w-100  pt-10 pb-10 px-4 sm:px-6 lg:px-8 rounded-bl-lg rounded-br-lg">
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
          <div className="flex flex-col items-center justify-center">
            {/* Placeholder images */}
            <div className="flex flex-wrap justify-center items-center mt-8 gap-6">
              <img src="/images/Company1.jpeg" alt="Company 1" className="h-13" />
              <img src="/images/Company2.jpeg" alt="Company 2" className="h-12" />
              <img src="/images/Company3.jpeg" alt="Company 3" className="h-18" />
              <img src="/images/Company4.jpeg" alt="Company 4" className="h-8" />
              <img src="/images/Company5.jpeg" alt="Company 5" className="h-8" />
              <img src="/images/Company6.jpeg" alt="Company 5" className="h-10" />
            </div>
          </div>


        </section>
      </main>
      <main className="bg-gray-800 w-100 p-10 rounded-lg">
        <h2 className="text-white text-4xl font-bold text-center ">You Can Do it All <br /> With ThreadHive</h2>
        <section className=" mx-auto rounded-lg p-8 shadow-lg flex flex-row" style={{
                    width: '85%',

                  }}>

          <div className="bg-white rounded-lg w-1/2 h-full mr-4">
            <div className="p-6 pt-10  h-full">
              <div className="bg-white  rounded-lg flex items-center flex-col">
                <h3 className="text-3xl font-semibold mb-3"
                  style={{
                    width: '95%',

                  }}>Tailor Discovery & Alterations</h3>
                <p className="text-black mb-5"
                  style={{
                    width: '95%',

                  }}>
                  Instead of setting up your own entities, experience the speed of HireGO’s automated global hiring. Create compliant employment agreements and set up payroll and benefits—in a matter of clicks.
                </p>
                <div
                  className="rounded-lg "
                  style={{
                    width: '95%',
                    height: '20rem', // Adjust the height as needed
                    backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/a565/2b40/e3e2f7b926d44b2f122ad82fc873447a?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KUX6UHX7bRiBvSScawRic37zcuVDBQqCctFssNNiDS~e4xF3NS13tmvb67tQEkS4tC1-Pd8inr5xmy3AYR8hq1ZDZjUFYb~nlQoZ5KKkN~yBkisLRj~qjSW08MXbDJQca6K6tkLkUajAAN0~EZaWNfPBVnFMK6IooxR58yx3QOCMTQu29uGSivRAIgYrSPiTPzzXyHYaBirgCdGfKiq3UO2qDmFZoZ5~rAWXaojlaKl2MD6SQ1Gq9znCb9ZryJiAjZX0Czb0MRL1iOLkpf~GtaW2tJfSH9F5hsoUQv6ZzUm2pdsy2k5a6zQN545YjY3x96CbG263IXSMHpn3xYBYjQ__)',
                    backgroundPosition: '0 -300px', // Adjust the background position to show the desired part of the sprite
                    backgroundSize: 'cover',
                  }}
                />
              </div>
              <Button className="mt-6 ml-4 rounded-lg bg-gray-300 text-[#0C4A6E] px-4 py-2  items-center  hover:bg-[#e2e2e2]">
                Find tailors around you <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>


          <div className="w-1/2 flex flex-col space-y-4">
            {/* Top Right Div */}
            <div className="bg-[#7EBD42] rounded-lg p-6 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-white text-3xl font-semibold mb-4">Find Best Manufacturers near You</h3>
                <p className="text-white">
                  Generate, edit, and sign compliant contracts in minutes and access management tools to streamline paperwork, onboarding, and payments.
                </p>
              </div>
              <Button className="mt-6 rounded-lg bg-white text-[#0C4A6E] py-2 items-center hover:bg-[#e2e2e2]">
                Find nearby Manufacturers <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Bottom Right Div */}
            <div className="bg-[#005D9c] rounded-lg p-6 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-white text-3xl font-semibold mb-4">Custom Alterations & Clothing Creation</h3>
                <p className="text-white">
                  Assess global worker misclassification risks and compliantly convert contractors to full-timers, all under one platform.
                </p>
              </div>
              <Button className="mt-6 rounded-lg bg-white text-[#0C4A6E] py-2 items-center hover:bg-[#e2e2e2]">
                Customize it all <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>


        </section>
      </main>

    </div>
  );
}
