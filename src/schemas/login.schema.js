import * as yup from "yup";

const loginSchema = yup
  .object({
    email: yup
      .string()
      .email("Invalid email")
      .required("Property -email- is required"),
    password: yup.string().required("Property -password- is required"),
  })
  .required();

export default loginSchema;
