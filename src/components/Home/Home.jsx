import { Button } from "@/components/ui/button"
import "./Home.css"


export default function Home() {
  return (
    <div className="bg-[#0C4A6E] min-h-screen">
      {/* <nav className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <FlagIcon className="h-8 w-8" />
            <div className="ml-10 flex items-baseline space-x-4 hidden md:flex">
              <a className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50" href="#">
                Products
              </a>
              <a className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50" href="#">
                Consult Us
              </a>
              <a className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50" href="#">
                Pricing
              </a>
              <a className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50" href="#">
                Resources
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <Button className="mr-4 hidden md:inline-flex" variant="outline">
              Log in
            </Button>
            <Button className="hidden md:inline-flex">Sign Up</Button>
            <Button className="md:hidden" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </nav> */}
      <header className="max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl md:text-6xl">
              ThreadHive is your all-in-one Clothing Platform
            </h1>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <CheckCircleIcon className="text-green-400 h-5 w-5" />
                <span className="ml-2 text-white">G3's Leader in global employment platforms</span>
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="text-green-400 h-5 w-5" />
                <span className="ml-2 text-white">90% customer satisfaction rate</span>
              </li>
            </ul>
            <Button className="mt-6 bg-white text-[#0C4A6E]">Get Started Now!</Button>
          </div>
          <div>
            <img
              alt="Tailor working on clothes"
              className="rounded-lg w-full h-auto"
              height="360"
              src="/placeholder.svg"
              style={{
                aspectRatio: "360/360",
                objectFit: "cover",
              }}
              width="360"
            />
            <div className="flex justify-between mt-6 flex-col sm:flex-row">
              <Button className="bg-white text-[#0C4A6E] mb-4 sm:mb-0" variant="secondary">
                Find tailors near you
              </Button>
              <Button className="bg-[#F4CA64] text-[#0C4A6E]">Find perfect Stitch-Partner</Button>
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">
        <section className="text-center py-12 bg-white rounded-lg">
          <h2 className="text-3xl font-bold text-[#0C4A6E] sm:text-4xl md:text-5xl">
            Trusted by 25,000+ companies from startups to enterprise
          </h2>
          <div className="flex flex-wrap justify-center items-center mt-8 gap-4">
            <img
              alt="Shopify logo"
              className="m-4 sm:m-0"
              height="40"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/40",
                objectFit: "cover",
              }}
              width="100"
            />
            <img
              alt="Klarna logo"
              className="m-4 sm:m-0"
              height="40"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/40",
                objectFit: "cover",
              }}
              width="100"
            />
            <img
              alt="Reddit logo"
              className="m-4 sm:m-0"
              height="40"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/40",
                objectFit: "cover",
              }}
              width="100"
            />
            <img
              alt="Nike logo"
              className="m-4 sm:m-0"
              height="40"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/40",
                objectFit: "cover",
              }}
              width="100"
            />
            <img
              alt="Zapier logo"
              className="m-4 sm:m-0"
              height="40"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/40",
                objectFit: "cover",
              }}
              width="100"
            />
            <img
              alt="NU logo"
              className="m-4 sm:m-0"
              height="40"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/40",
                objectFit: "cover",
              }}
              width="100"
            />
            <img
              alt="Revolut logo"
              className="m-4 sm:m-0"
              height="40"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/40",
                objectFit: "cover",
              }}
              width="100"
            />
            <img
              alt="FOREVER 21 logo"
              className="m-4 sm:m-0"
              height="40"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/40",
                objectFit: "cover",
              }}
              width="100"
            />
            <img
              alt="Red Bull logo"
              className="m-4 sm:m-0"
              height="40"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/40",
                objectFit: "cover",
              }}
              width="100"
            />
            <img
              alt="Calvin Klein logo"
              className="m-4 sm:m-0"
              height="40"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/40",
                objectFit: "cover",
              }}
              width="100"
            />
            <img
              alt="Intercom logo"
              className="m-4 sm:m-0"
              height="40"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/40",
                objectFit: "cover",
              }}
              width="100"
            />
            <img
              alt="Hello Fresh logo"
              className="m-4 sm:m-0"
              height="40"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/40",
                objectFit: "cover",
              }}
              width="100"
            />
          </div>
        </section>
      </main>
    </div>
  )
}

function CheckCircleIcon(props) {
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
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}


function FlagIcon(props) {
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
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}


function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}