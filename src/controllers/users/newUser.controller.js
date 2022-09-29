import newUserService from "../../services/newUser.service";

async function newUserController(request, response) {
  const { email, password, name } = request.body;
  try {
    const res = await newUserService(email, password, name);
    return response.status(201).json(res);
  } catch {
    return response.status(400).json({ message: "Something went wrong" });
  }
}

export default newUserController;
