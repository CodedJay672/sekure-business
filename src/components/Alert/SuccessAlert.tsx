"use client";

import { useState } from "react";
import { RiCheckboxCircleFill, RiCloseLine } from "react-icons/ri";
import Button from "../ui/Button";

const SuccessAlert = ({ text }: { text: string }) => {
  const [show, setShow] = useState<Boolean>(true);

  const handleClick = () => {
    setShow(false);
  }

  return (
    <>
    {show && (
      <div className="alert relative">
        <RiCloseLine
          size={11.5}
          className="absolute top-[33.5px] left-[343px] cursor-pointer"
          onClick={handleClick}
          />
        <RiCheckboxCircleFill color="#18BC7A" size={34.66} className="fill-primary" />
        <p className="font-semibold text-base leading-[19px] text-center">{text}</p>
        <Button type="secondary" text="ok" />
      </div>
    )}
    </>
  )
}

export default SuccessAlert
