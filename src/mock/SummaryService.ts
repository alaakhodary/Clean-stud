interface ISummaryServiceData {
  services: string[];
  selectedItems: string[];
  totalPrice: number;
}

export const summaryServData: ISummaryServiceData = {
  services: ["التنظيف التجاري"],
  selectedItems: ["غرفة النوم", "غرفة النوم"],
  totalPrice: 55,
};

export default summaryServData;
