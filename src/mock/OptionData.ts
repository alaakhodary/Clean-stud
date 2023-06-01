import imgSerOption from "../assest/imageOption.svg";

export interface Service {
  id: number;
  label: string;
  subServices: SubService[];
}

export interface SubService {
  id: number;
  label: string;
  img: string;
  price: number;
  quantity: number;
  details: string[];
}

export const services: Service[] = [
  {
    id: 1,
    label: "تنظيف المنازل",
    subServices: [
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
    subServices: [
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
