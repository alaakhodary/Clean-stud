import { Fragment } from "react";

import Header from "../../UI/Header";
import Button from "../../components/Button";
import Footer from "../../UI/Footer";

import "./index.css";

import woman from "../../assest/imgWoman.svg";
import imgLeft from "../../assest/imgTitleLeft.svg";

const About = () => {
  return (
    <Fragment>
      <Header />
      <section className="px-2 py-12">
        <div className="grid sm:grid-cols-1 md:grid-cols-2">
          <div className="w-[90%] sm:mb-[1.5rem] md:mt-8 xl:mt-20">
            <div className="mb-8 flex items-center gap-2">
              <h1 className="text-4xl">من نحن</h1>
              <img src={imgLeft} alt="images" />
            </div>
            <p className="mb-6 w-[95%] text-2xl leading-[38px] text-[#7D7E82] max-sm:w-full">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
              التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص
              العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي
              أخطاء لغوية
            </p>
            <Button text="تواصل معنا" variant="primary" />
          </div>
          <div className="mt-6">
            <img
              src={woman}
              alt="img"
              className="w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default About;
