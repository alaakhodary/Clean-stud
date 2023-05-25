import { Fragment } from "react";

import Header from "../../UI/Header/Header";

import imgLeft from "../../assest/imgTitleLeft.svg";
import Process from "./components/CheckoutSteps";
import Footer from "../../UI/Footer";
import Summary from "./components/Summary";

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
            <Summary />
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default BookNow;