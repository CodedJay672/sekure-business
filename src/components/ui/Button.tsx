const Button = ({ type, text}: { type: string; text: string; }) => {
  return (
    <button className={`${type === 'primary' ? 'bg-primary text-white' : 'bg-dark2 text-dark'} btn w-[151px] h-[36px]`}>
      {text}
    </button>
  )
}

export default Button
