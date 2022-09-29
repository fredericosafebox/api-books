import jwt from "jsonwebtoken";

function verifyTokenMiddleware(request, response, next) {
  const token = request.headers.authorization;
  try {
    jwt.verify(token, "SECRET_KEY", (error, decoded) => {
      if (error) {
        return response.status(401).json({ message: "Invalid token" });
      }
      next();
    });
  } catch {
    return response.status(500).json({ message: "Unknown error" });
  }
}

export default verifyTokenMiddleware;
