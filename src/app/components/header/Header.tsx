"use client";

import { useState } from "react";
import Link from "next/link";
import SearchForm from "./SearchBar";
import Logo from "./Logo";
import RegisterButton from "./RegisterButton";
import categories from "../../../../public/data/categories.js";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 border-b pb-2 lg:order-last lg:mt-4 md:px-4 lg:px-6">
      <div className="flex flex-col">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-3 lg:p-x-2 lg:py-2 xl:py-1 w-full">
          <div className="w-full flex justify-between items-center">
            {/* Register */}
            <RegisterButton styling="md:hidden" />

            {/* Logo */}
            <Logo styling="md:hidden" />

            {/* Hamburger Menu */}
            <HamburgerButton
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              styling="md:hidden"
            />
          </div>

          {/* Navigation Menu */}
          <div
            className={`${
              isOpen ? "translate-x-0" : "translate-x-full"
            } z-50 fixed mt-[17rem] bg-white duration-200 ease-out w-screen right-0 md:w-96 md:pt-40 lg:mt-32 lg:pr-6 border-l `}
            id="navbar-multi-level"
          >
            <div className="hidden md:block">
              <Logo styling="w-full flex justify-center items-center mb-8" />
            </div>
            {/* close menu */}
            <div className="close_menu w-full flex justify-end pr-3 mt-4">
              <HamburgerButton
                styling=""
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />
            </div>
            {/* Menu (category) */}
            <div className="">
              <Categories styling={"flex flex-col "} />
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="searchBar w-full lg:order-first">
          <SearchForm />
        </div>
      </div>
      <div className="small_screen_menu flex items-center px-4 mt-3">
        <Categories styling={"hidden md:flex justify-end"} />
        <HamburgerButton
          styling="hidden md:block"
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
    </nav>
  );
};

// Categories list
const Categories = ({ styling }: { styling: string }) => {
  return (
    <ul className={`${styling} font-medium h-full p-4 mt-4 border w-full border-gray-100 bg-white rtl:space-x-reverse md:mt-0 md:border-0`}>
      {categories[0]?.menu?.map((catName, index) => {
        return (
          <li key={index} className="">
            <Link href="#" className="block px-4 py-2 text-[15px] text-right hover:bg-gray-100">
              {catName.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

// Hamburger
const HamburgerButton = ({
  isOpen,
  setIsOpen,
  styling,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  styling: string;
}) => {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={`${styling} inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200`}
      aria-controls="navbar-multi-level"
      aria-expanded={isOpen}
      aria-haspopup="true"
    >
      <span className="sr-only">Open main menu</span>
      <svg
        className="w-8 
        h-8"
        viewBox="0 0 17 14"
        fill="none"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>
  );
};

export default Navbar;
