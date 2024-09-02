"use client";

import React, { ChangeEvent, useState } from "react";
import SearchBar from "../ui/shared/SearchBar"
import Filter from "../ui/shared/Filter";
import Pagination from "../ui/shared/Pagination";
import { Data } from "@/constants";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { BsThreeDotsVertical } from "react-icons/bs";

interface Column {
  id: string;
  header: string;
  accessor?: string;
}

interface TableProps {
  variant?: 'big' | 'small';
  columns: Column[];
  data: Data[];
  heading?: string;
}

const Table: React.FC<TableProps> = ({ heading, variant, columns, data }) => {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const handleSubmit = () => {
    if (!search) {
      return;
    }
  }

  
  const handleMenuClick = (id: string | number) => {
    router.push(`/details/${id}`);
  };

  return (
    <section className={`bg-white ${variant === 'big' && 'p-4'} flex flex-col gap-2`}>
      {variant === 'big' ? (
        <>
        <div className="w-full">
          <h2 className="text-base leading-6 font-semibold">{heading}</h2>
          <p className="text-xs leading-4 font-light">liste en temps réel des dernieres transactions effectuées avec les cartes</p>
        </div>
        <div className="w-full flex gap-1">
          <SearchBar
            text={search}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            />
          <Filter />
          <Pagination />
        </div>
        </>
        ): (
          <h1 className="text-xs leading-[34.5px] tracking-[-0.5%] font-bold">Meilleurs utilisateurs payeurs</h1>
        )}

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
                    onClick={() => handleMenuClick(row.id)}
                    className="cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Table
