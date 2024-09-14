import Image from "next/image"
import React from "react"

interface Props {
  image: string,
  text: string,
}

const SignupSidebar:React.FC<Props> = ({ image, text }) => {
  return (
    <div className="flex-1">
      <div className="h-full w-full bg-cover relative bg-no-repeat bg-center bg-[url(/assets/images/man-office.png)]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10" />
        <div className="absolute pl-20 py-12 h-full hidden md:flex justify-between flex-col z-50">
          <div className="flex items-end">
            <Image
              src={image}
              alt="sekure business"
              width={200}
              height={30}
              className="w-[130.34px] h-[25.2px] object-contain mr-1"
              />
            <div className="flex-center w-[68px] h-[22px] py-3 px-10 bg-primary rounded-[6px]">
              <h1 className="text-white font-bold text-sm leading-[22.19px]">Business</h1>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-2">
            <p className="text-white font-semibold text-[30px] leading-[27px] tracking-[-1px] w-[436px]">
              {text}
            </p>

            <p className="text-[10px] leading-4 font-light text-white">Ibrahima Adiouf, <span className="font-semibold">CEO AfroBritish</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupSidebar
