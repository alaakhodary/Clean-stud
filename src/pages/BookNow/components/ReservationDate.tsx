import { Fragment, useState } from "react";
import GuidelinesForSelection from "./GuidelinesForSelection";
import DateTimePicker from "./DateTimePicker";

interface FormValues {
  selectedOption: string;
  selectedDateTime: string;
}

interface FormErrors {
  option: string;
  dateTime: string;
}

const ReservationDate: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    selectedOption: "",
    selectedDateTime: "",
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({
    option: "",
    dateTime: "",
  });

  const handleOptionChange = (value: string) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      selectedOption: value,
    }));
    setFormErrors((prevFormErrors) => ({
      ...prevFormErrors,
      option: "",
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newErrors: FormErrors = {
      option: "",
      dateTime: "",
    };

    if (!formValues.selectedOption) {
      newErrors.option = "Please select an option";
    }

    if (!formValues.selectedDateTime) {
      newErrors.dateTime = "Please select a date and time";
    }

    setFormErrors(newErrors);

    if (newErrors.option || newErrors.dateTime) {
      return;
    }

    console.log("Selected option:", formValues.selectedOption);
    console.log("Selected date and time:", formValues.selectedDateTime);

    setFormValues({
      selectedOption: "",
      selectedDateTime: "",
    });
  };

  return (
    <Fragment>
      <GuidelinesForSelection text="اختر موعد الحجز" />
      <form onSubmit={handleSubmit}>
        <div className="mb-2 px-4 text-lg text-[#1D1D35]">تكرار الخدمة</div>
        <div className="flex items-center px-4">
          <div className="ml-3 rounded-lg border px-3 py-2">
            <label className="flex items-center text-[#7D7E82]">
              <input
                type="radio"
                name="option"
                value="option1"
                checked={formValues.selectedOption === "option1"}
                onChange={() => handleOptionChange("option1")}
                className="ml-2 h-[20px] w-[20px]"
              />
              مره واحده
            </label>
          </div>
          <div className="ml-3 rounded-lg border p-2">
            <label className="flex items-center text-[#7D7E82]">
              <input
                type="radio"
                name="option"
                value="option2"
                checked={formValues.selectedOption === "option2"}
                onChange={() => handleOptionChange("option2")}
                className="ml-2 h-[20px] w-[20px]"
              />
              يوميا
            </label>
          </div>
          <div className="ml-3 rounded-lg border px-3 py-2">
            <label className="flex items-center text-[#7D7E82]">
              <input
                type="radio"
                name="option"
                value="option3"
                checked={formValues.selectedOption === "option3"}
                onChange={() => handleOptionChange("option3")}
                className="ml-2 h-[20px] w-[20px]"
              />
              اسبوعيا
            </label>
          </div>
          <div className="ml-3 rounded-lg border px-3 py-2">
            <label className="flex items-center text-[#7D7E82]">
              <input
                type="radio"
                name="option"
                value="option4"
                checked={formValues.selectedOption === "option4"}
                onChange={() => handleOptionChange("option4")}
                className="ml-2 h-[20px] w-[20px]"
              />
              شهريا
            </label>
          </div>
        </div>
        {formErrors.option && <div>{formErrors.option}</div>}
        <DateTimePicker />
        {formErrors.dateTime && <div>{formErrors.dateTime}</div>}
      </form>
    </Fragment>
  );
};

export default ReservationDate;
