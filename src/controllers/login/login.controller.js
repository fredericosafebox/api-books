import loginService from "../../services/login.service";

function loginController(request, response) {
  const { email, password } = request.body;
  const res = loginService(email, password);
  if (res) {
    return response.status(200).json(res);
  }
}

export default loginController;
