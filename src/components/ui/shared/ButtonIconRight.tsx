import { MouseEventHandler, ReactNode } from 'react'

interface IButtonIconRight {
  variant?: string;
  text: string;
  icon: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  handleClick: () => void;
}

const ButtonIconRight = ({ variant, text, icon, type, handleClick }: IButtonIconRight) => {
  return (
    <button type={type} className={`${variant === 'primary' ? 'bg-primary' : (variant === 'danger' ? 'bg-danger' : 'bg-dark')}  w-full h-[34px] flex-center px-4 btn`} onClick={handleClick}>
      <span className='flex-1 text-center text-white'>{text}</span>{icon}
    </button>
  )
}

export default ButtonIconRight
