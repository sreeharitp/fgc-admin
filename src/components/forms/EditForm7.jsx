import { useFormik } from "formik";
import React from "react";
import { validationSchema6 } from "../Validation";

const onSubmit = async (values, actions) => {
  console.log(values);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const EditForm7 = () => {
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
      description: "",
      ar_description: "",
      boxtitle: "",
      ar_boxtitle: "",
      boxdescription: "",
      ar_boxdescription: "",
    },
    validationSchema: validationSchema6,
    onSubmit,
  });
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Why Us Description</label>
        <input
          type="text"
          name="description"
          id="description"
          placeholder="Why Us Description"
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors.description && touched.description ? "border-red-600 border" : ""
          }
        />
        {errors.description && touched.description ? (
          <p className="text-[16px] text-red-500 mb-3">{errors.description}</p>
        ) : null}
        <input
          type="text"
          name="ar_description"
          id="ar_description"
          placeholder="Why Us Description (Arabic)"
          value={values.ar_description}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`arabic ${
            errors.ar_description && touched.ar_description ? "border-red-600 border" : ""
          }
          `}
        />
        {errors.ar_description && touched.ar_description ? (
          <p className="text-[16px] text-red-500 mb-3">{errors.ar_description}</p>
        ) : null}
        <label htmlFor="">Box Title</label>
        <input
          type="text"
          name="boxtitle"
          id="boxtitle"
          placeholder="Box Title"
          value={values.boxtitle}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors.boxtitle && touched.boxtitle
              ? "border-red-600 border"
              : ""
          }
        />
        {errors.boxtitle && touched.boxtitle ? (
          <p className="text-[16px] text-red-500 mb-3">{errors.boxtitle}</p>
        ) : null}
        <input
          type="text"
          name="ar_boxtitle"
          id="ar_boxtitle"
          placeholder="Box Title (Arabic)"
          value={values.ar_boxtitle}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`arabic ${
            errors.ar_boxtitle && touched.ar_boxtitle
              ? "border-red-600 border"
              : ""
          }
          `}
        />
        {errors.ar_boxtitle && touched.ar_boxtitle ? (
          <p className="text-[16px] text-red-500 mb-3">
            {errors.ar_boxtitle}
          </p>
        ) : null}
        
        <label htmlFor="">Box Description</label>
        <input
          type="text"
          name="boxdescription"
          id="boxdescription"
          placeholder="Box Description"
          value={values.boxdescription}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors.boxdescription && touched.boxdescription
              ? "border-red-600 border"
              : ""
          }
        />
        {errors.boxdescription && touched.boxdescription ? (
          <p className="text-[16px] text-red-500 mb-3">{errors.boxdescription}</p>
        ) : null}
        <input
          type="text"
          name="ar_boxdescription"
          id="ar_boxdescription"
          placeholder="Box Description (Arabic)"
          value={values.ar_boxdescription}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`arabic ${
            errors.ar_boxdescription && touched.ar_boxdescription
              ? "border-red-600 border"
              : ""
          }
          `}
        />
        {errors.ar_boxdescription && touched.ar_boxdescription ? (
          <p className="text-[16px] text-red-500 mb-3">
            {errors.ar_boxdescription}
          </p>
        ) : null}
        
        <button className="submit" type="submit" disabled={isSubmitting}>
          Save
        </button>
      </form>
    </div>
  );
};

export default EditForm7;
