import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RiNotification2Line } from 'react-icons/ri';
import { Button } from "../button";

const Notifications = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className='w-[37.58px] h-[37.58px] bg-primary relative rounded-full'>
          <RiNotification2Line size={40} color='white' />
          <div className='flex-center max-w-[17.48px] max-h-[17.48px] px-[5px] bg-dark3 absolute bottom-0 right-0 rounded-full'>
            <p className='text-[9px] font-bold leading-6 text-white'>3</p>
          </div>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Notifications</SheetTitle>
          <div className="w-full md:w-[400px] flex flex-col gap-4">
            <div className="w-full flex">
              <div className="w-[90px] h-[20px] bg-primary  rounded-[4px] flex-center">
                <p className="text-white text-[10px] text-center">
                  Numero (12)
                </p>
              </div>
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default Notifications
