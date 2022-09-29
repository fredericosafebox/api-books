import users from "../database/users";

function getAllUsersService() {
  const protectedUsers = users.map((user) => {
    const { uuid, email, name } = user;
    return { uuid, email, name };
  });
  return protectedUsers;
}

export default getAllUsersService;
