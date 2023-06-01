import React, { Fragment } from "react";
import { summaryServData as SummaryData } from "../../../mock/SummaryService";
import { generateId } from "../../../utils/utils";
const Summary: React.FC = () => {
  const { services, selectedItems, totalPrice } = SummaryData;
  return (
    <Fragment>
      <h1 className="px-7 py-4 text-[20px] font-semibold">ملخص</h1>
      <hr className="h-[2px] bg-white" />
      <div className="px-7 py-4">
        <p className="mb-2 text-[#7D7E82]">الخدمة</p>
        <ul>
          {services.map((service) => (
            <li key={generateId()} className="text-lg font-semibold">
              {service}
            </li>
          ))}
        </ul>
      </div>
      <div className="px-7 py-4">
        <p className="mb-2 text-[#7D7E82]">العناصر المختارة</p>
        <ol className="list-disc">
          {selectedItems.map((item) => (
            <li key={generateId()} className="mr-7 text-lg font-semibold">
              {item}
            </li>
          ))}
        </ol>
      </div>
      <div className="mb-5 px-7 py-4">
        <p className="mb-2 text-[#7D7E82]">اجمالي السعر</p>
        <h2 className="text-lg font-semibold">{totalPrice}$</h2>
      </div>
    </Fragment>
  );
};

export default Summary;
