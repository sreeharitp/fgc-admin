"use client"

import { useFormik } from "formik";
import React, { useState } from "react";
import { validationSchema12 } from "../Validation";

const onSubmit = async (values, actions) => {
  console.log(values);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};



const AddForm13 = () => {

  const [inputValue, setInputValue] = useState("");

  const [dataArray, setDataArray] = useState([]);
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  
  const handleAddClick = () => {
    if (inputValue.trim() !== "") {
      setDataArray([...dataArray, inputValue]);
      setInputValue("");
    }
  };
console.log(dataArray);
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
      points: "",
      ar_points: "",
      image: "",
    },
    validationSchema: validationSchema12,
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
        <label htmlFor="">Points</label>
        <div className="flex items-center gap-3">
          <input
            type="text"
            name="points"
            id="points"
            placeholder="Points"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleBlur}
            // className={
            //   errors.points && touched.points ? "border-red-600 border" : ""
            // }
          />
          <button
            onClick={handleAddClick}
            className="px-5 py-3 h-full bg-slate-200 mb-3 rounded-lg"
          >
            Add
          </button>
        </div>
        {/* {errors.points && touched.points ? (
          <p className="text-[16px] text-red-500 mb-3">{errors.points}</p>
        ) : null} */}
        <div className="flex items-center gap-3">
          <input
            type="text"
            name="ar_points"
            id="ar_points"
            placeholder="Points (Arabic)"
            value={values.ar_points}
            onChange={handleChange}
            onBlur={handleBlur}
          //   className={`arabic ${
          //     errors.ar_points && touched.ar_points
          //       ? "border-red-600 border"
          //       : ""
          //   }
          // `}
          />
          <button className="px-5 py-3 h-full bg-slate-200 mb-3 rounded-lg">
            Add
          </button>
        </div>
        {/* 
       */}
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

export default AddForm13;
