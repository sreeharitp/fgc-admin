import { useFormik } from "formik";
import React from "react";
import { validationSchema14 } from "../Validation";

const onSubmit = async (values, actions) => {
  console.log(values);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const AddForm15 = () => {
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
      customer: "",
      track_record: "",
      client_around: "",
      projects: "",
      reviews: "",
    },
    validationSchema: validationSchema14,
    onSubmit,
  });
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Customer satisfaction</label>
        <input
          type="text"
          name="customer"
          id="customer"
          placeholder="Customer satisfaction"
          value={values.customer}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors.customer && touched.customer ? "border-red-600 border" : ""
          }
        />
        {errors.customer && touched.customer ? (
          <p className="text-[16px] text-red-500 mb-3">{errors.customer}</p>
        ) : null}
        <label htmlFor="">Proven Track Record</label>
        <input
          type="text"
          name="track_record"
          id="track_record"
          placeholder="Proven Track Record"
          value={values.track_record}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors.track_record && touched.track_record
              ? "border-red-600 border"
              : ""
          }
        />
        {errors.track_record && touched.track_record ? (
          <p className="text-[16px] text-red-500 mb-3">{errors.track_record}</p>
        ) : null}
        <label htmlFor="">Clients Around</label>
        <input
          type="text"
          name="client_around"
          id="client_around"
          placeholder="Proven Track Record"
          value={values.client_around}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors.client_around && touched.client_around
              ? "border-red-600 border"
              : ""
          }
        />
        {errors.client_around && touched.client_around ? (
          <p className="text-[16px] text-red-500 mb-3">
            {errors.client_around}
          </p>
        ) : null}
        <label htmlFor="">Projects Completed</label>
        <input
          type="text"
          name="projects"
          id="projects"
          placeholder="Projects Completed"
          value={values.projects}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors.projects && touched.projects ? "border-red-600 border" : ""
          }
        />
        {errors.projects && touched.projects ? (
          <p className="text-[16px] text-red-500 mb-3">{errors.projects}</p>
        ) : null}
        <label htmlFor="">Reviews</label>
        <input
          type="text"
          name="reviews"
          id="reviews"
          placeholder="Reviews"
          value={values.reviews}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors.reviews && touched.reviews ? "border-red-600 border" : ""
          }
        />
        {errors.reviews && touched.reviews ? (
          <p className="text-[16px] text-red-500 mb-3">{errors.reviews}</p>
        ) : null}

        <button className="submit" type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddForm15;
