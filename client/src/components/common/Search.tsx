"use client"
import  { useEffect, useState } from "react";
import { SearchIcon } from "../../assets/icons";
import useDebounce from "../../hooks/useDebounce";

type props = {
  searchValue?: (value: string) => void;
  placeholder?: string;
  className?: string;
};

const Search = ({ searchValue, placeholder, className }: props) => {
  const [search, setSearch] = useState<string>("");

  const debouncedSearchTerm = useDebounce(search, 1000);
  useEffect(() => {
    searchValue && searchValue(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <div className={`${className} relative w-full max-w-[320px] text-gray-500`}>
      <SearchIcon className="absolute bottom-0 left-2 top-0 m-auto h-[20px] w-[20px]" />
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        placeholder={placeholder ? placeholder : "Search"}
        className="customInputCSS w-full px-[14px] py-[10px] pl-[35px] text-gray-700 outline-none"
      />
    </div>
  );
};

export default Search;
