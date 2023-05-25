import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";

import Button from "../../components/Button";

import woman from "../../assest/imgWoman.svg";
import imgLeft from "../../assest/imgTitleLeft.svg";

import { serviceAvailabel as mockserviceAvailabel } from "../../mock/ServiceAvailableType";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import Layout from "../../components/Layout";

const Service = () => {
  const partialDataCount = 8; // Number of service to show initially
  const [showPartialData, setShowPartialData] = useState(true);

  const toggleData = () => {
    setShowPartialData((prevShowPartialData) => !prevShowPartialData);
  };

  const visibleData = showPartialData
    ? mockserviceAvailabel.slice(0, partialDataCount)
    : mockserviceAvailabel;

  const navigate = useNavigate();
  const goToBook = () => {
    navigate("/book-now");
  };

  return (
    <Layout>
      <section className="px-2 py-12">
        <div className="grid sm:grid-cols-1 md:grid-cols-2">
          <div className="w-[90%] sm:mb-[1.5rem] md:mt-8 xl:mt-20">
            <div className="mb-8 flex items-center gap-2">
              <h1 className="text-4xl">تنظيف المنازل</h1>
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
            <Button
              text="احجز الآن"
              variant="secondary"
              onClick={() => goToBook()}
            />
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
      <section className="px-2 py-12">
        <h1 className="mb-9 text-4xl max-sm:text-center xl:px-8">
          الخدمات المتوفرة في تنظيف المنازل
        </h1>
        <ul>
          <div className="grid gap-8 max-sm:m-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visibleData.map((servAvailabel) => (
              <li
                key={servAvailabel.id}
                className="h-[80px] w-full rounded-lg border-2 border-[#F2F2F2] px-[0.2rem] py-1 max-sm:m-auto max-sm:w-[265px]"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={servAvailabel.img}
                    alt="servAvilabelImg"
                    className="h-[70px] w-[95px] rounded-xl"
                  />
                  <p className="text-lg font-light">
                    {servAvailabel.description}
                  </p>
                </div>
              </li>
            ))}
          </div>
        </ul>
        <div className="relative mt-8">
          <hr />
          <div className="absolute right-[50%] top-[-0.9rem] flex translate-x-[50%] items-center">
            <button
              onClick={toggleData}
              className="flex items-center gap-1 bg-white px-4 text-xl"
            >
              {showPartialData ? (
                <>
                  <span>رؤية المزيد</span>
                  <FontAwesomeIcon icon={faAngleDown} />
                </>
              ) : (
                <>
                  <span>إخفاء</span>
                  <FontAwesomeIcon icon={faAngleUp} />
                </>
              )}
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Service;
