import Image from "next/image";
import { MouseEventHandler } from "react";
import { RiSearchLine } from "react-icons/ri";

const SearchBar = ({
  text,
  handleChange,
  handleSubmit
}: {
  text: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: MouseEventHandler<HTMLImageElement>;
}) => {
  return (
    <div className="flex-1 flex-center relative">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Rechercher"
        className="w-full h-8 rounded-[5px] border-none outline-none px-10 pr-12 py-3 input bg-input"
      />
      <RiSearchLine size={20} color="#A5A5A5" className="absolute top-1 left-4 mt-[2px]"/>
      <Image
        src="/assets/images/send.png"
        alt="search"
        width={13}
        height={14}
        className="absolute top-2 right-4 mt-[2px] cursor-pointer"
        onClick={handleSubmit}
      />
    </div>
  )
}

export default SearchBar
