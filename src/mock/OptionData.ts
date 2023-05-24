import imgSerOption from "../assest/imageOption.svg";

export interface Option {
  id: number;
  label: string;
  subOptions: SubOption[];
}

export interface SubOption {
  id: number;
  label: string;
  img: string;
  price: number;
  quantity: number;
  details: string[];
}

/* const selectedServices: Option[] = [
  {
    id: 1,
    label: "تنظيف المنازل",
    subOptions: [
      {
        id: 11,
        label: "Suboption 1",
        price: 20,
        quantity: 1,
        details: ["Detail 1", "Detail 2", "Detail 3"],
      },
    ],
  },
]; */

export const options: Option[] = [
  {
    id: 1,
    label: "تنظيف المنازل",
    subOptions: [
      {
        id: 11,
        label: "غرفة النوم",
        details: ["Detail 1", "Detail 2", "Detail 3"],
        img: imgSerOption,
        price: 15,
        quantity: 1,
      },
      {
        id: 12,
        label: "غرفة النوم",
        details: ["Detail 4", "Detail 5", "Detail 6"],
        img: imgSerOption,
        price: 20,
        quantity: 1,
      },
    ],
  },
  {
    id: 2,
    label: "التنظيف التجاري",
    subOptions: [
      {
        id: 21,
        label: "غرفة النوم",
        details: ["Detail 7", "Detail 8", "Detail 9"],
        img: imgSerOption,
        price: 12,
        quantity: 1,
      },
      {
        id: 22,
        label: "غرفة النوم",
        details: ["Detail 10", "Detail 11", "Detail 12"],
        img: imgSerOption,
        price: 14,
        quantity: 1,
      },
    ],
  },
];
