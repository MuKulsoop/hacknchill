import { Button } from "@/components/ui/button";

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


const Posts = () => {
  return (

    <div className=" p-10 bg-gray-50">
      <main >

        <h3 className="bg-blue-100 rounded-md border border-solid border-stone-800 px-5 m-5 ml-0 w-[250px]">Welcome to Store, Mr. Gupta</h3>
        <h1 className="text-5xl text-[#000]">Items listed by you so far...</h1>


        <Button
          className="text-xl mt-6 rounded-sm bg-white text-[#000] px-4 py-2 flex items-center justify-between hover:bg-[#e5e5e5] border-2 border-solid border-stone-800"
          onClick={() => {
            window.location.href = "/login";
          }}
        >
          All Products <ArrowRightIcon className="ml-2 h-5 w-5" />
        </Button>
        <section className="flex flex-col my-10 w-full items-center">
          <div className="flex flex-wrap justify-evenly my-5 w-full">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-5">
                <div className="rounded-md border-2 border-solid border-stone-900 min-h-[300px] flex flex-col-reverse mx-3 bg-white">
                  <div className="border-t-2 border-solid border-stone-900">
                    <h3 className="p-3 font-bold">Product Name</h3>
                    <p className="p-2 border-t border-solid border-stone-900 flex flex-row justify-evenly">
                      <span className="font-bold">$79.99</span>
                      <span className="line-through">$99.99</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
      <div className="bg-[#005D9B] px-4 md:px-8 py-8 md:py-12 m-4 md:m-8 rounded-lg ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-12">
          <div className="col-span-1 md:col-span-1 ">
            <h1 className="text-3xl md:text-4xl text-white font-bold">
              Want to list more items?
            </h1>
            <p className="text-white mt-4 md:mt-6">
              As a seller, list as many items as possible to increase the rate of
              getting more orders and be successful.
            </p>
          </div>
          <div className="col-span-1 md:col-span-1">
            <p className="text-white mt-4 md:mt-1">
              Write the name of the item and click continue
            </p>
            <div className="flex mt-4 md:mt-6">
              <input
                type="text"
                className="rounded-md w-60 text-lg md:text-sm px-3 py-1 md:py-2 focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter item name"
              />
              <button className="bg-[#0AD4EB] ml-3 px-3 py-1 md:py-2 rounded-md text-base md:text-sm text-white hover:bg-blue-400 focus:outline-none focus:ring focus:border-blue-300">
                Continue
              </button>
            </div>

          </div>
        </div>
      </div>

    </div>

  );
};

export default Posts;
