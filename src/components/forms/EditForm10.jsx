import { useFormik } from "formik";
import React from "react";
import {  validationSchema9 } from "../Validation";

const onSubmit = async (values, actions) => {
  console.log(values);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const EditForm10 = () => {
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
      up_description: "",
      ar_up_description: "",
      description: "",
      ar_description: "",
      image: "",
    },
    validationSchema: validationSchema9,
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
         <label htmlFor="">Description1</label>
        <input
          type="text"
          name="up_description"
          id="up_description"
          placeholder="Description1"
          value={values.up_description}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors.up_description && touched.up_description
              ? "border-red-600 border"
              : ""
          }
        />
        {errors.up_description && touched.up_description ? (
          <p className="text-[16px] text-red-500 mb-3">{errors.up_description}</p>
        ) : null}
        <input
          type="text"
          name="ar_up_description"
          id="ar_up_description"
          placeholder="Description1 (Arabic)"
          value={values.ar_up_description}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`arabic ${
            errors.ar_up_description && touched.ar_up_description
              ? "border-red-600 border"
              : ""
          }
          `}
        />
        {errors.ar_up_description && touched.ar_up_description ? (
          <p className="text-[16px] text-red-500 mb-3">
            {errors.ar_up_description}
          </p>
        ) : null}
        <label htmlFor="">Description2</label>
        <input
          type="text"
          name="description"
          id="description"
          placeholder="Description"
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors.description && touched.description
              ? "border-red-600 border"
              : ""
          }
        />
        {errors.description && touched.description ? (
          <p className="text-[16px] text-red-500 mb-3">{errors.description}</p>
        ) : null}
        <input
          type="text"
          name="ar_description"
          id="ar_description"
          placeholder="Description (Arabic)"
          value={values.ar_description}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`arabic ${
            errors.ar_description && touched.ar_description
              ? "border-red-600 border"
              : ""
          }
          `}
        />
        {errors.ar_description && touched.ar_description ? (
          <p className="text-[16px] text-red-500 mb-3">
            {errors.ar_description}
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
          Save
        </button>
      </form>
    </div>
  );
};

export default EditForm10;
