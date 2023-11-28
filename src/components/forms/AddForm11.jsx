import { useFormik } from "formik";
import React from "react";
import {  validationSchema10 } from "../Validation";

const onSubmit = async (values, actions) => {
  console.log(values);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const AddForm11 = () => {
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
      name: "",
      designation:"",
      image: "",
    },
    validationSchema: validationSchema10,
    onSubmit,
  });
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors.name && touched.name ? "border-red-600 border" : ""
          }
        />
        {errors.name && touched.name ? (
          <p className="text-[16px] text-red-500 mb-3">{errors.name}</p>
        ) : null}
        <label htmlFor="">Designation</label>
        <input
          type="text"
          name="designation"
          id="designation"
          placeholder="Designation"
          value={values.designation}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors.designation && touched.designation ? "border-red-600 border" : ""
          }
        />
        {errors.designation && touched.designation ? (
          <p className="text-[16px] text-red-500 mb-3">{errors.designation}</p>
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

export default AddForm11;
