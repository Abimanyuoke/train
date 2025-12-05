import express from "express";
import { getAllUsers, getUserById, createUser, deleteUser } from "../controllers/userController";
import uploadFile from "../middlewares/kosUpload";

const app = express();
app.use(express.json());

app.get("/", getAllUsers);
app.get("/:id", getUserById);
app.post("/", uploadFile.single("profile_picture"), createUser);
app.delete("/:id", deleteUser);

export default app;