import React, { Fragment, useState } from "react";

import OptionsList from "./OptionsList";
import ReservationDate from "./ReservationDate";
import EnteringInfo from "./EnteringInfo";

const Step1Content: React.FC = () => <OptionsList />;
const Step2Content: React.FC = () => <ReservationDate />;
const Step3Content: React.FC = () => <EnteringInfo />;

const StepComponent: React.FC = () => {
  const [step, setStep] = useState(1);

  const handleStepChange = (nextStep: number) => {
    if (nextStep !== 1) {
      return;
    }
    setStep(nextStep);
  };

  // function to get the component for the current Step
  const getStepComponent = (): JSX.Element | null => {
    switch (step) {
      case 1:
        return <Step1Content />;
      case 2:
        return <Step2Content />;
      case 3:
        return <Step3Content />;
      default:
        return null;
    }
  };

  const handleNextStep = () => {
    if (step === 3) {
      return; // Stop execution if the final Step is reached
    }
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <Fragment>
      {/* process */}
      <div className="relative mx-4 my-4 mb-4 flex items-center justify-between">
        <div className=" flex items-center bg-white pl-8">
          <button
            className={`ml-2 rounded-full border px-4 py-2 text-[#C4C4C4] ${
              step === 1
                ? "border-[#00ADEE] bg-[#00ADEE] text-white"
                : "bg-white"
            }`}
            onClick={() => handleStepChange(1)}
          >
            1
          </button>
          <span
            className={`ml-1 bg-white text-[20px] ring-8 ring-white ${
              step === 1 ? "text-black" : "text-[#C4C4C4]"
            }`}
          >
            اختر الخدمات
          </span>
        </div>
        <div className=" flex items-center bg-white px-8">
          <button
            className={`ml-2 rounded-full border px-4 py-2 text-[#C4C4C4] ${
              step === 2
                ? "border-[#00ADEE] bg-[#00ADEE] text-white"
                : "bg-white"
            }`}
            onClick={() => handleStepChange(2)}
          >
            2
          </button>
          <span
            className={`ml-1 bg-white text-[20px] ring-8 ring-white  ${
              step === 2 ? "text-black" : "text-[#C4C4C4]"
            }`}
          >
            التاريخ والوقت
          </span>
        </div>
        <div className=" flex items-center bg-white pr-8">
          <button
            className={`ml-2 rounded-full border px-4 py-2 text-[#C4C4C4] ${
              step === 3
                ? "border-[#00ADEE] bg-[#00ADEE] text-white"
                : "bg-white"
            }`}
            onClick={() => handleStepChange(3)}
          >
            3
          </button>
          <span
            className={`ml-1 bg-white text-[20px] ring-8 ring-white  ${
              step === 3 ? "text-black" : "text-[#C4C4C4]"
            }`}
          >
            معلوماتك
          </span>
        </div>
        {step === 1 && (
          <div className="absolute z-[-1] h-0.5 w-full bg-gray-200"></div>
        )}
        {step === 2 && (
          <div
            className={`absolute left-full right-0 z-[-1] h-0.5 w-1/2 ${
              step === 2 ? "bg-blue-500" : "bg-gray-200"
            }`}
          ></div>
        )}
        {step === 3 && (
          <div
            className={`absolute left-0 z-[-1] h-0.5 w-1/2 ${
              step === 3 ? "bg-blue-500" : "bg-gray-200"
            }`}
          ></div>
        )}
      </div>
      <hr className="border-[1px] border-[#E5F7FD]" />
      {/* content */}
      <div className="h-auto rounded border-b-2 border-[#E5F7FD] p-4">
        {getStepComponent()}
      </div>
      {/* button */}
      <div className="flex items-center justify-between p-4">
        <button
          className="h-[50px] w-[150px] rounded-full border-2 border-solid border-[#00ADEE] bg-white px-6 text-[1.4rem] text-[#00ADEE] hover:border-none hover:bg-[#00ADEE] hover:text-white"
          onClick={handlePrevStep}
          disabled={step === 1}
        >
          الرجوع
        </button>
        <button
          type="submit"
          className="h-[50px] w-[150px] rounded-full border-2 border-solid border-[#00ADEE] bg-[#00ADEE] px-6 text-[1.4rem] text-white hover:bg-white hover:text-[#00ADEE]"
          onClick={handleNextStep}
        >
          {step === 3 ? "ارسال" : "استمرار"}
        </button>
      </div>
    </Fragment>
  );
};

export default StepComponent;
