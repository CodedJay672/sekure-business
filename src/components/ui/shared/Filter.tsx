import Image from "next/image"

const Filter = () => {
  return (
    <Image
      src="/assets/images/filter.png"
      alt="filter"
      width={89}
      height={32}
      className="w-auto h-auto object-cover cursor-pointer mx-3 rounded-[9px]"
    />
  )
}

export default Filter
