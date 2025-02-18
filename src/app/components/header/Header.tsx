"use client";

import { useState } from "react";
import Link from "next/link";
import SearchForm from "./SearchBar";
import Logo from "./Logo";
import RegisterButton from "./RegisterButton";
import categories from '../../../../public/data/categories.js'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 flex flex-col border-b pb-4 lg:order-last">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 w-full">
        <div className="w-full flex justify-between items-center">
          {/* Register */}
          <RegisterButton styling="md:hidden"/>

          {/* Logo */}
          <Logo styling="md:hidden" />

          {/* Hamburger Menu */}
          <HamburgerMenu
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            styling="md:hidden"
          />
        </div>

        {/* Navigation Menu */}
        <div
          className={`${
            isOpen ? "translate-x-0" : "translate-x-full"
          } z-50 fixed mt-[19rem] bg-white duration-200 ease-out w-full`}
          id="navbar-multi-level"
        >
          <ul className="flex flex-col font-medium p-4 mt-4 border border-gray-100 bg-white md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
          {
                    categories[0]?.menu?.map((catName, index) => { 
                      return (
                        <li key={index}>
                          <Link
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            {catName.name}
                          </Link>
                        </li>
                      )
                      })
                   }
          </ul>
        </div>
      </div>

      {/* Search Bar */}
      <div className="searchBar w-full lg:order-first">
        <SearchForm />
      </div>
    </nav>
  );
};

const HamburgerMenu = ({
  isOpen,
  setIsOpen,
  styling
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
