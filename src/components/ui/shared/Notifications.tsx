import { RiNotification2Line } from 'react-icons/ri'

const Notifications = () => {
  return (
    <div className='flex-center w-[37.58px] h-[37.58px] bg-primary relative rounded-full'>
      <RiNotification2Line size="12.23px" color='white' />
      <div className='flex-center max-w-[17.48px] max-h-[17.48px] px-[5px] bg-dark3 absolute bottom-0 right-0 rounded-full'>
        <p className='text-[9px] font-bold leading-6 text-white'>3</p>
      </div>
    </div>
  )
}

export default Notifications
