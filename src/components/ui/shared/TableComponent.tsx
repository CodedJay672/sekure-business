import { Data } from "@/constants/types";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useRouter } from "next/navigation";

interface Column {
  id: string;
  header: string;
  accessor?: string;
}

interface TableComponentProps {
  variant?: 'big' | 'small';
  columns: Column[];
  data: Data[];
}

const TableComponent: React.FC<TableComponentProps> = ({ variant, columns, data }) => {
  const router = useRouter();

  
  const handleMenuClick = (id: string | number) => {
    router.push(`cartes/${id}`);
  };

  return (
    <div className={`overflow-x-auto ${variant === 'big' ? 'mt-4' : ''}`}>
      <table className="w-full text-[11px] text-left text-dark3 table-auto">
        <thead className="text-[11px] leading-[14.36px] text-white bg-dark rounded-[10px]">
        <tr>
          {columns.map((column) => (
            <th scope="col" className="px-2 py-2" key={column.id}>
              {column.header}
            </th>
          ))}
          <th scope="col" className="px-2 py-2"></th>
        </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className={`bg-white dark:bg-gray-800 ${idx % 2 === 0 ? 'bg-gray-50 dark:bg-gray-900' : ''} text-[11px]`}>
              {columns.map((column) => (
                <td className="px-2 py-6" key={`${idx}-${column.id}`}>
                  {row[column.accessor || column.id] ?? ''}
                </td>
              ))}
              <td className="px-2 py-6">
                <BsThreeDotsVertical
                  size={14} 
                  onClick={() => handleMenuClick(row.no)}
                  className="cursor-pointer"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableComponent
