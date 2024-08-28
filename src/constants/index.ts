import { StaticImageData } from "next/image";
import {
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  icon7,
  icon8,
  icon9,
  icon10,
} from "../../public/assets/images/import";

interface INavLinks {
  path: string;
  name: string;
  icon: StaticImageData;
}

export const navLinks: INavLinks[] = [
  {
    path: "/",
    name: 'Accueil',
    icon: icon1,
  },
  {
    path: "/Cartes",
    name: 'Cartes',
    icon: icon2,
  },
  {
    path: "/Transactions",
    name: 'Transactions',
    icon: icon3,
  },
  {
    path: "/Utilisateurs",
    name: 'Utilisateurs',
    icon: icon4,
  },
  {
    path: "/Paramètres",
    name: 'Paramètres',
    icon: icon5,
  },
]

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

export const cardDetails: ICardDetails[] = [
  {
    data1: {
      title: 'Total transactions',
      value: '$54200.50',
    },
    data2: {
      title: 'reussies',
      value: '1437',
    },
    data3: {
      title: 'en cours',
      value: '46',
    },
  },
  {
    data1: {
      title: 'Total paiements',
      value: '$54200.50',
    },
    data2: {
      title: 'Actifs',
      value: '1437',
    },
    data3: {
      title: 'inactifs',
      value: '46',
    },
  },
  {
    data1: {
      title: 'Total collectes',
      value: '$54200.50',
    },
    data2: {
      title: 'Reussis',
      value: '1437',
    },
    data3: {
      title: 'Échoués',
      value: '46',
    },
  },
]

export interface ITableData {
  no: string;
  type: string;
  fromTo: string;
  amount: string;
  state: string;
  nbPm: string;
  echecPm: string;
  totalPm: string;
  moyPm: string;
}

export const tableRowData: ITableData[] = [
  {
    no: "1",
    type: "Virement",
    fromTo: "XAA 125 200.50",
    amount: "125 200.50",
    state: "Succes",
    nbPm: "5",
    echecPm: "0",
    totalPm: "5",
    moyPm: "25 000.50",
  },
  {
    no: "2",
    type: "Virement",
    fromTo: "XAB 125 200.50",
    amount: "125 200.50",
    state: "Succes",
    nbPm: "5",
    echecPm: "0",
    totalPm: "5",
    moyPm: "25 000.50",
  },
  {
    no: "3",
    type: "Virement",
    fromTo: "XAC 125 200.50",
    amount: "125 200.50",
    state: "Succes",
    nbPm: "5",
    echecPm: "0",
    totalPm: "5",
    moyPm: "25 000.50",
  },
  {
    no: "4",
    type: "Virement",
    fromTo: "XAD 125 200.50",
    amount: "125 200.50",
    state: "Succes",
    nbPm: "5",
    echecPm: "0",
    totalPm: "5",
    moyPm: "25 000.50",
  },
  {
    no: "5",
    type: "Virement",
    fromTo: "XAF 125 200.50",
    amount: "125 200.50",
    state: "Succes",
    nbPm: "5",
    echecPm: "0",
    totalPm: "5",
    moyPm: "25 000.50",
  },
  {
    no: "6",
    type: "Virement",
    fromTo: "XAF 125 200.50",
    amount: "125 200.50",
    state: "Succes",
    nbPm: "5",
    echecPm: "0",
    totalPm: "5",
    moyPm: "25 000.50",
  },
]