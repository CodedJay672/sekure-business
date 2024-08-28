import { ICardDetails } from "@/constants";

const Card = ({ data1, data2, data3 }: ICardDetails) => {
  return (
    <div className="w-full h-[78.43px] px-[14px] py-3 bg-white flex-between rounded-[10px]">
      <div className="flex-1 flex flex-col">
        <h2 className="text-[12px] leading-[24.5px] tracking-[-0.5px] font-[500px] text-dark3">{data1.title}</h2>
        <p className="text-[12px] leading-[24.5px] tracking-[-0.5px] font-normal text-dark3">{data1.value}</p>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="w-full flex justify-start items-center p-1">
          <h2 className="text-[12px] leading-[3px] tracking-[-0.5px] flex-1 font-normal text-dark3 mr-1">{data2.title}</h2>
          <p className="text-[12px] leading-[12px] tracking-[-0.5px] flex-1 font-normal text-dark3 text-left">{data2.value}</p>
        </div>
        <div className="w-full flex justify-start items-center p-1">
          <h2 className="text-[12px] leading-[3px] tracking-[-0.5px] flex-1 font-normal text-dark3 mr-1">{data3.title}</h2>
          <p className="text-[12px] leading-[12px] tracking-[-0.5px] flex-1 font-normal text-dark3 text-left">{data3.value}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;
