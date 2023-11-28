import { useFormik } from "formik";
import React from "react";
import { validationSchema11, validationSchema13 } from "../Validation";

const onSubmit = async (values, actions) => {
  console.log(values);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const AddForm14 = () => {
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
      home_services: "",
      ar_home_services: "",
      happy_clients: "",
      ar_happy_clients: "",
      happy_clients: "",
      ar_happy_clients: "",
      contact_us_get_in_touch: "",
      ar_contact_us_get_in_touch: "",
      meet_team: "",
      ar_meet_team: "",
    },
    validationSchema: validationSchema13,
    onSubmit,
  });
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Home Service Title</label>
        <input
          type="text"
          name="home_services"
          id="home_services"
          placeholder="Home Service Title"
          value={values.home_services}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors.home_services && touched.home_services
              ? "border-red-600 border"
              : ""
          }
        />
        {errors.home_services && touched.home_services ? (
          <p className="text-[16px] text-red-500 mb-3">
            {errors.home_services}
          </p>
        ) : null}
        <input
          type="text"
          name="ar_home_services"
          id="ar_home_services"
          placeholder="Home Service Title (Arabic)"
          value={values.ar_home_services}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`arabic ${
            errors.ar_home_services && touched.ar_home_services
              ? "border-red-600 border"
              : ""
          }
          `}
        />
        {errors.ar_home_services && touched.ar_home_services ? (
          <p className="text-[16px] text-red-500 mb-3">
            {errors.ar_home_services}
          </p>
        ) : null}
        <label htmlFor="">Home Clients Title</label>
        <input
          type="text"
          name="happy_clients"
          id="happy_clients"
          placeholder="Home Clients Title"
          value={values.happy_clients}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors.happy_clients && touched.happy_clients
              ? "border-red-600 border"
              : ""
          }
        />
        {errors.happy_clients && touched.happy_clients ? (
          <p className="text-[16px] text-red-500 mb-3">
            {errors.happy_clients}
          </p>
        ) : null}
        <input
          type="text"
          name="ar_happy_clients"
          id="ar_happy_clients"
          placeholder="Home Clients Title (Arabic)"
          value={values.ar_happy_clients}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`arabic ${
            errors.ar_happy_clients && touched.ar_happy_clients
              ? "border-red-600 border"
              : ""
          }
          `}
        />
        {errors.ar_happy_clients && touched.ar_happy_clients ? (
          <p className="text-[16px] text-red-500 mb-3">
            {errors.ar_happy_clients}
          </p>
        ) : null}
        <label htmlFor="">Contact Get In Touch</label>
        <input
          type="text"
          name="contact_us_get_in_touch"
          id="contact_us_get_in_touch"
          placeholder="Contact Get In Touch"
          value={values.contact_us_get_in_touch}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors.contact_us_get_in_touch && touched.contact_us_get_in_touch
              ? "border-red-600 border"
              : ""
          }
        />
        {errors.contact_us_get_in_touch && touched.contact_us_get_in_touch ? (
          <p className="text-[16px] text-red-500 mb-3">
            {errors.contact_us_get_in_touch}
          </p>
        ) : null}
        <input
          type="text"
          name="ar_contact_us_get_in_touch"
          id="ar_contact_us_get_in_touch"
          placeholder="Contact Get In Touch (Arabic)"
          value={values.ar_contact_us_get_in_touch}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`arabic ${
            errors.ar_contact_us_get_in_touch &&
            touched.ar_contact_us_get_in_touch
              ? "border-red-600 border"
              : ""
          }
          `}
        />
        {errors.ar_contact_us_get_in_touch &&
        touched.ar_contact_us_get_in_touch ? (
          <p className="text-[16px] text-red-500 mb-3">
            {errors.ar_contact_us_get_in_touch}
          </p>
        ) : null}
        <label htmlFor="">Meet The Team</label>
        <input
          type="text"
          name="meet_team"
          id="meet_team"
          placeholder="Meet The Team"
          value={values.meet_team}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors.meet_team && touched.meet_team ? "border-red-600 border" : ""
          }
        />
        {errors.meet_team && touched.meet_team ? (
          <p className="text-[16px] text-red-500 mb-3">{errors.meet_team}</p>
        ) : null}
        <input
          type="text"
          name="ar_meet_team"
          id="ar_meet_team"
          placeholder="Meet The Team (Arabic)"
          value={values.ar_meet_team}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`arabic ${
            errors.ar_meet_team && touched.ar_meet_team
              ? "border-red-600 border"
              : ""
          }
          `}
        />
        {errors.ar_meet_team && touched.ar_meet_team ? (
          <p className="text-[16px] text-red-500 mb-3">{errors.ar_meet_team}</p>
        ) : null}

        <button className="submit" type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddForm14;
