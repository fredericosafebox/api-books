import jwt from "jsonwebtoken";
import users from "../database/users";

function loginService(email, password) {
  const user = users.find((user) => user.email === email);
  if (user) {
    const token = jwt.sign(
      { uuid: user.uuid, email: user.email },
      "SECRET_KEY",
      {
        expiresIn: "24h",
      }
    );
    return { uuid: user.uuid, token };
  }
}

export default loginService;
