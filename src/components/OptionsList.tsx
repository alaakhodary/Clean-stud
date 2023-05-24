import React, { Fragment, useState } from "react";

import { options as mockOptionData } from "../mock/OptionData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faPlus,
  faMinus,
  faDollar,
} from "@fortawesome/free-solid-svg-icons";
import GuidelinesForSelection from "./GuidelinesForSelection";

const OptionsList: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [showAllDetails, setShowAllDetails] = useState<number[]>([]);

  const handleToggleOption = (optionId: number) => {
    if (selectedOptions.includes(optionId)) {
      setSelectedOptions(selectedOptions.filter((id) => id !== optionId));
    } else {
      setSelectedOptions([...selectedOptions, optionId]);
    }
  };

  const handleToggleDetails = (subOptionId: number) => {
    if (showAllDetails.includes(subOptionId)) {
      setShowAllDetails(showAllDetails.filter((id) => id !== subOptionId));
    } else {
      setShowAllDetails([...showAllDetails, subOptionId]);
    }
  };

  return (
    <Fragment>
      <GuidelinesForSelection text="اختر الخدمات التي تحتاج تنظيفها من أي تصنيف تريده" />
      {mockOptionData.map((option) => (
        <div key={option.id} className="mb-4 rounded-2xl border-2">
          <div
            className={`flex items-center justify-between space-x-2 rounded-2xl border py-4 pl-[0.25rem] pr-[1.25rem] ${
              selectedOptions.includes(option.id)
                ? "rounded-b-none border-b-2"
                : ""
            }`}
          >
            <p className="text-[1.3rem]">{option.label}</p>
            <button
              onClick={() => handleToggleOption(option.id)}
              className={`${selectedOptions.includes(
                option.id
              )} px-4 py-2 text-[16px] font-semibold`}
            >
              {selectedOptions.includes(option.id) ? (
                <>
                  <span className="ml-1 text-[#00ADEE]">اخفاء الخدمات</span>
                  <FontAwesomeIcon
                    icon={faAngleUp}
                    className="text-[#00ADEE]"
                  />
                </>
              ) : (
                <>
                  <span className="ml-1 text-[#00ADEE]">رؤية الخدمات</span>
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="text-[#00ADEE]"
                  />
                </>
              )}
            </button>
          </div>
          {selectedOptions.includes(option.id) && (
            <div className="grid gap-4 px-[30px] py-[25px]">
              {option.subOptions.map((subOption) => (
                <Fragment key={subOption.id}>
                  <div
                    key={subOption.id}
                    className={`flex items-center justify-between rounded-xl border-2 p-4 ${
                      selectedOptions.includes(subOption.id)
                        ? "border-[#00ADEE]"
                        : ""
                    }`}
                  >
                    <div className="flex items-center">
                      <input
                        id={`option-${subOption.id}`}
                        name={`option-${subOption.id}`}
                        type="checkbox"
                        checked={selectedOptions.includes(subOption.id)}
                        onChange={() => handleToggleOption(subOption.id)}
                        className="ml-4 h-[30px] w-[30px] border checked:border-none checked:bg-[#00ADEE]"
                      />
                      <label htmlFor={`option-${subOption.id}`}>
                        <div className="flex items-center">
                          <img
                            src={subOption.img}
                            alt="imgageOption"
                            className="h-20 w-20"
                          />
                          <span className="mr-4 text-[18px] font-semibold">
                            {subOption.label}
                          </span>
                        </div>
                      </label>
                    </div>
                    <div className="flex items-center">
                      <FontAwesomeIcon
                        icon={faDollar}
                        className="w-8 text-[18px]"
                      />
                      <p className="text-[18px] font-semibold">
                        {subOption.price}
                      </p>
                    </div>
                    <div className="flex items-center justify-around">
                      <button className="ml-2 flex h-[30px] w-[30px] items-center justify-center rounded border bg-[#E5F7FD] p-2">
                        <FontAwesomeIcon
                          icon={faPlus}
                          className="text-[#CCD2E3]"
                        />
                      </button>
                      <p className="ml-2 flex h-[30px] w-[30px] items-center justify-center rounded border p-2 text-[#1D1D35]">
                        {subOption.quantity}
                      </p>
                      <button className="ml-2 flex h-[30px] w-[30px] items-center justify-center rounded border bg-[#E5F7FD] p-2">
                        <FontAwesomeIcon
                          icon={faMinus}
                          className="text-[#CCD2E3]"
                        />
                      </button>
                    </div>
                    <button
                      className="rounded px-4 py-2 font-semibold text-black"
                      onClick={() => handleToggleDetails(subOption.id)}
                    >
                      {showAllDetails.includes(subOption.id) ? (
                        <>
                          <span className="ml-1 text-[#00ADEE]">
                            اخفاء التفاصيل
                          </span>
                          <FontAwesomeIcon
                            icon={faAngleUp}
                            className="text-[#00ADEE]"
                          />
                        </>
                      ) : (
                        <>
                          <span className="ml-1 text-[#00ADEE]">
                            رؤية التفاصيل
                          </span>
                          <FontAwesomeIcon
                            icon={faAngleDown}
                            className="text-[#00ADEE]"
                          />
                        </>
                      )}
                    </button>
                  </div>
                  <div>
                    {showAllDetails.includes(subOption.id) && (
                      <ul className="ml-8">
                        {subOption.details.map((detail, index) => (
                          <li key={index}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Fragment>
              ))}
            </div>
          )}
        </div>
      ))}
    </Fragment>
  );
};

export default OptionsList;
