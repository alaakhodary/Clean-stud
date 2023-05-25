import React, { Fragment } from "react";

const Summary: React.FC = () => {
  return (
    <Fragment>
      <h1 className="px-7 py-4 text-[20px] font-semibold">ملخص</h1>
      <hr className="h-[2px] bg-white" />
      <div className="px-7 py-4">
        <p className="mb-2 text-[#7D7E82]">الخدمة</p>
        <h2 className="text-lg font-semibold">تنظيف المنازل</h2>
      </div>
      <div className="px-7 py-4">
        <p className="mb-2 text-[#7D7E82]">العناصر المختارة</p>
        <h2 className="text-lg font-semibold">تنظيف المنازل</h2>
      </div>
      <div className="mb-5 px-7 py-4">
        <p className="mb-2 text-[#7D7E82]">اجمالي السعر</p>
        <h2 className="text-lg font-semibold">55$</h2>
      </div>
    </Fragment>
  );
};

export default Summary;
