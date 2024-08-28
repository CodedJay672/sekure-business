import { useState } from "react";

const ModeSwitch = () => {
  const [mode, setMode] = useState<Boolean>(true);

  const toggleMode = () => {
    setMode(!mode);
  }

  return (
    <div className={`bg-white/55 w-[101px] h-[38px] rounded-[30px] flex justify-start items-center gap-1 px-3 ml-2 relative`}>
      <p className={`text-[10px] leading-[11.75px] font-normal ${mode ? 'ml-7' : 'mr-7'} transition-all`}>Mode test</p>
      <span className={`w-7 h-7 flex-center rounded-full bg-notif cursor-pointer absolute ${mode ? 'left-[5px]' : 'right-[5px] bg-primary'} transition-all`} onClick={toggleMode}></span>
    </div>
  )
}

export default ModeSwitch;
