import users from "../database/users";

function updateUserService(uuid, newData) {
  const targetIndex = users.findIndex((user) => user.uuid === uuid);
  users[targetIndex] = { ...users[targetIndex], ...newData };
  return users[targetIndex];
}

export default updateUserService;
