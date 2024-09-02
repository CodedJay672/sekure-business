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
import {
  Data,
  ICardDetails,
  INavLinks,
  ITableColumn,
} from "./types";


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

export const bottomNav: INavLinks[] = [
  {
    path: "/statut",
    name: 'Statut check',
    icon: icon1,
  },
  {
    path: "/sekure",
    name: 'Sekure dev',
    icon: icon2,
  },
  {
    path: "/webhook",
    name: 'Webhook & API',
    icon: icon3,
  },
]

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

export const bigTable: ITableColumn[] = [
  { id: 'no', header: 'No' },
  { id: 'type', header: 'Type' },
  { id: 'Deà', header: 'De / à' },
  { id: 'montant', header: 'Montant' },
  { id: 'date', header: 'Date' },
  { id: 'etat', header: 'Etat' },
  { id: 'Nbpm', header: 'Nb PM' },
  { id: 'Echecpm', header: 'Echec PM' },
  { id: 'TotalPm', header: 'Total PM' },
  { id: 'MoyPm', header: 'Moy PM' },
]

export const smallTable: ITableColumn[] = [
  { id: 'type', header: 'Type' },
  { id: 'Deà', header: 'De / à' },
  { id: 'montant', header: 'Montant' },
  { id: 'date', header: 'Date' },
]


export const data: Data[] = [
  {
    no: 1,
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
    no: 2,
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
    no: 3,
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
    no: 4,
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
    no: 5,
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
    no: 6,
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
