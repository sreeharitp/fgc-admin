import { useFormik } from "formik";
import React from "react";
import { validationSchema8 } from "../Validation";

const onSubmit = async (values, actions) => {
  console.log(values);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const AddForm9 = () => {
  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    handleBlur,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      title: "",
      ar_title: "",
      generalCommunication: "",
      ar_generalCommunication: "",
      salesAndSupport: "",
      ar_salesAndSupport: "",
    },
    validationSchema: validationSchema8,
    onSubmit,
  });
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors.title && touched.title ? "border-red-600 border" : ""
          }
        />
        {errors.title && touched.title ? (
          <p className="text-[16px] text-red-500 mb-3">{errors.title}</p>
        ) : null}
        <input
          type="text"
          name="ar_title"
          id="ar_title"
          placeholder="Title (Arabic)"
          value={values.ar_title}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`arabic ${
            errors.ar_title && touched.ar_title ? "border-red-600 border" : ""
          }
          `}
        />
        {errors.ar_title && touched.ar_title ? (
          <p className="text-[16px] text-red-500 mb-3">{errors.ar_title}</p>
        ) : null}
        <label htmlFor="">General Communication</label>
        <input
          type="text"
          name="generalCommunication"
          id="generalCommunication"
          placeholder="General Communication"
          value={values.generalCommunication}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors.generalCommunication && touched.generalCommunication
              ? "border-red-600 border"
              : ""
          }
        />
        {errors.generalCommunication && touched.generalCommunication ? (
          <p className="text-[16px] text-red-500 mb-3">
            {errors.generalCommunication}
          </p>
        ) : null}
        <input
          type="text"
          name="ar_generalCommunication"
          id="ar_generalCommunication"
          placeholder="General Communication (Arabic)"
          value={values.ar_generalCommunication}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`arabic ${
            errors.ar_generalCommunication && touched.ar_generalCommunication
              ? "border-red-600 border"
              : ""
          }
          `}
        />
        {errors.ar_generalCommunication && touched.ar_generalCommunication ? (
          <p className="text-[16px] text-red-500 mb-3">
            {errors.ar_generalCommunication}
          </p>
        ) : null}
        <label htmlFor="">Sales & Support</label>
        <input
          type="text"
          name="salesAndSupport"
          id="salesAndSupport"
          placeholder="Sales & Support"
          value={values.salesAndSupport}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors.salesAndSupport && touched.salesAndSupport
              ? "border-red-600 border"
              : ""
          }
        />
        {errors.salesAndSupport && touched.salesAndSupport ? (
          <p className="text-[16px] text-red-500 mb-3">
            {errors.salesAndSupport}
          </p>
        ) : null}
        <input
          type="text"
          name="ar_salesAndSupport"
          id="ar_salesAndSupport"
          placeholder="Sales & Support (Arabic)"
          value={values.ar_salesAndSupport}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`arabic ${
            errors.ar_salesAndSupport && touched.ar_salesAndSupport
              ? "border-red-600 border"
              : ""
          }
          `}
        />
        {errors.ar_salesAndSupport && touched.ar_salesAndSupport ? (
          <p className="text-[16px] text-red-500 mb-3">
            {errors.ar_salesAndSupport}
          </p>
        ) : null}

        <button className="submit" type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddForm9;
