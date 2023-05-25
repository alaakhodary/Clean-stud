import Advantages from "./Advantages";

import imgClean from "../../../assest/personCleaning.svg";
import imgAdvantge from "../../../assest/advantges.svg";

const WhyChooseUs = () => {
  return (
    <div className="grid grid-cols-1 gap-12 px-4 max-sm:grid md:grid-cols-2 lg:grid-cols-2">
      <div className="flex items-center">
        <img src={imgClean} alt="personClean" className="w-full rounded-3xl " />
      </div>
      <div className="m-auto mx-0 grid h-[85%] gap-8 max-lg:h-full md:gap-0">
        <Advantages
          img={imgAdvantge}
          title="الموثقية"
          desc="ندرك صعوبة القيام بتنظيف السجاد من قبل النساء"
        />
        <Advantages
          img={imgAdvantge}
          title="الموثقية"
          desc="ندرك صعوبة القيام بتنظيف السجاد من قبل النساء"
        />
        <Advantages
          img={imgAdvantge}
          title="الموثقية"
          desc="ندرك صعوبة القيام بتنظيف السجاد من قبل النساء"
        />
        <Advantages
          img={imgAdvantge}
          title="الموثقية"
          desc="ندرك صعوبة القيام بتنظيف السجاد من قبل النساء"
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
