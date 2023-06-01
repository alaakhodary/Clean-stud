import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Formik, Field, ErrorMessage, Form } from "formik";

import GuidelinesForSelection from "../../BookNow/components/GuidelinesForSelection";

interface FormValues {
  name: string;
  phone: string;
  address: string;
  detailedAddress: string;
}

const EnteringInfo = () => {
  const handleSubmit = (
    values: FormValues,
    { setSubmitting, resetForm }: any
  ) => {
    console.log(values);

    resetForm();
    setSubmitting(false);
  };

  const validateForm = (values: FormValues) => {
    // Implement your validation logic here
    const errors: Partial<FormValues> = {};

    if (!values.name) {
      errors.name = "يرجى إدخال الاسم";
    }

    if (!values.phone) {
      errors.phone = "يرجى إدخال رقم الجوال";
    }

    if (!values.address) {
      errors.address = "يرجى إدخال العنوان";
    }
    if (!values.detailedAddress) {
      errors.detailedAddress = "يرجى إدخال العنوان التفصيلي";
    }

    return errors;
  };

  return (
    <Fragment>
      <div className="flex items-center">
        <GuidelinesForSelection text="ادخل معلوماتك" />
        <Link to="#" className="text-[1.2rem] text-[#00ADEE]">
          تسجيل الدخول
        </Link>
      </div>
      <Formik<FormValues>
        initialValues={{
          name: "",
          phone: "",
          address: "",
          detailedAddress: "",
        }}
        onSubmit={handleSubmit}
        validate={validateForm}
      >
        {({ values, handleChange }) => (
          <Form className="p-4">
            <div className="flex gap-6">
              <div className="mb-4 w-[35%]">
                <label
                  htmlFor="name"
                  className="mb-2 block text-[19px] font-medium text-[#1D1D35]"
                >
                  الاسم:
                </label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  className="h-12 w-full rounded-xl border-2 border-[#F2F2F2] p-5 px-4 outline-none placeholder:border-[#F2F2F2] placeholder:text-[#CCD2E3]"
                  onChange={handleChange}
                  value={values.name}
                  placeholder="الاسم"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="mt-1 text-red-500"
                />
              </div>
              <div className="mb-4 w-[35%]">
                <label
                  htmlFor="phone"
                  className="mb-2 block text-[19px] font-medium text-[#1D1D35]"
                >
                  رقم الجوال:
                </label>
                <Field
                  type="text"
                  name="phone"
                  id="phone"
                  className="h-12 w-full rounded-xl border-2 border-[#F2F2F2] p-5 px-4 outline-none placeholder:border-[#F2F2F2] placeholder:text-[#CCD2E3]"
                  onChange={handleChange}
                  value={values.phone}
                  placeholder="رقم الجوال"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="mt-1 text-red-500"
                />
              </div>
            </div>
            <div className="mt-6 flex gap-6">
              <div className="mb-4 w-[35%]">
                <label
                  htmlFor="address"
                  className="mb-2 block text-[19px] font-medium text-[#1D1D35]"
                >
                  العنوان:
                </label>
                <Field
                  type="text"
                  name="address"
                  id="address"
                  className="h-12 w-full rounded-xl border-2 border-[#F2F2F2] p-5 px-4 outline-none placeholder:border-[#F2F2F2] placeholder:text-[#CCD2E3]"
                  onChange={handleChange}
                  value={values.address}
                  placeholder="العنوان"
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="mt-1 text-red-500"
                />
              </div>
              <div className="mb-4 w-[35%]">
                <label
                  htmlFor="detailedAddress"
                  className="mb-2 block text-[19px] font-medium text-[#1D1D35]"
                >
                  العنوان التفصيلي:
                </label>
                <Field
                  type="text"
                  name="detailedAddress"
                  id="detailedAddress"
                  className="h-12 w-full rounded-xl border-2 border-[#F2F2F2] p-5 px-4 outline-none placeholder:border-[#F2F2F2] placeholder:text-[#CCD2E3]"
                  onChange={handleChange}
                  value={values.detailedAddress}
                  placeholder="العنوان التفصيلي"
                />
                <ErrorMessage
                  name="detailedAddress"
                  component="div"
                  className="mt-1 text-red-500"
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};

export default EnteringInfo;
