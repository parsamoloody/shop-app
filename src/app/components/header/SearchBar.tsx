'use client';
import { useState } from 'react';
import { BiCartAlt } from "react-icons/bi";
import Logo from "./Logo";
import RegisterButton from './RegisterButton';

const SearchForm = () => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search query:', query);
    // Handle search logic here
  };

  return (
    <div className="searchBar flex space-x-6 px-3 justify-between w-full items-center">
        {/* Cart */}
      <div className="cart h-full flex items-center">
        <BiCartAlt
        className="text-4xl text-gray-500" />
    </div>
    <RegisterButton styling='hidden md:block' />
         
    <form onSubmit={handleSubmit} className="flex-1 pr-2">
      <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        {/* Search */}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-gray-200 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="what are you looking for?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
        >
          {/* Search */}
        </button>
      </div>
    </form>
    <Logo styling="hidden md:block" />

    </div>
  );
};

export default SearchForm;
