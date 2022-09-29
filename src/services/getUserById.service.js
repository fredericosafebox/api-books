import users from "../database/users";

function getUserByIdService(uuid) {
  const user = users.find((user) => user.uuid === uuid);
  if (user) {
    const { uuid, email, name } = user;
    return { uuid, email, name };
  }
}

export default getUserByIdService;
