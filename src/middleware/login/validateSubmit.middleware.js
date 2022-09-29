import schema from "../../schemas/login.schema";

async function validateSubmitMiddleware(request, response, next) {
  const loginData = { ...request.body };
  try {
    await schema.validate(loginData);
    next();
  } catch (err) {
    return response.status(400).json({ name: err.name, message: err.message });
  }
}

export default validateSubmitMiddleware;
