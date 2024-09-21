import Image from "next/image";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import ConvertFundsForm from "../Forms/ConvertFundsForm";

interface IWalletDetails {
  type: string;
  deposit: string;
  withdraw: string;
}

const Wallet = ({ type, deposit, withdraw }: IWalletDetails) => {
  return (
    <article className="w-[304px] py-3 px-[14px] flex flex-col justify-between gap-2 bg-white rounded-[10px]">
      <div className="flex-1 flex-between">
        <div className="flex-between">
          <Image
            src={`${type === 'XAF' ? '/assets/cam-flag.png' : (type === 'IVC' ? '/assets/ivc-flag.png' : '/assets/usa-flag.png')}`}
            alt={type}
            width={21}
            height={21}
            className="object-contain rounded-full"
          />
          <h2 className="text-[12px] leading-[34.5px] tracking-[-0.5px] font-semibold text-dark3 ml-2">Wallet {type}</h2>
        </div>
        <div className="flex-between gap-2">
          <Image
            src="/assets/images/menu.png"
            alt="menu"
            width={24}
            height={24}
            className="object-contain"
          />
          <Image
            src="/assets/images/reset.png"
            alt="menu"
            width={24}
            height={24}
            className="object-contain"
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="flex-between">
          <span className="text-[12px] leading-[34.5px] tracking-[-0.5px] font-semibold text-placeholder-text flex-1">Solde disponible</span><span className="text-[12px] leading-[34.5px] tracking-[-0.5px] font-normal text-dark3 text-right flex-1">{deposit} {type}</span>
        </div>
        <div className="flex-between">
          <span className="text-[12px] leading-[34.5px] tracking-[-0.5px] font-semibold text-placeholder-text flex-1">Solde Collecte</span><span className="text-[12px] leading-[34.5px] tracking-[-0.5px] font-normal text-dark3 text-right flex-1">{withdraw} {type}</span>
        </div>
      </div>

      <div className="flex-between w-full gap-1">
        <Button
          type="submit"
          variant="default"
          className="primary-btn flex-1 flex-between w-[154px] px-2"
        >
          <span className="text-[12px] leading-[34.5px] tracking-[-0.5%] flex-1 text-center">
            Recharger
          </span>
          <Image
            src="/assets/images/forward.png"
            alt="deposit"
            width={24}
            height={24}
            className="object-contain"
          />
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="default"
              type="button"
              className="bg-dark3 text-white flex-1 flex-between w-[154px] text-[12px] leading-[34.5px] tracking-[-0.5%] px-2"
            >
              <span className="flex-1">
                Convertir
              </span>
              <Image
                src="/assets/images/reset.png"
                alt="deposit"
                width={24}
                height={24}
                className="object-contain"
              />
            </Button>
          </DialogTrigger>
          <DialogContent className="w-[383px]">
            <DialogHeader>
              <DialogTitle>Convertir des fonds</DialogTitle>
              <DialogDescription className="sr-only">
                Voulez-vous vraiment convertir votre solde?
              </DialogDescription>
            </DialogHeader>
            <ConvertFundsForm btnText="Convertir" />
          </DialogContent>
        </Dialog>
      </div>
    </article>
  )
}

export default Wallet
