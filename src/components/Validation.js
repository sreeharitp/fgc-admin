import * as yup from "yup";

export const validationSchema1 = yup.object().shape({
  title: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  ar_title: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  description: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  ar_description: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  image: yup.string().required("Image is required"),
});

export const validationSchema2 = yup.object().shape({
  image: yup.string().required("Image is required"),
});

export const validationSchema3 = yup.object().shape({
  title: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  ar_title: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  description: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  ar_description: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  image: yup.string().required("Image is required"),
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot exceed 50 characters"),
  designation: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
});

export const validationSchema4 = yup.object().shape({
  title: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  ar_title: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  description: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  ar_description: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(
      /^([2-9][0-8][0-9])?[2-9][0-9]{2}[0-9]{4}$/,
      "Invalid phone number"
    ),
});

export const validationSchema5 = yup.object().shape({
  title: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  ar_title: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  description: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  ar_description: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
});

export const validationSchema6 = yup.object().shape({
  description: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  ar_description: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  boxtitle: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  ar_boxtitle: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  boxdescription: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  ar_boxdescription: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
});

export const validationSchema7 = yup.object().shape({
  title: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  ar_title: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(
      /^([2-9][0-8][0-9])?[2-9][0-9]{2}[0-9]{4}$/,
      "Invalid phone number"
    ),
  image: yup.string().required("Image is required"),
});

export const validationSchema8 = yup.object().shape({
  title: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  ar_title: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  generalCommunication: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  ar_generalCommunication: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  salesAndSupport: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  ar_salesAndSupport: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
});

export const validationSchema9 = yup.object().shape({
  title: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  ar_title: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  up_description: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  ar_up_description: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  description: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  ar_description: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  image: yup.string().required("Image is required"),
});

export const validationSchema10 = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot exceed 50 characters"),
  designation: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  image: yup.string().required("Image is required"),
});

export const validationSchema11 = yup.object().shape({
  title: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  ar_title: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  description: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  ar_description: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  image: yup.string().required("Image is required"),
  ar_image: yup.string().required("Image is required"),
});

export const validationSchema12 = yup.object().shape({
  title: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  ar_title: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  description: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  ar_description: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  // points: yup
  //   .array()
  //   .required("This field is required")
  //   .min(2, "Name must be at least 2 characters"),
  // ar_points: yup
  //   .array()
  //   .required("This field is required")
  //   .min(2, "Name must be at least 2 characters"),
  image: yup.string().required("Image is required"),
});

export const validationSchema13 = yup.object().shape({
  home_services: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  ar_home_services: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  happy_clients: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  ar_happy_clients: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  contact_us_get_in_touch: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  ar_contact_us_get_in_touch: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  meet_team: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
  ar_meet_team: yup
    .string()
    .required("This field is required")
    .min(2, "Name must be at least 2 characters"),
});

export const validationSchema14 = yup.object().shape({
  customer: yup
    .number()
    .required("This field is required")
    .min(1, "Name must be at least 1 characters"),
  track_record: yup
    .number()
    .required("This field is required")
    .min(1, "Name must be at least 1 characters"),
  client_around: yup
    .number()
    .required("This field is required")
    .min(1, "Name must be at least 1 characters"),
  projects: yup
    .number()
    .required("This field is required")
    .min(1, "Name must be at least 1 characters"),
  reviews: yup
    .number()
    .required("This field is required")
    .min(1, "Name must be at least 1 characters"),
});
