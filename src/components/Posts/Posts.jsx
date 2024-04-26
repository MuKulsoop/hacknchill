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

    <div className="flex items-center justify-center flex-col p-10">
      <main className="" style={{
        width: "90%"
      }}>
        <h3 className="bg-blue-100 rounded-md border border-solid border-stone-800 px-5 m-5 ml-0">Welcome to Store, Mr. Gupta</h3>
        <h1 className="text-5xl text-[#000]">Items listed by you so far...</h1>
        <Button
          className="text-xl mt-6 rounded-sm bg-white text-[#000] px-4 py-2 flex items-center justify-between hover:bg-[#e5e5e5] border-2 border-solid border-stone-800"
          onClick={() => {
            window.location.href = "/login";
          }}
        >
          All Products <ArrowRightIcon className="ml-2 h-5 w-5" />
        </Button>
        <section className="flex flex-col my-10 w-full items-center  "
        // style={{
        //   width:"80%"
        // }}
        >
          <div className="flex flex-row items-center justify-evenly my-5" style={{
            width: "100%"
          }}>
            <div className="rounded-md border-2 border-solid border-stone-900 min-h-[300px] w-1/4 mx-3 flex flex-col-reverse">
              <div className="border-t-2 border-solid border-stone-900">
                <h3 className="p-3  font-bold ">Product Name</h3>
                <p className="p-2 border-t border-solid border-stone-900 flex flex-row justify-evenly"><span className="font-bold">$79.99</span><span className="line-through">$99.99</span></p>
              </div>
            </div>
            <div className="rounded-md border-2 border-solid border-stone-900 min-h-[300px] w-1/4 mx-3 flex flex-col-reverse">
              <div className="border-t-2 border-solid border-stone-900">
                <h3 className="p-3  font-bold ">Product Name</h3>
                <p className="p-2 border-t border-solid border-stone-900 flex flex-row justify-evenly"><span className="font-bold">$79.99</span><span className="line-through">$99.99</span></p>
              </div>
            </div>
            <div className="rounded-md border-2 border-solid border-stone-900 min-h-[300px] w-1/4 mx-3 flex flex-col-reverse">
              <div className="border-t-2 border-solid border-stone-900">
                <h3 className="p-3  font-bold ">Product Name</h3>
                <p className="p-2 border-t border-solid border-stone-900 flex flex-row justify-evenly"><span className="font-bold">$79.99</span><span className="line-through">$99.99</span></p>
              </div>
            </div>
            <div className="rounded-md border-2 border-solid border-stone-900 min-h-[300px] w-1/4 mx-3 flex flex-col-reverse">
              <div className="border-t-2 border-solid border-stone-900">
                <h3 className="p-3  font-bold ">Product Name</h3>
                <p className="p-2 border-t border-solid border-stone-900 flex flex-row justify-evenly"><span className="font-bold">$79.99</span><span className="line-through">$99.99</span></p>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-evenly my-5" style={{
            width: "100%"
          }}>
            <div className="rounded-md border-2 border-solid border-stone-900 min-h-[300px] w-1/4 mx-3 flex flex-col-reverse">
              <div className="border-t-2 border-solid border-stone-900">
                <h3 className="p-3  font-bold ">Product Name</h3>
                <p className="p-2 border-t border-solid border-stone-900 flex flex-row justify-evenly"><span className="font-bold">$79.99</span><span className="line-through">$99.99</span></p>
              </div>
            </div>
            <div className="rounded-md border-2 border-solid border-stone-900 min-h-[300px] w-1/4 mx-3 flex flex-col-reverse">
              <div className="border-t-2 border-solid border-stone-900">
                <h3 className="p-3  font-bold ">Product Name</h3>
                <p className="p-2 border-t border-solid border-stone-900 flex flex-row justify-evenly"><span className="font-bold">$79.99</span><span className="line-through">$99.99</span></p>
              </div>
            </div>
            <div className="rounded-md border-2 border-solid border-stone-900 min-h-[300px] w-1/4 mx-3 flex flex-col-reverse">
              <div className="border-t-2 border-solid border-stone-900">
                <h3 className="p-3  font-bold ">Product Name</h3>
                <p className="p-2 border-t border-solid border-stone-900 flex flex-row justify-evenly"><span className="font-bold">$79.99</span><span className="line-through">$99.99</span></p>
              </div>
            </div>
            <div className="rounded-md border-2 border-solid border-stone-900 min-h-[300px] w-1/4 mx-3 flex flex-col-reverse">
              <div className="border-t-2 border-solid border-stone-900">
                <h3 className="p-3  font-bold ">Product Name</h3>
                <p className="p-2 border-t border-solid border-stone-900 flex flex-row justify-evenly"><span className="font-bold">$79.99</span><span className="line-through">$99.99</span></p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className=" bg-[#005D9B] h-48 w-4/6 grid grid-cols-12 m-8 rounded-lg ">
        <div className=" col-span-6 ">
          <h1 className=" text-4xl text-white mt-9 px-9">
            Want to list more items?
          </h1>
          <p className="text-white px-9 py-5">
            {" "}
            As a seller, list as many items as possible the increase the rate
            of getting more orders in order to be successful
          </p>
        </div>
        <div className=" col-span-6">
          <p className=" text-white mt-12">
            Write the name of the item and click continue
          </p>
          <span>
            <input type="text" className=" rounded-sm w-60 text-2xl mt-4" />
          </span>
          <span>
            <button className=" bg-[#0AD4EB] p-1 rounded-sm ml-3  hover:text-blue-200 text-lg">
              Continue
            </button>
          </span>
        </div>
      </div>
    </div>

  );
};

export default Posts;
