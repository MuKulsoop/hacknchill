import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from 'react';
import "./Home.css";
import FadeIn from "../FadeIn/FadeIn.jsx";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

// TickIcon component for outlined tick icon
function TickIcon(props) {
  const {
    size = 24,
    strokeWidth = 2,
    color = "currentColor",
    backgroundColor = "white",
    ...rest
  } = props;


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
      <path
        d="M9 12l2 2 4-4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
  const [counterOn, setCounterOn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the element is in view
      // Here you can add your logic to determine when the counter should start
      // For now, let's just set it to start when it enters the viewport
      setCounterOn(true);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove scroll event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className=" min-h-screen ">
      <header className="bg-[#005D9c] max-w-100 pt-10 pb-10 px-4 sm:px-6 lg:px-8 rounded-bl-lg rounded-br-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex items-start justify-center flex-col">
            <FadeIn delay={0.2} direction="down">
              <h1 className="text-4xl font-500 text-white leading-tight sm:text-5xl md:text-6xl">
                ThreadHive is your all-in-one Clothing Platform
              </h1>
            </FadeIn>

            {/* <FadeIn delay={0.2} direction="down">
              hello 
             </FadeIn> */}
            <ul className="mt-4 space-y-2 flex flex-row items-start sm:flex-col sm:justify-center sm:items-start">
              <FadeIn delay={0.2} direction="right">
                <li className="flex items-center text-white pl-0">
                  <TickIcon size={30} color="black" backgroundColor="white" />
                  <span className="ml-2">
                    G3's Leader in global employment platforms
                  </span>
                </li>
              </FadeIn>
              <FadeIn delay={0.25} direction="right">
                <li className="flex items-center text-white pl-0">
                  <TickIcon size={30} color="black" backgroundColor="white" />
                  <span className="ml-2">90% customer satisfaction rate</span>
                </li>
              </FadeIn>

            </ul>
            <FadeIn delay={0.2} direction="up">
              <Button
                className="mt-6 rounded-lg bg-white text-[#0C4A6E] px-4 py-2 flex items-center justify-between hover:bg-[#e2e2e2]"
                onClick={() => {
                  window.location.href = "/login";
                }}
              >
                Get Started Now <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
            </FadeIn>

          </div>
          <FadeIn delay={0.2} direction="left">
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
          </FadeIn>

        </div>
      </header>
      <main className="max-w-7xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">
        <section className="text-center py-12 bg-white rounded-lg">
          <FadeIn delay={0.2} direction="down">
            <h2 className="text-3xl font-bold text-[#8f8f8f] sm:text-4xl md:text-5xl">
              Trusted by <span className="text-[#424242]">25,000+</span> companies
              from startups to enterprise
            </h2>
          </FadeIn>
          <FadeIn delay={0.3} direction="left">
            <div className="flex flex-wrap justify-center items-center mt-8 gap-4">
              {/* Placeholder images */}
              <div className="flex flex-wrap justify-center items-center mt-8 gap-6">
                <img
                  src="/images/Company1.jpeg"
                  alt="Company 1"
                  className="h-13"
                />
                <img
                  src="/images/Company2.jpeg"
                  alt="Company 2"
                  className="h-12"
                />
                <img
                  src="/images/Company3.jpeg"
                  alt="Company 3"
                  className="h-18"
                />
                <img
                  src="/images/Company4.jpeg"
                  alt="Company 4"
                  className="h-8"
                />
                <img
                  src="/images/Company5.jpeg"
                  alt="Company 5"
                  className="h-8"
                />
                <img
                  src="/images/Company6.jpeg"
                  alt="Company 5"
                  className="h-10"
                />
              </div>
            </div>
          </FadeIn>

        </section>
      </main>
      <main className="bg-gray-800 w-full p-10 rounded-lg">
        <FadeIn delay={0.2} direction="down">
          <h2 className="text-white text-4xl font-bold text-center mb-8">
            You can do it all. <br /> With ThreadHive.
          </h2>
        </FadeIn>
        <section className="mx-auto p-8 flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8" style={{ borderBottom: "1.5px solid #ddd", width: "90%" }}>
          {/* Left Card - Tailor Discovery & Alterations */}
          <FadeIn delay={0.2} direction="right">
            <div className="bg-white rounded-lg flex-1">
              <div className="p-8 pt-10 ">
                <h3 className="text-3xl font-semibold mb-3">Tailor Discovery & Alterations</h3>
                <p className="text-black mb-5">Instead of setting up your own entities, experience the speed of HireGO’s automated global hiring. Create compliant employment agreements and set up payroll and benefits—in a matter of clicks.</p>
                <div className="rounded-lg h-80 bg-cover bg-center" style={{ backgroundImage: "url(https://s3-alpha-sig.figma.com/img/a565/2b40/e3e2f7b926d44b2f122ad82fc873447a?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KUX6UHX7bRiBvSScawRic37zcuVDBQqCctFssNNiDS~e4xF3NS13tmvb67tQEkS4tC1-Pd8inr5xmy3AYR8hq1ZDZjUFYb~nlQoZ5KKkN~yBkisLRj~qjSW08MXbDJQca6K6tkLkUajAAN0~EZaWNfPBVnFMK6IooxR58yx3QOCMTQu29uGSivRAIgYrSPiTPzzXyHYaBirgCdGfKiq3UO2qDmFZoZ5~rAWXaojlaKl2MD6SQ1Gq9znCb9ZryJiAjZX0Czb0MRL1iOLkpf~GtaW2tJfSH9F5hsoUQv6ZzUm2pdsy2k5a6zQN545YjY3x96CbG263IXSMHpn3xYBYjQ__)", backgroundPosition: "0px -300px" }}></div>
                <Button className="mt-6 rounded-lg bg-gray-300 text-[#0C4A6E] py-2 px-4 hover:bg-[#e2e2e2]">Find tailors around you <ArrowRightIcon className="ml-2 h-5 w-5" /></Button>
              </div>
            </div>
          </FadeIn>

          {/* Right Cards Container */}
          <FadeIn delay={0.2} direction="left" className="flex-1">
            <div className="w-full flex flex-col h-full justify-between space-y-5">
              {/* Top Right Card - Find Best Manufacturers near You */}
              <div className="bg-[#7EBD42] rounded-lg p-6 ">
                <h3 className="text-white text-3xl font-semibold mb-4">Find Best Manufacturers near You</h3>
                <p className="text-white">Generate, edit, and sign compliant contracts in minutes and access management tools to streamline paperwork, onboarding, and payments.</p>
                <Button className="mt-6 rounded-lg bg-white text-[#0C4A6E] py-2 px-4 hover:bg-[#e2e2e2]">Find nearby Manufacturers <ArrowRightIcon className="ml-2 h-5 w-5" /></Button>
              </div>

              {/* Bottom Right Card - Custom Alterations & Clothing Creation */}
              <div className="bg-[#005D9c] rounded-lg p-6  ">
                <h3 className="text-white text-3xl font-semibold mb-4">Custom Alterations & Clothing Creation</h3>
                <p className="text-white">Assess global worker misclassification risks and compliantly convert contractors to full-timers, all under one platform.</p>
                <Button className="mt-6 rounded-lg bg-white text-[#0C4A6E] py-2 px-4 hover:bg-[#e2e2e2]">Customize it all <ArrowRightIcon className="ml-2 h-5 w-5" /></Button>
              </div>
            </div>
          </FadeIn>
        </section>





        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
          <section
            className="mx-auto p-8 pb-0 flex flex-col lg:flex-row items-center justify-evenly"
            style={{
              width: "80%",
            }}
          >
            <div className="text-center">
              <h1 className="text-5xl text-blue-300 mb-2">{counterOn && <CountUp start={0} end={25} duration={5} delay={2} />}+</h1>
              <p className="text-sm text-white">Team of more than 25 Hivers</p>
            </div>

            <div className="text-center">
              <h1 className="text-5xl text-blue-300 mb-2">{counterOn && <CountUp start={0} end={25000} duration={4} delay={2} />}+</h1>
              <p className="text-sm text-white">Trusted by 25,000+ customers</p>
            </div>

            <div className="text-center">
              <h1 className="text-5xl text-blue-300 mb-2">&lt;{counterOn && <CountUp start={0} end={48} duration={5} delay={2} />}hrs</h1>
              <p className="text-sm text-white">
                Onboard Talent in as little as 48 hours
              </p>
            </div>
          </section>
        </ScrollTrigger>

      </main>
      <main className="w-full p-10 bg-gray-100 flex items-center flex-col">
        <FadeIn delay={0.2} direction="down">
          <h1
            className="text-5xl text-stone-800 text-center mb-8 mt-8 font-bold"
            style={{
              width: "50%",
            }}
          >
            Discover Expert Tailors in your Area
          </h1>
        </FadeIn>

        <section className="mx-auto p-8 w-100 flex flex-col items-center justify-center">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-evenly w-full">
            <FadeIn delay={0.2} direction="right">
              <div className="w-full lg:w-1/2 flex flex-col items-start justify-center lg:order-2" style={{
                width: "80%"
              }}>
                <h2 className="text-4xl font-semibold mb-4 mt-4 text-[#005D9c]">
                  Tailor Made Solutions for Your Style
                </h2>
                <p className="text-gray-700  mb-5">
                  Our expert tailors offer personalized recommendations to perfect
                  your style. With meticulous attention to detail and unparalleled
                  craftsmanship, they ensure every garment reflects your unique
                  vision.
                </p>
                <Button className="mt-6 rounded-lg bg-white text-[#0C4A6E] py-2 items-center hover:bg-[#e2e2e2] border-2 border-solid border-gray-400">
                  Explore Tailors & Atelier Solutions{" "}
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="left">
              <img
                className="w-full lg:w-2/5 rounded-lg mt-8 lg:mt-0"
                src="https://s3-alpha-sig.figma.com/img/f322/b0d8/c285a2f1a4f29c33ba23df12cc8aef6f?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CdwbKLVZzTZnvHreJ6vQgv3CO9L1meU6c6CxGg82LZcKVqDPHO9nBem8mysBZ-sRRY0~bRnYlc9RrCCfGlixtQbVlMX12r-fRwVCdJROXEd3rv~9HCU9vBLXZL6KYvVTn4YdeCOx~jDY7p90knZ-e4QhNlSmU~6MM~MoKGegOPRjnAjXAb~5UngMYihK8XlePxmOVhKj3TuSYauC0loxJRHPk74MMH2~tI13ZfSqIW1SvJ0ow5aiLWqB3t5M74oCEPCysX0yKs0Sd~IOU4dgajQwYEoDzc65VIL94dMYJScVRgYBP40WN7mpFdl5f9LhJFgKJmtKSdwSZZjwyObCRQ__"
                alt=""
                style={{
                  width: "60%"
                }}
              />
            </FadeIn>

          </div>
          <div className="flex flex-col lg:flex-row items-center justify-evenly w-full mt-8">

            <img
              className="w-full lg:w-2/5 rounded-lg mb-8 lg:mb-0"
              src="https://s3-alpha-sig.figma.com/img/c67c/989d/f13c6b02f2c704a969ae98967095ecc2?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QRRkGhKBKh8o7vhRTLjKNexNSeKuWJMZ0dsJgHETKKtQyqgKh4IyUgBSco-ufUFZNPVQVHB9Edo9CBRgBiJ4VG5OXTTDP3PQ3Y~F3fE8ZjtL2v~OUNivxz8eUHxrEB59yLQ96lU6pu89cASfOCg7JCmax88O-4CVJM0m8zH2kTcQSgq4nZ-t2PgdtqHEviZcgkrP8gh2HueFxoZA4OylQXHGQcvvDUZruoqFect6Ns92382JAumNrST21MXN2QHtQvmlLkvuGSkI~h57Gd4He9vNR2OvT7MZzmGvZKSBEYS~R~Y3m9ek6MbG4JCUbPrd-J5OofaO1jW9L8X12d9u~Q__"
              alt=""
              style={{ width: "40%" }} // Adjusted image width
            />


            <div className="lg:w-2/5 flex flex-col items-start justify-center p-10" style={{ width: "70%" }}>
              <h2 className="text-4xl font-semibold mb-4 text-[#7EBD42]">
                Your Style, Perfected. <br /> Every personalization Fulfilled.
              </h2>
              <p className="text-gray-700 mb-5">
                At ThreadHive, our expert tailors offer personalized
                recommendations to perfect your style. With meticulous attention
                to detail and unparalleled craftsmanship, they ensure every
                garment reflects your unique vision. Discover the difference of
                tailored excellence at ThreadHive.
              </p>
              <Button className="mt-6 rounded-lg bg-white text-[#0C4A6E] py-2 items-center hover:bg-[#e2e2e2] border-2 border-solid border-gray-400">
                Create your Designs <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
            </div>

          </div>


        </section>
        <FadeIn delay={0.2} direction="down">
          <h1
            className="text-5xl text-stone-800 text-center mb-8 mt-8 font-bold"
            style={{
              width: "60%",
            }}
          >
            Get started with ThreadHive in three easy steps.
          </h1>
        </FadeIn>

        <section className="flex flex-col lg:flex-row items-center">
          {/* Left Image Container */}
          {/* <FadeIn delay={0.2} direction="right"> */}
          <div className="lg:w-1/2  rounded-lg p-7" >
            <img
              src="https://s3-alpha-sig.figma.com/img/44b0/b905/614782fdad8f444ab0e9a63191f57132?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WY7t284FztZj9mATpgTPjqqCFdA5BPBGSGf1-mSkRi3UrSj6zGntciPszJLgdJ-WhPo6xDgLeqwD2ApRUMlYR5humtXCJJ40P6yro~FKy0L5bap8tLqYjnlMcMHCOFnqXd6pVy0~Lubp3crh1YJ4eaG2~haBKJ7jGKlXCbalmAYJuXAUZU9AHiiQculXODo5De0xVJVxMNeT1bQe0EMeiOBCuvkF7hIEZ4Y36yH49uGzuSoeX8bTnnwVUlaxINIw81IfSlNUxpEfqul0lEDSjXx~VZYgftk-lOqNWI7LZfcR~qCk6R3P2OsqmoSJxJwDYeY8a--NyL5061ZSVwyMAw__"
              alt=""
              className="rounded-lg bg-purple-100"
            // style={{
            //   width:"50%"
            // }}
            />
          </div>
          {/* </FadeIn> */}


          {/* Right Text Containers */}
          {/* <FadeIn delay={0.3} direction="left"> */}
          <div className="lg:w-1/2  "
          >
            {/* Section 1 */}
            <div className="flex items-start mb-4 bg-[#eeeeee] rounded-lg p-6 mt-4 lg:mt-0">
              <div className="min-w-8 min-h-8 bg-purple-400 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                1
              </div>
              <div>
                <h3 className="text-3xl text-stone-800 font-bold">
                  Find your Tailor/Manufacturer
                </h3>
                <p>
                  Book a call with our global workforce consultants. We’ll set
                  you up with a free account ready to suit your team’s needs.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="flex items-start mb-4 bg-[#eeeeee] rounded-lg p-6 mt-4 lg:mt-0">
              <div className="min-w-8 min-h-8 bg-purple-400 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                2
              </div>
              <div>
                <h3 className="text-3xl text-stone-800 font-bold">
                  Chat with them and Negotiate
                </h3>
                <p>
                  From new hires to your existing workforce, onboard
                  effortlessly with our self-serve platform.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="flex items-start mb-4 bg-[#eeeeee] rounded-lg p-6 mt-4 lg:mt-0">
              <div className="min-w-8 min-h-8 bg-purple-400 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                3
              </div>
              <div>
                <h3 className="text-3xl text-stone-800 font-bold">
                  Start the business
                </h3>
                <p>
                  From navigating local laws to support for your team members,
                  our dedicated team will help you get set up seamlessly.
                </p>
                <Button className="mt-6 rounded-lg bg-white text-[#0C4A6E] py-2 items-center hover:bg-[#e2e2e2] border-2 border-solid border-gray-400">
                  Start Now <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          {/* </FadeIn> */}

        </section>
      </main>
    </div>
  );
}
