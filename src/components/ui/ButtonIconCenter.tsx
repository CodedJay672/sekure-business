import { ReactNode } from "react";

interface IButtonIconCenter {
  type: string;
  text: string;
  icon: ReactNode;
}

const ButtonIconCenter = ({ type, text, icon }: IButtonIconCenter) => {
  return (
    <button className={`btn ${type === 'primary' ? 'bg-primary' : 'bg-dark'} gap-5 w-full`}>
      {icon}<span className="text-white">{text}</span>
    </button>
  )
}

export default ButtonIconCenter
