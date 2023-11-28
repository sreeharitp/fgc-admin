import { useFormik } from "formik";
import React from "react";
import {  validationSchema7 } from "../Validation";

const onSubmit = async (values, actions) => {
  console.log(values);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const AddForm8 = () => {
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
      email: "",
      phone: "",
      image: "",
    },
    validationSchema: validationSchema7,
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
        <label htmlFor="">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors.email && touched.email
              ? "border-red-600 border"
              : ""
          }
        />
        {errors.email && touched.email ? (
          <p className="text-[16px] text-red-500 mb-3">{errors.email}</p>
        ) : null}
          <label htmlFor="">Phone</label>
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="Phone"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          className={` ${
            errors.phone && touched.phone
              ? "border-red-600 border"
              : ""
          }
          `}
        />
        {errors.phone && touched.phone ? (
          <p className="text-[16px] text-red-500 mb-3">
            {errors.phone}
          </p>
        ) : null}
        <label htmlFor="">Image</label>
        <input
          type="file"
          name="image"
          id="image"
          value={values.image}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors.image && touched.image ? "border-red-600 border" : ""
          }
        />
        {errors.image && touched.image ? (
          <p className="text-[16px] text-red-500 mb-3">{errors.image}</p>
        ) : null}
        <button className="submit" type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddForm8;
