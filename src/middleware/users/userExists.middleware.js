import users from "../../database/users";

function userExistsMiddleware(request, response, next) {
  const { uuid } = request.params;
  const user = users.find((user) => user.uuid === uuid);
  if (user) {
    next();
  }
  return response.status(404).json({ message: "User not found" });
}

export default userExistsMiddleware;
