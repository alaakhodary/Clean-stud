import React, { Fragment, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import OptionsList from "./ServicesList";
import ReservationDate from "./ReservationDate";
import EnteringInfo from "./EnteringInfo";
import Button from "../../../components/Button";

const steps = [
  { stepNumber: 1, label: "اختر الخدمات" },
  { stepNumber: 2, label: "التاريخ والوقت" },
  { stepNumber: 3, label: "معلوماتك" },
];

const StepComponent = ({ handleCheck }: any) => {
  const [step, setStep] = useState(1);

  const handleStepChange = (nextStep: number) => {
    if (nextStep !== 1) {
      return;
    }
    setStep(nextStep);
  };

  const getStepComponent = (): JSX.Element | null => {
    switch (step) {
      case 1:
        return <OptionsList handleCheck={handleCheck} />;
      case 2:
        return <ReservationDate />;
      case 3:
        return <EnteringInfo />;
      default:
        return null;
    }
  };

  const handleNextStep = () => {
    if (step === 3) {
      return;
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
      <div className="relative my-4 mb-4 flex items-center justify-between">
        {steps.map((s, index) => (
          <Fragment key={s.stepNumber}>
            {index !== steps.length - 1 && (
              <>
                <div
                  className={`absolute left-0 z-[-1] h-0.5 w-[100%] ${
                    step === 1
                      ? "bg-gray-200"
                      : "bg-gray-200" && step === 2
                      ? "left-0 bg-[#00ADEE]"
                      : "bg-[#00ADEE]"
                  }
                }`}
                ></div>
                <div
                  className={`absolute left-0 z-[-1] h-0.5 w-[50%] ${
                    step === 2
                      ? "bg-gray-200"
                      : "bg-gray-200" && step === 3
                      ? "bg-[#00ADEE]"
                      : "bg-gray-200"
                  }
                }`}
                ></div>
              </>
            )}
            <div
              className={`flex items-center bg-white ${
                s.stepNumber === step ? "pl-8 pr-8" : "pl-8 pr-8"
              }`}
            >
              <button
                className={`ml-2 flex h-10 w-10 items-center justify-center rounded-full border px-4 py-2 text-[#C4C4C4] ${
                  s.stepNumber === step
                    ? "border-[#00ADEE] bg-[#00ADEE] text-white"
                    : "bg-white"
                } ${
                  s.stepNumber === 1
                    ? step >= 2
                      ? "border-[#00ADEE] bg-white text-[1.5rem] text-[#00ADEE]"
                      : s.stepNumber
                    : s.stepNumber === 2 && step === 3
                    ? "border-[#00ADEE] bg-white text-[1.5rem] text-[#00ADEE]"
                    : s.stepNumber
                }`}
                onClick={() => handleStepChange(s.stepNumber)}
              >
                {s.stepNumber === 1 ? (
                  step >= 2 ? (
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="border-[#00ADEE] bg-white text-[1.5rem] text-[#00ADEE]"
                    />
                  ) : (
                    s.stepNumber
                  )
                ) : s.stepNumber === 2 && step === 3 ? (
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="bg-white text-[1.5rem] text-[#00ADEE]"
                  />
                ) : (
                  s.stepNumber
                )}
              </button>
              <span
                className={`ml-1 bg-white text-[20px] ring-8 ring-white ${
                  s.stepNumber === step ? "text-black" : "text-[#C4C4C4]"
                }`}
              >
                {s.label}
              </span>
            </div>
          </Fragment>
        ))}
      </div>
      <hr className="border-[1px] border-[#E5F7FD]" />
      <div className="h-auto rounded border-[#E5F7FD] p-4">
        {getStepComponent()}
      </div>
      <hr className="border-[1px] border-[#E5F7FD]" />
      <div className="flex items-center justify-between p-4">
        <div>
          <Button
            text="الرجوع"
            variant="primary"
            onClick={handlePrevStep}
            type="button"
          />
        </div>
        <div>
          <Button
            text={step === 3 ? "ارسال" : "استمرار"}
            onClick={handleNextStep}
            type={step === 3 ? "submit" : "button"}
            variant="secondary"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default StepComponent;
