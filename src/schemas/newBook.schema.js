import * as yup from "yup";
const today = new Date();
const year = today.getFullYear();

const newBookSchema = yup
  .object({
    title: yup.string().required("Property -title- is required"),
    author: yup.string().required("Property -author- is required"),
    year: yup
      .number()
      .max(year, `Only titles released until ${year} are allowed`)
      .required("Property -year- is required"),
    owner_id: yup.string().required("Property -author- is required"),
  })
  .required();

export default newBookSchema;
