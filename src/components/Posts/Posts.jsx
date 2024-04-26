const Posts = () => {
  return (
    <>
      <div className="flex items-center justify-center">
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
    </>
  );
};

export default Posts;
