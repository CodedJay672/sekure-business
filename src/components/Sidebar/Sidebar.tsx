"use client";

import { navLinks } from "@/constants"
import Image from "next/image"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="w-[232px] flex-between flex-col">
      <div className="flex-1 w-full">
        {navLinks.map((link, idx) => (
          <Link href={link.path} key={`${idx}-${link.name}`} className={`w-full h-9 px-6 mb-3 flex flex-start items-center hover:bg-white group ${pathname === link.path ? 'bg-white' : ''} transition-all`}>
            <div className="border border-dark3 rounded-lg mr-4 p-1">
              <Image
                src={link.icon}
                alt={link.name}
                width={10}
                height={10}
                className={`group-hover:color-primary object-contain ${pathname === link.path ? 'color-primary' : 'color-dark3'} transition-all`}
              />
            </div>
            <span className={`text-dark3 text-[11px] font-normal leading-[16.5px] group-hover:text-primary ${pathname === link.path ? 'text-primary' : 'text-dark3'} transition-all`}>{link.name}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Sidebar
