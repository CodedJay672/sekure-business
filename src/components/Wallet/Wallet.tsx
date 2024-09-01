import Image from "next/image";
import ButtonIconRight from "../ui/shared/ButtonIconRight";

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

      <div className="flex-between flex-1 gap-2">
        <ButtonIconRight
          type="submit"
          variant="primary" 
          text="Recharger"
          icon={<Image src="/assets/images/forward.png" alt="deposit" width={24} height={24} className="object-contain" />}
        />
        <ButtonIconRight
          text="Recharger"
          icon={<Image src="/assets/images/reset.png" alt="deposit" width={24} height={24} className="object-contain" />}
        />
      </div>
    </article>
  )
}

export default Wallet
