"use client";

import { ReactNode, useState } from "react";
import { RiCloseLine } from "react-icons/ri"


interface FormProps {
  heading: string;
  form: ReactNode;
}

const Form = ({ heading, form }: FormProps) => {
  const [show, setShow] = useState<Boolean>(true);

  const handleClose = () => {
    setShow(false);
  }

  return (
    <>
    {show && (
      <div className="w-[383px] recharge-card">
        <div className="flex-between">
          <h2 className="font-semibold text-base leading-5">{heading}</h2>
          <RiCloseLine
            size="12px"
            className="fill-dark cursor-pointer"
            onClick={handleClose}
          />
        </div>
        <div className="w-full mt-5">
          {form}
        </div>
      </div>
    )}
    </>
  )
}

export default Form
