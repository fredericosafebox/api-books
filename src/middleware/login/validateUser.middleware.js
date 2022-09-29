import users from "../../database/users";
import * as bcryptjs from "bcryptjs";

function validateUserMiddleware(request, response, next) {
  const { email, password } = request.body;
  const user = users.find((user) => user.email === email);
  if (!user) {
    return response.status(400).json({ message: "Invalid email or password" });
  }
  const checkPassword = bcryptjs.compareSync(password, user.password);
  if (!checkPassword) {
    return response.status(400).json({ message: "Invalid email or password" });
  }
  next();
}

export default validateUserMiddleware;
