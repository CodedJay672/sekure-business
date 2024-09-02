import { Button } from "@/components/ui/button";
import Image from "next/image";

const CardDetails = ({ params } : { params: { id: string } }) => {
  const { id } = params;
  
  return (
    <section className="wrapper">
      <div className="w-[354px] py-[23px] px-[14px] bg-white flex flex-col rounded-[10px]">
        <div className="flex-between">
          <h1 className="text-base leading-5 font-semibold text-dark3 flex-1">Details de carte</h1>
          <div className="w-[70px] h-[29px] rounded-[22px] bg-primary-fade flex-center">
            <span className="text-primary text-xs leading-3 tracking-[-0.5%]">Active</span>
          </div>
        </div>
        <span className="flex-1 text-xs leading-4 text-placeholder-text">Créé le 05 Aout 2024</span>
        <div className="w-[326px] h-[239px] rounded-[20px] p-5 bg-primary mt-4 relative">
          <Image
            src="/assets/cardbg.png"
            alt="card"
            layout="fill"
            objectFit="contain"
            className="absolute top-0 left-0 z-2"
          />
          <div className="absolute w-full top-0 left-0 p-6">
            <div className="w-full flex-between">
              <Image
                src="/assets/visacard.png"
                alt="card"
                width={102.37}
                height={16.7}
              />
              <Image
                src="/assets/chip.png"
                alt="chip"
                width={32.98}
                height={28.51}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CardDetails;
