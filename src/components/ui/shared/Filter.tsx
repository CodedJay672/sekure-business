import Image from "next/image"

const Filter = () => {
  return (
    <Image
      src="/assets/images/filter.png"
      alt="filter"
      width={89}
      height={32}
      className="object-cover cursor-pointer mx-3"
    />
  )
}

export default Filter
