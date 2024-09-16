"use client";

import React, { forwardRef } from "react";
import Image from "next/image";
import { RiSearchLine } from "react-icons/ri";
import { Data } from "@/constants/types";

interface SearchBarProps {
  placeholder: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar:React.FC<SearchBarProps> = ({ placeholder, setData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };
  return (
    <div className="flex-1 flex-center relative">
      <input
        type="search"
        placeholder={placeholder}
        className="form-input w-full h-8 rounded-[5px] border-none outline-none px-10 pr-12 py-3 input bg-input"
        onChange={handleChange}
      />
      <RiSearchLine size={20} color="#A5A5A5" className="absolute top-1 left-4 mt-[2px]"/>
      <Image
        src="/assets/images/send.png"
        alt="search"
        width={13}
        height={14}
        className="absolute top-2 right-4 mt-[2px] cursor-pointer"
      />
    </div>
  );
};

export default SearchBar;