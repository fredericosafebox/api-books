import * as yup from "yup";

const newUserSchema = yup
  .object({
    name: yup.string().required("Property -name- is required"),
    email: yup
      .string()
      .email("Invalid email")
      .required("Property -email- is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters long")
      .max(20, "Password must not exceed 20 characters length")
      .required("Property -password- is required"),
  })
  .required();

export default newUserSchema;
