import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface IFormDataProp {
  option: string;
  name: string;
  phoneNumber: string;
  message: string;
}

const validationSchema = Yup.object().shape({
  option: Yup.string().required("Please select an option"),
  name: Yup.string().required("Please enter your name"),
  phoneNumber: Yup.string().required("Please enter your phone number"),
  message: Yup.string().required("Please enter a message"),
});

const ContactForm: React.FC = () => {
  const handleSubmit = (values: IFormDataProp) => {
    // Perform further actions, such as sending data to an API
    console.log(values);
  };

  return (
    <Formik
      initialValues={{
        option: "",
        name: "",
        phoneNumber: "",
        message: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="mx-auto w-full">
        <div className="mb-4">
          <label htmlFor="option" className="mb-1 block text-lg text-[#1D1D35]">
            الخدمة
          </label>
          <Field
            as="select"
            id="option"
            name="option"
            className="h-12 w-full rounded-xl border-2 border-[#F2F2F2] px-2 font-semibold text-[#CCD2E3] outline-none"
          >
            <option value="" className="font-bold">
              اسم الخدمة
            </option>
            <option value="1" className="font-bold">
              1
            </option>
          </Field>
          <ErrorMessage
            name="option"
            component="div"
            className="mt-1 text-red-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="mb-1 block text-lg text-[#1D1D35]">
            الاسم
          </label>
          <Field
            type="text"
            id="name"
            name="name"
            className="h-12 w-full rounded-xl border-2 border-[#F2F2F2] px-2 font-semibold text-[black] outline-none"
            placeholder="الاسم"
          />
          <ErrorMessage
            name="name"
            component="div"
            className="mt-1 text-red-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="mb-1 block text-lg text-[#1D1D35]"
          >
            رقم الجوال
          </label>
          <Field
            type="string"
            id="phoneNumber"
            name="phoneNumber"
            className="h-12 w-full rounded-xl border-2 border-[#F2F2F2] px-2 font-semibold text-[black] outline-none"
            placeholder="رقم الجوال"
          />
          <ErrorMessage
            name="phoneNumber"
            component="div"
            className="mt-1 text-red-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="mb-1 block text-lg text-[#1D1D35]"
          >
            الرسالة
          </label>
          <Field
            as="textarea"
            id="message"
            name="message"
            className="h-24 w-full resize-none rounded-xl border-2 border-[#F2F2F2] px-2 py-2 font-semibold text-[black] outline-none"
            placeholder="اكتب رسالتك هنا.."
          />
          <ErrorMessage
            name="message"
            component="div"
            className="mt-1 text-red-500"
          />
        </div>
        <button
          type="submit"
          className="h-14 w-36 rounded-full border-2 border-solid border-[#00ADEE] bg-[#00ADEE] px-6 text-[1.4rem] text-white hover:bg-white hover:text-[#00ADEE]"
        >
          أرسل
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
