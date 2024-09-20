import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image"

const Filter = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Image
          src="/assets/images/filter.png"
          alt="filter"
          width={89}
          height={32}
          className="w-auto h-auto object-cover cursor-pointer mx-3 rounded-[9px]"
        />
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>
            Filtrer
          </SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default Filter
