"use client";

import { Data } from "@/constants/types";
import React from "react";
import { Button } from '@/components/ui/button';
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { PiCirclesFourFill } from "react-icons/pi";

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
  const pathname = usePathname();

  const handleMenuClick = (id: string | number) => {
    router.push(`${pathname}/${id}`);
  };

  return (
    <div className={`${variant === 'big' ? 'mt-4' : ''} w-full max-w-[724px] 2xl:max-w-[1010px] overflow-auto`}>
      <table className="w-full min-w-max text-[11px] text-left text-dark3">
        <thead className="text-[11px] leading-[14.36px] text-white bg-dark rounded-[10px] sticky top-0 z-10">
          <tr>
            {columns.map((column) => (
              <th scope="col" className="px-2 py-2 w-auto min-w-[70px]" key={column.id}>
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
                <td className="px-2 py-6 min-w-[70px]" key={`${idx}-${column.id}`}>
                  {row[column.accessor || column.id] ?? ''}
                </td>
              ))}
              <td className="px-2 py-6">
                <Button variant="default" type="button" className="bg-dark3 text-white text-xs leading-3 tracking-[-0.5%] rounded-full px-5" onClick={() => handleMenuClick(row.no)}>
                  <PiCirclesFourFill size={20} color="white" className="mr-3"/>
                  Manager
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableComponent