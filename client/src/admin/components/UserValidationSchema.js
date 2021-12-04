import * as Yup from "yup";

export const UserValidationSchema = Yup.object().shape({
  name: Yup.string().required("categoryName is required"),
  lastName: Yup.string().required("Last Name is required"),
  emailId: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  mobileNo: Yup.string().required("Mobile Numer is required"),
  address: Yup.string().required("Address is required"),
  pinCode: Yup.string()
    .min(6, "Password must be at 6 digits")
    .max(6, "Password must be at 6 digits")
    .required("Pin Code is required"),
  companyName: Yup.string().required("Company Name is required"),
});
