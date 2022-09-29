import { Router } from "express";

const booksRoutes = new Router();

booksRoutes.get("/", (req, res) => res.json({ message: "Hello books" }));

export default booksRoutes;
