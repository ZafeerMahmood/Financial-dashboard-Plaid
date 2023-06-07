import { useState, useEffect } from "react";

export default function NavbarHome() {
  const [openNav, setOpenNav] = useState(false);
  const [moobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >=786  && setOpenNav(false)
    );
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 786 && setMobileNav(false)
    );
  }, []);

  return (
    <div className="mx-auto max-w-screen bg-slate-950 py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        {/* LOGOHERE */}
        <div className="mr-4 cursor-pointer py-1.5 font-bold text-lg  text-white ">
          Dashboard
        </div>

        <div className="flex space-x-4">
          <button className="hidden bg-blue-500 lg:inline-block">
            <span>Link</span>
          </button>

          <button
            className="hidden bg-blue-500 lg:inline-block"
>
            <span>Refresh</span>
          </button>
        </div>

        <div
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => {
            setOpenNav(!openNav), setMobileNav(!moobileNav);
          }}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </div>
      </div>
      {moobileNav ? (
        <div className="flex flex-col space-y-2">
          <button className="bg-blue-500">
            <span>Link</span>
          </button>
          <button className="bg-blue-500">
            <span>Refresh</span>
          </button>
        </div>
      ) : null}
    </div>
  );
}
