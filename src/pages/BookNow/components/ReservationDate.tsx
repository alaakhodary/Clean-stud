import { Fragment, useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import GuidelinesForSelection from "./GuidelinesForSelection";

import calender from "../../../assest/Date_range_duotone.svg";

interface FormValues {
  selectedOption: string;
  selectedDateTime: string;
}

const ReservationDate: React.FC = () => {
  const initialValues: FormValues = {
    selectedOption: "",
    selectedDateTime: "",
  };
  const datePickerRef = useRef(null);
  const validationSchema = Yup.object({
    selectedOption: Yup.string().required("يرجى تحديد خيار"),
    selectedDateTime: Yup.string().required("يرجى تحديد التاريخ والوقت"),
  });
  const [showPicker, setShowPicker] = useState(false);

  const handleIconClick = () => {
    setShowPicker(true);
    // @ts-ignore
    datePickerRef?.current?.focus();
  };
  const handleBlur = () => {
    setShowPicker(false);
  };
  const handleSubmit = (values: FormValues, { resetForm }: any) => {
    console.log(values.selectedOption);
    console.log(values.selectedDateTime);

    resetForm();
  };

  return (
    <Fragment>
      <GuidelinesForSelection text="اختر موعد الحجز" />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-2 px-4 text-lg text-[#1D1D35]">تكرار الخدمة</div>
          <div className="flex items-center px-4">
            <div className="ml-3 rounded-lg border px-3 py-2">
              <label className="flex items-center text-[#7D7E82]">
                <Field
                  type="radio"
                  name="selectedOption"
                  value="option1"
                  className="ml-2 h-[20px] w-[20px]"
                />
                مرة واحدة
              </label>
            </div>
            <div className="ml-3 rounded-lg border px-3 py-2">
              <label className="flex items-center text-[#7D7E82]">
                <Field
                  type="radio"
                  name="selectedOption"
                  value="option2"
                  className="ml-2 h-[20px] w-[20px]"
                />
                يوميا
              </label>
            </div>
            <div className="ml-3 rounded-lg border px-3 py-2">
              <label className="flex items-center text-[#7D7E82]">
                <Field
                  type="radio"
                  name="selectedOption"
                  value="option3"
                  className="ml-2 h-[20px] w-[20px]"
                />
                اسبوعيا
              </label>
            </div>
            <div className="ml-3 rounded-lg border px-3 py-2">
              <label className="flex items-center text-[#7D7E82]">
                <Field
                  type="radio"
                  name="selectedOption"
                  value="option4"
                  className="ml-2 h-[20px] w-[20px]"
                />
                شهريا
              </label>
            </div>
          </div>
          <ErrorMessage
            name="selectedOption"
            component="div"
            className="mt-1 px-4 text-red-500"
          />
          <div className="mt-5 px-4">
            <label
              htmlFor="datetime-input"
              className="mb-2 block text-lg text-[#1D1D35]"
            >
              التاريخ والوقت
            </label>
            <div className="relative">
              <Field name="selectedDateTime">
                {({ field }: { field: { value: string } }) => (
                  <input
                    type={showPicker ? "datetime-local" : "text"}
                    id="datetime-input"
                    {...field}
                    placeholder="التاريخ والوقت"
                    onBlur={handleBlur}
                    readOnly={!showPicker}
                    ref={datePickerRef}
                    className="w-[16rem] rounded-xl border-2 border-[#F2F2F2] px-3 py-3 outline-none"
                  />
                )}
              </Field>
              {!showPicker && (
                <div className="absolute inset-y-0 right-[13rem] flex items-center px-2">
                  <img
                    src={calender}
                    alt="calender"
                    className="h-6 w-6 cursor-pointer text-[#CCD2E3]"
                    onClick={handleIconClick}
                  />
                </div>
              )}
            </div>
          </div>
          <ErrorMessage
            name="selectedDateTime"
            component="div"
            className="mt-1 px-4 text-red-500"
          />
          <button
            type="submit"
            className="mr-4 mt-3 rounded bg-black p-2 px-4 text-white"
          >
            submit
          </button>
        </Form>
      </Formik>
    </Fragment>
  );
};

export default ReservationDate;
