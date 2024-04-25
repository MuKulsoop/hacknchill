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
              <div className="hover:bg-slate-400 w-100">My Orders</div>
            </li>
            <li>
              <div className="hover:bg-slate-400 ">Wishlist</div>
            </li>
            <li>
              <div className="hover:bg-slate-400">My info</div>
            </li>
            <li>
              <div className="hover:bg-slate-400">Sign Out</div>
            </li>
          </ul>
        </div>
        <div className="text-slate-700 col-span-9 ml-2">
          <h1 className="text-slate-700 text-2xl">My Info</h1>
          <h2 className="text-slate-700 text-xl pt-2">Contact Details</h2>
          <div class="flex items-center justify-between border-b border-gray-300 py-4 px-6">
            <div>
              <div class="font-bold text-lg text-slate-400">Name</div>
              <span class="ml-1">Jhanvi</span>
            </div>
            <div class="flex items-center">
              <span class="mr-2 cursor-pointer">Change</span>
              <button class="flex items-center justify-center bg-blue-500 text-white rounded-full w-8 h-8 hover:bg-blue-600 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
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
          <div class="flex items-center justify-between border-b border-gray-300 py-4 px-6">
            <div>
              <div class="font-bold text-lg text-slate-400">Email Address</div>
              <span class="ml-1">Jhanvi@gmail.com</span>
            </div>
            <div class="flex items-center">
              <span class="mr-2 cursor-pointer">Change</span>
              <button class="flex items-center justify-center bg-blue-500 text-white rounded-full w-8 h-8 hover:bg-blue-600 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
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
          <div class="flex items-center justify-between border-b border-gray-300 py-4 px-6">
            <div>
              <div class="font-bold text-lg text-slate-400">Phone Number</div>
              <span class="ml-1">8980252445</span>
            </div>
            <div class="flex items-center">
              <span class="mr-2 cursor-pointer">Change</span>
              <button class="flex items-center justify-center bg-blue-500 text-white rounded-full w-8 h-8 hover:bg-blue-600 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
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
          <div class="flex items-center justify-between border-b border-gray-300 py-4 px-6">
            <div>
              <div class="font-bold text-lg text-slate-400">Password</div>
              <span class="ml-1">*********</span>
            </div>
            <div class="flex items-center">
              <span class="mr-2 cursor-pointer">Change</span>
              <button class="flex items-center justify-center bg-blue-500 text-white rounded-full w-8 h-8 hover:bg-blue-600 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
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
          <div className="card w-96 bg-slate-300 rounded-xl">
                <h2 className="p-3">Jhanvi Shah</h2>
                <h3 className="p-2">8852486120</h3>
                <p>1/4 Pragatinagar Flats, opp. jain derasar , near Jain
derasar, Vijaynagar road </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
