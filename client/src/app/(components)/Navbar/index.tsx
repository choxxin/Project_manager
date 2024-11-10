import Link from "next/link";
import React from "react";
// import { Search } from "lucid-react";
import { CiSearch, CiSettings } from "react-icons/ci";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 dark:bg-black dark:px-4 dark:py-3">
      {/* search Bar  */}
      <div className="flex items-center gap-8   ">
        <div className="relative flex h-min w-[200px]">
          <CiSearch className="absolute left-[4px] top-1/2 mr-2 h-5 w-5  -translate-y-1/2 transform cursor-pointer dark:text-white" />
          <input
            className="w-full rounded-md border border-gray-300 bg-gray-50 p-2 pl-8 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
            placeholder="Search"
          />
        </div>
      </div>

      {/* Icons */}

      <div>
        <Link
          href={"/settings"}
          className="h-min w-min rounde p-2 hover:bg-gray-100"
        >
          <CiSettings className="h-6 w-6 cursor-pointer dark:text-white" />
        </Link>
        <div className="ml-2 mr-5 hidden min-h-[2em] w-[0.1rem] bg-gray-300 md:inline-block"></div>
      </div>
    </div>
  );
};
export default Navbar;
