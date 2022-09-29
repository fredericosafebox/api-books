import updateUserService from "../../services/updateUser.service";

function updateUserController(request, response) {
  const { uuid } = request.params;
  const newData = { ...request.body };
  const res = updateUserService(uuid, newData);
  return response.status(201).json(res);
}

export default updateUserController;
