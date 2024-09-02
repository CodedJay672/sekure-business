import React from 'react'

const UserDropdown = ({ fullname, business }: { fullname: string; business: string; }) => {
  return (
    <div className='flex'>
      <div className='flex flex-col justify-center items-end mr-2'>
        <h3 className="text-[11px] leading-[16.5px] font-semibold">{fullname}</h3>
        <p className="text-[7px] leading-[10.5px] font-normal">{business}</p>
        <span className='text-[7px] leading-[10.5px] text-center font-normal'>Id: DT123</span>
      </div>
      <div className='w-[38.66px] h-[38.66px] rounded-full bg-primary flex-center cursor-pointer'>
        <span className='text-white text-[15px] leading-[34.5px] text-centerf font-[500]'>DT</span>
      </div>
    </div>
  )
}

export default UserDropdown
