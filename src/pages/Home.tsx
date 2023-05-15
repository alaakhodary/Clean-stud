import { Fragment } from "react";

import Header from "../UI/Header";
import Footer from "../UI/Footer";

import CustomerReviews from "../components/CustomerReviews";
import MainImage from "../components/MainImage";
import MainTitle from "../components/MainTitle";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";

import clientImg from "../assest/client.svg";
import imgR from "../assest/comaR.svg";
import imgL from "../assest/comaL.svg";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <MainImage
          text="اختار يلي بخلصك من مرة وحده!"
          subText="ما تشيل هم كلمنا بنساعدك
    احجز خدمة مضمونة بكبسة زر"
        />
        <section className="px-2 py-12">
          <MainTitle text="الخدمات التي نقدمها" />
          <Services />
        </section>
        <section className="px-2 py-12">
          <MainTitle text="لماذا تختارنا" />
          <WhyChooseUs />
        </section>
        <section className="px-2 py-12">
          <MainTitle text="ماذا يقولون عملائنا" />
          <div className="mt-32 grid grid-cols-1 gap-[13rem] md:grid-cols-2 md:gap-[6rem] xl:grid-cols-3 xl:gap-[7rem]">
            <CustomerReviews
              imgComaRight={imgR}
              imgComaLeft={imgL}
              imgClient={clientImg}
              name="محمد أحمد"
              opinion="ندرك صعوبة القيام بتنظيف السجاد من قبل النساء"
            />
            <CustomerReviews
              imgComaRight={imgR}
              imgComaLeft={imgL}
              imgClient={clientImg}
              name="محمد أحمد "
              opinion="ندرك صعوبة القيام بتنظيف السجاد من قبل النساء"
            />
            <CustomerReviews
              imgComaRight={imgR}
              imgComaLeft={imgL}
              imgClient={clientImg}
              name="محمد أحمد "
              opinion="ندرك صعوبة القيام بتنظيف السجاد من قبل النساء"
            />
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Home;
