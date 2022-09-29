import getUserByIdService from "../../services/getUserById.service";

function getUserByIdController(request, response) {
  const { uuid } = request.params;
  const res = getUserByIdService(uuid);
  response.status(200).json(res);
}

export default getUserByIdController;
