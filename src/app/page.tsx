import AdminChart from "@/components/AdminChart/AdminChart";
import Card from "@/components/Cards/Cards";
import Table from "@/components/Table/Table";
import Wallet from "@/components/Wallet/Wallet";
import { cardDetails } from "@/constants";

export default function Home() {
  return (
    <section className="w-full flex justify-between gap-4 pr-6 ml-3 pb-10">
      <div className="flex-1 flex flex-col gap-4">  
        <section className="flex-between gap-2">
          {cardDetails.map((card, idx) => (
            <Card key={idx} {...card} />
          ))}
        </section>
        <section className="w-full">
          <AdminChart variant="detailed" />
        </section>
        <section className="w-full">
          <Table />
        </section>
      </div>
      <section className="flex flex-col max-w-[354px] w-[300px] gap-3">
        <Wallet type="XAF" deposit="125 200.50" withdraw="125 200.50" />
        <Wallet type="USD" deposit="125 200.50" withdraw="125 200.50" />
        <Wallet type="IVC" deposit="125 200.50" withdraw="125 200.50" />
      </section>
    </section>
  );
}
