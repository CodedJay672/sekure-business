import { ReactNode } from 'react'

interface IButtonIconRight {
  type?: string;
  text: string;
  icon: ReactNode;
}

const ButtonIconRight = ({ type, text, icon }: IButtonIconRight) => {
  return (
    <button className={`${type === 'primary' ? 'bg-primary' : (type === 'danger' ? 'bg-danger' : 'bg-dark')}  w-full h-[34px] flex-center px-4 btn`}>
      <span className='flex-1 text-center text-white'>{text}</span>{icon}
    </button>
  )
}

export default ButtonIconRight
