import { Fragment } from "react";

import Header from "../UI/Header/Header";

import imgLeft from "../assest/imgTitleLeft.svg";
import Process from "../components/Process";
import Footer from "../UI/Footer";

const BookNow: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <section className="px-2 py-12">
        <div className="mb-8 flex items-center gap-2">
          <h1 className="text-4xl">احجز الآن</h1>
          <img src={imgLeft} alt="images" />
        </div>
        <div className="grid w-full grid-cols-12 gap-8">
          <div className="h-full w-[92%] rounded-[20px] shadow-shadowPrimary max-lg:col-span-12 max-lg:w-full lg:col-span-8">
            <Process />
          </div>
          <div className="h-fit rounded-[20px] bg-[#E5F7FD] max-lg:col-span-12 max-lg:w-[45%] lg:col-span-4">
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
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default BookNow;
