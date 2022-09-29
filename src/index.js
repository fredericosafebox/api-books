import express from "express";
import booksRoutes from "./routes/books.routes";
import usersRoutes from "./routes/users.routes";
import loginRoutes from "./routes/login.routes";

const app = new express();
const port = 3000;

app.use(express.json());
app.use("/users", usersRoutes);
app.use("/books", booksRoutes);
app.use("/login", loginRoutes);

app.listen(port, () => console.log(`Servidor iniciado na porta ${port}`));
