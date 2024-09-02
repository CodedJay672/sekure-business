"use client";

import Image from "next/image"
import { usePathname } from "next/navigation"
import UserDropdown from "../ui/shared/UserDropdown";
import Notifications from "../ui/shared/Notifications";
import ModeSwitch from "../ui/shared/ModeSwitch";

const Topbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex-between w-full py-3 px-6 gap-4 relative">
      <div className="flex-center">
        <div className="mr-1">
          <Image
            src="/assets/sekure.png"
            alt="sekure business"
            width={121}
            height={23.39}
            className="object-contain"
          />
        </div>
        <div className="flex-center p-1 bg-primary rounded-[6px]">
          <h1 className="text-white font-bold text-[17px] leading-[22.19px]">Business</h1>
        </div>
      </div>
      <div className="flex-1 flex items-center">
        <h1 className="font-semibold text-[24px] leading-[27px] tracking-[-1px] text-dark3">
          {pathname === "/" ? "Accueil" : pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2)}
        </h1>
      </div>
      <div className="flex-between gap-2">
        <UserDropdown fullname="Dongmo Talla Adrian" business="WAGAPAY" />
        <Notifications />
        <ModeSwitch />
      </div>
    </nav>
  )
}

export default Topbar
