import { BsFillTriangleFill } from "react-icons/bs"
import CustomDropdown from "../ui/shared/CustomDropdown"
import BarChart from "../ui/shared/BarChart"

const AdminChart = ({ variant }: { variant?: 'detailed' | 'simple' }) => {
  return (
    <div className="flex-1 bg-white px-4 py-2">
      <div className="flex-between">
        <div className="flex-1 flex flex-col gap-1">
          <h2 className="text-base leading-5 text-dark3 font-semibold">{`${variant !== 'detailed' ? 'Évolution des cartes crées' : `Évolution des transactions effectuées`}`}</h2>
          {variant !== 'detailed' && (
            <p className="text-[12px] leading-4 font-light text-[#6F6F6F]">visualisez la courbe d’evolution en nombre de cartes parrainées par periode sur votre plateforme</p>
          )}
        </div>
        <div className="flex-center pt-2">
          <CustomDropdown />
          {variant === 'detailed' && (
            <div className="ml-3">
              <h2 className="text-xs font-light">Cette semaine</h2>
              <div className="flex-between gap-4">
                <p className="text-[16px] font-bold leading-[16px]">XAF 4 256 850</p>
                <div className="flex-center gap-1">
                  <BsFillTriangleFill size={8} className="fill-primary" />
                  <span className="text-primary text-[12px]">8%</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="w-full mt-3 pb-4">
        <BarChart />
      </div>
    </div>
  )
}

export default AdminChart
