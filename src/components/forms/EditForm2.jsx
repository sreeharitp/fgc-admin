import { useFormik } from "formik";
import React from "react";
import { validationSchema2 } from "../Validation";

const onSubmit = async (values, actions) => {
  console.log(values);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const EditForm2 = () => {
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
      image: "",
    },
    validationSchema: validationSchema2,
    onSubmit,
  });
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        
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

export default EditForm2;
