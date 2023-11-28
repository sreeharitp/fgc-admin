import { useFormik } from "formik";
import React from "react";
import { validationSchema3 } from "../Validation";

const onSubmit = async (values, actions) => {
  console.log(values);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const AddForm3 = () => {
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
      description: "",
      ar_description: "",
      image: "",
      name:"",
      designation:""
    },
    validationSchema: validationSchema3,
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
        <label htmlFor="">Description</label>
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
         <label htmlFor="">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={` ${
            errors.name && touched.name
              ? "border-red-600 border"
              : ""
          }
          `}
        />
        {errors.name && touched.name ? (
          <p className="text-[16px] text-red-500 mb-3">
            {errors.name}
          </p>
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
          className={` ${
            errors.designation && touched.designation
              ? "border-red-600 border"
              : ""
          }
          `}
        />
        {errors.designation && touched.designation ? (
          <p className="text-[16px] text-red-500 mb-3">
            {errors.designation}
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

export default AddForm3;
