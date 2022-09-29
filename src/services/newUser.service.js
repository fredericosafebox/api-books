import { v4 as uuidv4 } from "uuid";
import * as bcryptjs from "bcryptjs";
import users from "../database/users";

async function newUserService(email, password, name) {
  const newUser = {
    uuid: uuidv4(),
    name,
    email,
    password: await bcryptjs.hash(password, 10),
  };
  users.push(newUser);
  return { uuid: newUser.uuid, name, email };
}

export default newUserService;
