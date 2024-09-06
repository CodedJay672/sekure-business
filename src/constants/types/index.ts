import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface INavLinks {
  path: string;
  name: string;
  icon: StaticImageData;
}

export interface Data {
  [key: string]: string | number;
}

export interface ICardDetails {
  data1: {
    title: string;
    value: string;
  },
  data2: {
    title: string;
    value: string;
  },
  data3: {
    title: string;
    value: string;
  },
}

export interface ITableColumn {
  id: string;
  header: string;
}
