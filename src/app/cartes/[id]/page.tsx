import Card from "@/components/Cards/Cards";
import { Button } from "@/components/ui/button";
import CardNumber from "@/components/ui/shared/CardNumber";
import SearchBar from "@/components/ui/shared/SearchBar";
import TableComponent from "@/components/ui/shared/TableComponent";
import VisaCard from "@/components/ui/shared/VisaCard";
import { data, bigTable } from "@/constants";
import Image from "next/image";
import { IoCopyOutline } from "react-icons/io5";
import { RiAddCircleFill } from "react-icons/ri";

const CardDetails = ({ params } : { params: { id: string } }) => {
  const { id } = params;

  const card = data.find((data) => data.no === Number(id));
  
  return (
    <section className="wrapper">
      <div className="max-w-[354px] flex flex-col gap-3 rounded-[10px]">
        <div className="bg-white flex flex-col py-6 px-4 ">
          <div className="flex-between">
            <h1 className="text-base leading-5 font-semibold text-dark3 flex-1">Details de carte</h1>
            <div className="w-[70px] h-[29px] rounded-[22px] bg-primary-fade flex-center">
              <span className="text-primary text-xs leading-3 tracking-[-0.5%]">Active</span>
            </div>
          </div>
          <span className="flex-1 text-xs leading-4 text-placeholder-text">Créé le 05 Aout 2024</span>
          <VisaCard />
          
          <div className="flex-between mt-3">
            <span className="text-xs leading-[34.5px] tracking-[-0.5%] font-medium text-dark3">Solde de la carte</span>
            <span className="text-xs leading-[34.5px] tracking-[-0.5%] font-bold text-dark3 pr-2">$54200.50</span>
          </div>
          <div className="flex-between mt-3 gap-2">
            <Button variant="default" type="button" className="primary-btn text-xs leading-[34.5px] tracking-[-0.5%]font-normal text-center pr-[3px]">
              Créer une carte
              <RiAddCircleFill size={24} className="fill-white ml-4" />
            </Button>
            <Button variant="default" type="button" className="primary-btn text-xs leading-[34.5px] tracking-[-0.5%]font-normal text-center pr-[4px]">
              Recharger une carte
              <Image
                src="/assets/images/forward.png"
                alt="deposit"
                width={24}
                height={24}
                className="object-contain mx-2"
              />
            </Button>
          </div>
        </div>
        <div className="w-[354px] py-3 px-4 bg-white flex flex-col rounded-[10px]">
          <CardNumber heading="ID de carte" number="xxxx xxxx xxxx 4565" />
          <CardNumber heading="Numéro de carte" number="xxxx xxxx xxxx 4565" />
          <CardNumber heading="Nom sur carte" number="xxxx xxxx xxxx 4565" />
          <CardNumber heading="Date exp" number="xxxx xxxx xxxx 4565" />
          <CardNumber heading="CVV" number="xxxx xxxx xxxx 4565" />
        </div>
        <div className="w-[354px] py-3 px-4 bg-white flex flex-col rounded-[10px]">
          <Button variant="default" type="button" className="bg-danger">
            <span className="w-full flex-1 text-white">
              Supprimer la carte
            </span>
            <RiAddCircleFill size={24} className="fill-white ml-4" />
          </Button>
        </div>
      </div>

      <div className="flex-1 w-full max-w-[843px]">
        <div className="w-full flex-between gap-2">
          <Card data1={{ title: "Total paiements", value: "$54200.50" }} data2={{ title: "activées", value: "1437" }} data3={{ title: "suspendues", value: "46" }} />
          <Card data1={{ title: "Total paiements", value: "$54200.50" }} data2={{ title: "activées", value: "1437" }} data3={{ title: "suspendues", value: "46" }} />
          <Card data1={{ title: "Total paiements", value: "$54200.50" }} data2={{ title: "activées", value: "1437" }} data3={{ title: "suspendues", value: "46" }} />
        </div>
        <div className="w-full max-w-[843px] bg-white mt-3  px-2 py-3 rounded-[10px] ">
          <h2 className="text-base leading-6 font-semibold">Liste des transactions</h2>
          <div className="w-full flex-between mt-2 gap-2">
            <SearchBar />
            <div className="max-w-[108px] h-8 rounded-[5px] bg-notif">
              <span className="text-xs leading-[34.5px] tracking-[-0.5px] text-center font-normal text-placeholder-text px-2">Date de debut</span>
            </div>
            <div className="max-w-[108px] h-8 rounded-[5px] bg-notif">
              <span className="text-xs leading-[34.5px] tracking-[-0.5px] text-center font-normal text-placeholder-text px-2">Date de Fin</span>
            </div>
            <div className="max-w-[108px] h-8 rounded-[5px] bg-primary-fade flex-center px-3 gap-1">
              <IoCopyOutline size={12} color="#18BC7A" />
              <span className="text-xs leading-[34.5px] tracking-[-0.5px] text-center font-normal text-[#18BC7A]">Filtrer</span>
            </div>
          </div>
          <div className="w-full max-w-[801px]">
            <TableComponent variant="big" columns={bigTable} data={data} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CardDetails;
