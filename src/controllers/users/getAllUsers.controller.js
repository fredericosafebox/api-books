import getAllUsersService from "../../services/getAllUsers.service";

function getAllUsersController(request, response) {
  const res = getAllUsersService();
  return response.status(200).json(res);
}

export default getAllUsersController;
