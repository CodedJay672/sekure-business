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
    setSearch(e.target.value);

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
    <section className="bg-white p-4 flex flex-col gap-2">
      <div className="w-full">
        <h2 className="text-base leading-6 font-semibold">Dernieres transactions</h2>
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

      <div className="overflow-x-auto mt-4">
        <table className="w-full text-[11px] text-left text-dark3 table-auto">
          <thead className="text-[11px] text-white bg-dark rounded-[10px]">
            <tr>
              <th scope="col" className="px-3 py-5">No</th>
              <th scope="col" className="px-3 py-5">Type</th>
              <th scope="col" className="px-3 py-5">De / à</th>
              <th scope="col" className="px-3 py-5">Montant</th>
              <th scope="col" className="px-3 py-5">Date</th>
              <th scope="col" className="px-3 py-5">Etat</th>
              <th scope="col" className="px-3 py-5">Nb pm</th>
              <th scope="col" className="px-3 py-5">Echec pm</th>
              <th scope="col" className="px-3 py-5">Total Pm</th>
              <th scope="col" className="px-3 py-5">Moy Pm</th>
            </tr>
          </thead>
          <tbody>
            {search ? newTableData?.map((data, idx) => (
              <tr key={idx} className={`bg-white dark:bg-gray-800 ${idx % 2 === 0 ? 'bg-gray-50 dark:bg-gray-900' : ''}`}>
                <td className="px-3 py-5">{data.no}</td>
                <td className="px-3 py-5">{data.type}</td>
                <td className="px-3 py-5">{data.fromTo}</td>
                <td className="px-3 py-5">{data.amount}</td>
                <td className="px-3 py-5">{data.state}</td>
                <td className="px-3 py-5">{data.nbPm}</td>
                <td className="px-3 py-5">{data.echecPm}</td>
                <td className="px-3 py-5">{data.totalPm}</td>
                <td className="px-3 py-5">{data.moyPm}</td>
                <td className="px-3 py-5">{data.moyPm}</td>
              </tr>
            )) : tableData?.map((data, idx) => (
              <tr key={idx} className={`bg-white dark:bg-gray-800 ${idx % 2 === 0 ? 'bg-gray-50 dark:bg-gray-900' : ''}`}>
                <td className="px-3 py-5">{data.no}</td>
                <td className="px-3 py-5">{data.type}</td>
                <td className="px-3 py-5">{data.fromTo}</td>
                <td className="px-3 py-5">{data.amount}</td>
                <td className="px-3 py-5">{data.state}</td>
                <td className="px-3 py-5">{data.nbPm}</td>
                <td className="px-3 py-5">{data.echecPm}</td>
                <td className="px-3 py-5">{data.totalPm}</td>
                <td className="px-3 py-5">{data.moyPm}</td>
                <td className="px-3 py-5">{data.moyPm}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Table
