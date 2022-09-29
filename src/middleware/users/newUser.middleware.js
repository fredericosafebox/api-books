import schema from "../../schemas/newUser.schema";
import users from "../../database/users";

async function newUserValidationMiddleware(request, response, next) {
  const newUserData = { ...request.body };
  try {
    await schema.validate(newUserData);
  } catch (err) {
    return response.status(400).json({ name: err.name, message: err.message });
  }
  const emailAlreadyInUse = users.find(
    (user) => user.email === newUserData.email
  );
  if (emailAlreadyInUse) {
    return response.status(400).json({ message: "email already in use" });
  }
  next();
}

export default newUserValidationMiddleware;
