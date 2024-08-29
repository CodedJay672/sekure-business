"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import SearchBar from "../ui/shared/SearchBar"
import Filter from "../ui/shared/Filter";
import Pagination from "../ui/shared/Pagination";
import { ITableData, tableRowData } from "../../constants";


const Table = () => {
  const [search, setSearch] = useState<string>("");
  const [tableData, setTableData] = useState<ITableData[]>(tableRowData);
  const [newTableData, setNewTableData] = useState<any[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch((search) => e.target.value);

    if (!search) {
      return;
    }

    const newData = tableData.filter((data) => data.fromTo.includes(search));

    setNewTableData(newData);
    console.log(newTableData);
  }

  const handleSubmit = () => {
    if (!search) {
      return;
    }

    const newData = tableData.filter((data) => data.fromTo.includes(search));

    setNewTableData(newData);
    console.log(newTableData);
  }

  return (
    <section className="w-full bg-white p-4 flex flex-col gap-2">
      <div className="flex-1">
        <h2 className="text-base leading-6 font-semibold">Dernieres transactions</h2>
        <p className="text-xs leading-4 font-light">liste en temps réel des dernieres transactions effectuées avec les cartes</p>
      </div>
      <div className="flex gap-1">
        <SearchBar
          text={search}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <Filter />
        <Pagination />
      </div>

      <div className="flex-1 border-red-200 overflow-x-auto mt-4">
        <table>
          <thead>
            <tr className="w-full h-[27px] bg-[#101010] rounded-t-[10px]">
              <th className="text-[11px] leading-[14.36px] font-medium text-white px-4 py-2">No</th>
              <th className="text-[11px] leading-[14.36px] font-medium text-white px-4 py-2">Type</th>
              <th className="text-[11px] leading-[14.36px] font-medium text-white px-4 py-2">De / à</th>
              <th className="text-[11px] leading-[14.36px] font-medium text-white px-4 py-2">Montant</th>
              <th className="text-[11px] leading-[14.36px] font-medium text-white px-4 py-2">Date</th>
              <th className="text-[11px] leading-[14.36px] font-medium text-white px-4 py-2">Etat</th>
              <th className="text-[11px] leading-[14.36px] font-medium text-white px-4 py-2">Nb pm</th>
              <th className="text-[11px] leading-[14.36px] font-medium text-white px-4 py-2">Echec pm</th>
              <th className="text-[11px] leading-[14.36px] font-medium text-white px-4 py-2">Total Pm</th>
              <th className="text-[11px] leading-[14.36px] font-medium text-white px-4 py-2">Moy Pm</th>
            </tr>
          </thead>
          <tbody>
            {search ? newTableData?.map((data, idx) => (
              <tr key={idx} className="px-4 h-[14px] text-left text-[11px] leading-[14.36px] font-normal">
                <td className="text-[11px] leading-[14.36px] font-medium text-[#808080] px-4 py-2">{data.no}</td>
                <td className="text-[11px] leading-[14.36px] font-medium text-[#808080] px-4 py-2">{data.type}</td>
                <td className="text-[11px] leading-[14.36px] font-medium text-[#808080] px-4 py-2">{data.fromTo}</td>
                <td className="text-[11px] leading-[14.36px] font-medium text-[#808080] px-4 py-2">{data.amount}</td>
                <td className="text-[11px] leading-[14.36px] font-medium text-[#808080] px-4 py-2">{data.state}</td>
                <td className="text-[11px] leading-[14.36px] font-medium text-[#808080] px-4 py-2">{data.nbPm}</td>
                <td className="text-[11px] leading-[14.36px] font-medium text-[#808080] px-4 py-2">{data.echecPm}</td>
                <td className="text-[11px] leading-[14.36px] font-medium text-[#808080] px-4 py-2">{data.totalPm}</td>
                <td className="text-[11px] leading-[14.36px] font-medium text-[#808080] px-4 py-2">{data.moyPm}</td>
                <td className="text-[11px] leading-[14.36px] font-medium text-[#808080] px-4 py-2">{data.moyPm}</td>
              </tr>
            )) : tableData?.map((data, idx) => (
              <tr key={idx} className="px-4 h-[14px] text-left text-[11px] leading-[14.36px] font-normal">
                <td className="text-[11px] leading-[14.36px] font-medium text-[#808080] px-4 py-2">{data.no}</td>
                <td className="text-[11px] leading-[14.36px] font-medium text-[#808080] px-4 py-2">{data.type}</td>
                <td className="text-[11px] leading-[14.36px] font-medium text-[#808080] px-4 py-2">{data.fromTo}</td>
                <td className="text-[11px] leading-[14.36px] font-medium text-[#808080] px-4 py-2">{data.amount}</td>
                <td className="text-[11px] leading-[14.36px] font-medium text-[#808080] px-4 py-2">{data.state}</td>
                <td className="text-[11px] leading-[14.36px] font-medium text-[#808080] px-4 py-2">{data.nbPm}</td>
                <td className="text-[11px] leading-[14.36px] font-medium text-[#808080] px-4 py-2">{data.echecPm}</td>
                <td className="text-[11px] leading-[14.36px] font-medium text-[#808080] px-4 py-2">{data.totalPm}</td>
                <td className="text-[11px] leading-[14.36px] font-medium text-[#808080] px-4 py-2">{data.moyPm}</td>
                <td className="text-[11px] leading-[14.36px] font-medium text-[#808080] px-4 py-2">{data.moyPm}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Table
