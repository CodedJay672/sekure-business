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
    path: "/cartes",
    name: 'Cartes',
    icon: icon2,
  },
  {
    path: "/transactions",
    name: 'Transactions',
    icon: icon3,
  },
  {
    path: "/utilisateurs",
    name: 'Utilisateurs',
    icon: icon4,
  },
  {
    path: "/paramètres",
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

interface ITableColumn {
  id: string;
  header: string;
}

export const bigTable: ITableColumn[] = [
  { id: 'no', header: 'No' },
  { id: 'type', header: 'Type' },
  { id: 'Deà', header: 'De / à' },
  { id: 'montant', header: 'Montant' },
  { id: 'date', header: 'Date' },
  { id: 'etat', header: 'Etat' },
  { id: 'NbPm', header: 'Nb PM' },
  { id: 'EchecPm', header: 'Echec PM' },
  { id: 'TotalPm', header: 'Total PM' },
  { id: 'MoyPm', header: 'Moy PM' },
]

export const smallTable: ITableColumn[] = [
  { id: 'type', header: 'Type' },
  { id: 'Deà', header: 'De / à' },
  { id: 'montant', header: 'Montant' },
  { id: 'date', header: 'Date' },
]

export interface Data {
  [key: string]: string | number;
}

export const data: Data[] = [
  {
    no: "1",
    type: "V",
    Deà: "XAA 125 200.50",
    montant: "125 200.50",
    date: "Talla oyono Richnel",
    etat: "$5000",
    Nbpm: "2354",
    Echecpm: "87",
    TotalPm: "$5000",
    MoyPm: "$450/sem",
  },
  {
    no: "1",
    type: "V",
    Deà: "XAA 125 200.50",
    montant: "125 200.50",
    date: "Talla oyono Richnel",
    etat: "$5000",
    Nbpm: "2354",
    Echecpm: "87",
    TotalPm: "$5000",
    MoyPm: "$450/sem",
  },
  {
    no: "1",
    type: "V",
    Deà: "XAA 125 200.50",
    montant: "125 200.50",
    date: "Talla oyono Richnel",
    etat: "$5000",
    Nbpm: "2354",
    Echecpm: "87",
    TotalPm: "$5000",
    MoyPm: "$450/sem",
  },
  {
    no: "1",
    type: "V",
    Deà: "XAA 125 200.50",
    montant: "125 200.50",
    date: "Talla oyono Richnel",
    etat: "$5000",
    Nbpm: "2354",
    Echecpm: "87",
    TotalPm: "$5000",
    MoyPm: "$450/sem",
  },
  {
    no: "1",
    type: "V",
    Deà: "XAA 125 200.50",
    montant: "125 200.50",
    date: "Talla oyono Richnel",
    etat: "$5000",
    Nbpm: "2354",
    Echecpm: "87",
    TotalPm: "$5000",
    MoyPm: "$450/sem",
  },
  {
    no: "1",
    type: "V",
    Deà: "XAA 125 200.50",
    montant: "125 200.50",
    date: "Talla oyono Richnel",
    etat: "$5000",
    Nbpm: "2354",
    Echecpm: "87",
    TotalPm: "$5000",
    MoyPm: "$450/sem",
  },
];

export const smallData: Data[] = [
  {
    type: "V",
    Deà: "XAA 125 200.50",
    montant: "125 200.50",
    date: "Talla oyono Richnel",
  },
  {
    type: "V",
    Deà: "XAA 125 200.50",
    montant: "125 200.50",
    date: "Talla oyono Richnel",
  },
  {
    type: "V",
    Deà: "XAA 125 200.50",
    montant: "125 200.50",
    date: "Talla oyono Richnel",
  },
];
