import "./Details.css";

const Details = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 mt-8">
        <div className="text-black col-span-2 ml-9 ">
          <h1 className="text-black text-2xl pl-">Hello Jhanvi</h1>
          <p className="pt-4">Welcome to your Account</p>
          <ul className="options flex flex-col mt-7 items-center ">
            <li>
              <div className="hover:bg-slate-100 w-100 cursor-pointer px-11 py-3">
                My Orders
              </div>
            </li>
            <li>
              <div className="hover:bg-slate-100 cursor-pointer px-11 py-3 ">
                Wishlist
              </div>
            </li>
            <li>
              <div className="hover:bg-slate-100 cursor-pointer px-11 py-3 ">
                My info
              </div>
            </li>
            <li>
              <div className="hover:bg-slate-100 cursor-pointer px-11 py-3 ">
                Sign Out
              </div>
            </li>
          </ul>
        </div>
        <div className="text-slate-700 col-span-9 ml-2">
          <h1 className="text-slate-700 text-2xl">My Info</h1>
          <h2 className="text-slate-700 text-xl pt-2">Contact Details</h2>
          <div className="flex items-center justify-between border-b border-gray-300 py-4 px-6">
            <div>
              <div className="font-bold text-lg text-slate-400">Name</div>
              <span className="ml-1">Jhanvi</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2 cursor-pointer">Change</span>
              <button className="flex items-center justify-center bg-blue-500 text-white rounded-full w-8 h-8 hover:bg-blue-600 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 3.293a1 1 0 0 1 1.414 1.414L4.707 18.707a1 1 0 0 1-1.414-1.414L16.707 3.293zM18 10a1 1 0 0 1-1 1h-4a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1zM6 10a1 1 0 0 1-1-1V5a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between border-b border-gray-300 py-4 px-6">
            <div>
              <div className="font-bold text-lg text-slate-400">Email Address</div>
              <span className="ml-1">Jhanvi@gmail.com</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2 cursor-pointer">Change</span>
              <button className="flex items-center justify-center bg-blue-500 text-white rounded-full w-8 h-8 hover:bg-blue-600 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 3.293a1 1 0 0 1 1.414 1.414L4.707 18.707a1 1 0 0 1-1.414-1.414L16.707 3.293zM18 10a1 1 0 0 1-1 1h-4a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1zM6 10a1 1 0 0 1-1-1V5a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between border-b border-gray-300 py-4 px-6">
            <div>
              <div className="font-bold text-lg text-slate-400">Phone Number</div>
              <span className="ml-1">8980252445</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2 cursor-pointer">Change</span>
              <button className="flex items-center justify-center bg-blue-500 text-white rounded-full w-8 h-8 hover:bg-blue-600 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 3.293a1 1 0 0 1 1.414 1.414L4.707 18.707a1 1 0 0 1-1.414-1.414L16.707 3.293zM18 10a1 1 0 0 1-1 1h-4a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1zM6 10a1 1 0 0 1-1-1V5a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between border-b border-gray-300 py-4 px-6">
            <div>
              <div className="font-bold text-lg text-slate-400">Password</div>
              <span className="ml-1">*********</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2 cursor-pointer">Change</span>
              <button className="flex items-center justify-center bg-blue-500 text-white rounded-full w-8 h-8 hover:bg-blue-600 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 3.293a1 1 0 0 1 1.414 1.414L4.707 18.707a1 1 0 0 1-1.414-1.414L16.707 3.293zM18 10a1 1 0 0 1-1 1h-4a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1zM6 10a1 1 0 0 1-1-1V5a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex justify-between my-3">
            <span>Address</span>
            <span className="text-black cursor-pointer"> Add new </span>
          </div>
          <div className="flex gap-7 mb-4">
            <div className="card w-96 bg-gray-100 rounded-xl pb-2">
              <h2 className="p-3">Jhanvi Shah</h2>
              <h3 className="p-2  text-gray-500">8852486120</h3>
              <p className="p-2  text-gray-500">
                1/4 Pragatinagar Flats, opp. jain derasar , near Jainderasar,
                Vijaynagar road{" "}
              </p>
              <button className="border text-gray-500 border-gray-500 px-4 py-2 rounded-md m-3 hover:bg-gray-200">
                {" "}
                Home{" "}
              </button>
              <button className="border text-gray-500 border-gray-500 px-4 py-2 rounded-md m-3 hover:bg-gray-200">
                {" "}
                Default Shipping Address{" "}
              </button>
              <span className="m-4 border-r-2 border-gray-300 pr-5 cursor-pointer">
                Remove
              </span>
              <span className=" cursor-pointer">Edit</span>
            </div>
            <div className="card w-96 bg-gray-100 rounded-xl pb-2">
              <h2 className="p-3">Jhanvi Shah</h2>
              <h3 className="p-2  text-gray-500">8852486120</h3>
              <p className="p-2  text-gray-500">
                1/4 Pragatinagar Flats, opp. jain derasar , near Jainderasar,
                Vijaynagar road{" "}
              </p>
              <button className="border text-gray-500 border-gray-500 px-4 py-2 rounded-md m-3 hover:bg-gray-200">
                {" "}
                Home{" "}
              </button>
              <button className="border text-gray-500 border-gray-500 px-4 py-2 rounded-md m-3 hover:bg-gray-200">
                {" "}
                Default Shipping Address{" "}
              </button>
              <span className="m-4 border-r-2 border-gray-300 pr-5 cursor-pointer">
                Remove
              </span>
              <span className=" cursor-pointer">Edit</span>
            </div>
            <div className="card w-96 bg-gray-100 rounded-xl pb-2">
              <h2 className="p-3">Jhanvi Shah</h2>
              <h3 className="p-2  text-gray-500">8852486120</h3>
              <p className="p-2  text-gray-500">
                1/4 Pragatinagar Flats, opp. jain derasar , near Jainderasar,
                Vijaynagar road{" "}
              </p>
              <button className="border text-gray-500 border-gray-500 px-4 py-2 rounded-md m-3 hover:bg-gray-200">
                {" "}
                Home{" "}
              </button>
              <button className="border text-gray-500 border-gray-500 px-4 py-2 rounded-md m-3 hover:bg-gray-200">
                {" "}
                Default Shipping Address{" "}
              </button>
              <span className="m-4 border-r-2 border-gray-300 pr-5 cursor-pointer">
                Remove
              </span>
              <span className=" cursor-pointer">Edit</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
