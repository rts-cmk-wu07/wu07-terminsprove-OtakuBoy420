import { HiSearch } from "@react-icons/all-files/hi/HiSearch";
import { useState } from "react";

export default function SearchField({ searchValue, setSearchValue }) {
  return (
    <div className="relative w-full pr-4">
      <HiSearch size={20} className="absolute left-1 top-1/2 -translate-y-1/2 text-inputText" />

      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
        className={`w-full rounded-lg border-2 border-inputText bg-inputBg py-1.5 pl-6 text-sm text-inputText placeholder:text-inputText focus:border-black focus:outline-none`}
        placeholder="Search"
        aria-label="Search Field"
      />
    </div>
  );
}
