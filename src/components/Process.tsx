import React, { Fragment, useState } from "react";

import OptionsList from "./OptionsList";
import ReservationDate from "./ReservationDate";
import EnteringInfo from "./EnteringInfo";

const Level1Content: React.FC = () => <OptionsList />;
const Level2Content: React.FC = () => <ReservationDate />;
const Level3Content: React.FC = () => <EnteringInfo />;

const LevelsComponent: React.FC = () => {
  const [level, setLevel] = useState(1);

  const handleLevelChange = (nextLevel: number) => {
    if (nextLevel !== 1) {
      return;
    }
    setLevel(nextLevel);
  };

  // function to get the component for the current level
  const getLevelComponent = (): JSX.Element | null => {
    switch (level) {
      case 1:
        return <Level1Content />;
      case 2:
        return <Level2Content />;
      case 3:
        return <Level3Content />;
      default:
        return null;
    }
  };

  const handleNextLevel = () => {
    if (level === 3) {
      return; // Stop execution if the final level is reached
    }
    setLevel(level + 1);
  };

  const handlePrevLevel = () => {
    if (level > 1) {
      setLevel(level - 1);
    }
  };

  return (
    <Fragment>
      {/* process */}
      <div className="relative mx-4 my-4 mb-4 flex items-center justify-between">
        <div className=" flex items-center bg-white pl-8">
          <button
            className={`ml-2 rounded-full border px-4 py-2 text-[#C4C4C4] ${
              level === 1
                ? "border-[#00ADEE] bg-[#00ADEE] text-white"
                : "bg-white"
            }`}
            onClick={() => handleLevelChange(1)}
          >
            1
          </button>
          <span
            className={`ml-1 bg-white text-[20px] ring-8 ring-white ${
              level === 1 ? "text-black" : "text-[#C4C4C4]"
            }`}
          >
            اختر الخدمات
          </span>
        </div>
        <div className=" flex items-center bg-white px-8">
          <button
            className={`ml-2 rounded-full border px-4 py-2 text-[#C4C4C4] ${
              level === 2
                ? "border-[#00ADEE] bg-[#00ADEE] text-white"
                : "bg-white"
            }`}
            onClick={() => handleLevelChange(2)}
          >
            2
          </button>
          <span
            className={`ml-1 bg-white text-[20px] ring-8 ring-white  ${
              level === 2 ? "text-black" : "text-[#C4C4C4]"
            }`}
          >
            التاريخ والوقت
          </span>
        </div>
        <div className=" flex items-center bg-white pr-8">
          <button
            className={`ml-2 rounded-full border px-4 py-2 text-[#C4C4C4] ${
              level === 3
                ? "border-[#00ADEE] bg-[#00ADEE] text-white"
                : "bg-white"
            }`}
            onClick={() => handleLevelChange(3)}
          >
            3
          </button>
          <span
            className={`ml-1 bg-white text-[20px] ring-8 ring-white  ${
              level === 3 ? "text-black" : "text-[#C4C4C4]"
            }`}
          >
            معلوماتك
          </span>
        </div>
        {level === 1 && (
          <div className="absolute z-[-1] h-0.5 w-full bg-gray-200"></div>
        )}
        {level === 2 && (
          <div
            className={`absolute left-full right-0 z-[-1] h-0.5 w-1/2 ${
              level === 2 ? "bg-blue-500" : "bg-gray-200"
            }`}
          ></div>
        )}
        {level === 3 && (
          <div
            className={`absolute left-0 z-[-1] h-0.5 w-1/2 ${
              level === 3 ? "bg-blue-500" : "bg-gray-200"
            }`}
          ></div>
        )}
      </div>
      <hr className="border-[1px] border-[#E5F7FD]" />
      {/* content */}
      <div className="h-auto rounded border-b-2 border-[#E5F7FD] p-4">
        {getLevelComponent()}
      </div>
      {/* button */}
      <div className="flex items-center justify-between p-4">
        <button
          className="h-[50px] w-[150px] rounded-full border-2 border-solid border-[#00ADEE] bg-white px-6 text-[1.4rem] text-[#00ADEE] hover:border-none hover:bg-[#00ADEE] hover:text-white"
          onClick={handlePrevLevel}
          disabled={level === 1}
        >
          الرجوع
        </button>
        <button
          type="submit"
          className="h-[50px] w-[150px] rounded-full border-2 border-solid border-[#00ADEE] bg-[#00ADEE] px-6 text-[1.4rem] text-white hover:bg-white hover:text-[#00ADEE]"
          onClick={handleNextLevel}
        >
          {level === 3 ? "ارسال" : "استمرار"}
        </button>
      </div>
    </Fragment>
  );
};

export default LevelsComponent;
