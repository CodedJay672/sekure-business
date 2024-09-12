import React from "react";
import SearchBar from "../ui/shared/SearchBar"
import Filter from "../ui/shared/Filter";
import Pagination from "../ui/shared/Pagination";
import TableComponent from "../ui/shared/TableComponent";
import { Data, ITableColumn } from "@/constants/types";

interface TableProps {
  variant?: 'big' | 'small';
  heading?: string;
  columns: ITableColumn[];
  data: Data[];
}

const Table: React.FC<TableProps> = ({ heading, variant, columns, data }) => {
  return (
    <section className={`bg-white ${variant === 'big' && 'p-4'} flex flex-col gap-2`}>
      {variant === 'big' ? (
        <>
        <div className="w-full">
          <h2 className="text-base leading-6 font-semibold">{heading}</h2>
          <p className="text-xs leading-4 font-light">liste en temps réel des dernieres transactions effectuées avec les cartes</p>
        </div>
        <div className="w-full flex gap-1">
          <SearchBar placeholder="Enter search term..."/>
          <Filter />
          <Pagination />
        </div>
        </>
        ): (
          <h1 className="text-xs leading-[34.5px] tracking-[-0.5%] font-bold">Meilleurs utilisateurs payeurs</h1>
        )}

        <div className="flex">
          <TableComponent variant={variant} columns={columns} data={data} />
        </div>
    </section>
  )
}

export default Table
