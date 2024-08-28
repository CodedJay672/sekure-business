import Card from "@/components/Cards/Cards";
import Table from "@/components/Table/Table";
import Wallet from "@/components/Wallet/Wallet";
import { cardDetails } from "@/constants";

export default function Home() {
  return (
    <section className="w-full flex-1 flex gap-4 ml-4">
      <div className="flex-1 flex flex-col gap-4">  
        <div className="flex gap-2">
          {cardDetails.map((card, idx) => (
            <Card key={idx} {...card} />
          ))}
        </div>
        <div className="w-full">
          <Table />
        </div>
      </div>
      <div className="flex flex-col max-w-[354px] gap-3">
        <Wallet type="XAF" deposit="125 200.50" withdraw="125 200.50" />
        <Wallet type="USD" deposit="125 200.50" withdraw="125 200.50" />
        <Wallet type="IVC" deposit="125 200.50" withdraw="125 200.50" />
      </div>
    </section>
  );
}
