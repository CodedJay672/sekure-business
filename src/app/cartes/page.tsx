import AdminChart from "@/components/AdminChart/AdminChart"
import Card from "@/components/Cards/Cards"
import StatsCard from "@/components/StatsCard/StatsCard"
import { cardDetails } from "@/constants"
import { Table } from "lucide-react"

const page = () => {
  return (
    <section className="flex-1 flex gap-4 ml-4 pb-10">
      <div className="flex-1 flex flex-col gap-4">
        <section className="flex gap-2">
          <Card key={0} {...cardDetails[0]} />
          <Card key={1} {...cardDetails[1]} />
        </section>
        <section className="flex flex-col gap-4">
          <AdminChart variant="simple" />
        </section>
        <section className="w-full">
          <Table />
        </section>
      </div>
      <div className="min-w-[300px] flex flex-col gap-[13px]">
        <h2 className="text-2xl font-semibold leading-[27px] tracking-[-1px]">Stats</h2>
        <div className="w-full py-3 px-[14px] bg-white overflow-hidden rounded-[10px]">
          <StatsCard entry={[20, 80]} />
        </div>
        <div className="w-full py-3 px-[14px] bg-white overflow-hidden rounded-[10px]">
          <StatsCard entry={[20,80]} />
        </div>
      </div>
    </section>
  )
}

export default page
