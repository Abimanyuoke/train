import express from 'express'
import { getAllUsers, getUserById, createUser, deleteUser, authentication, updateUser } from '../controller/userController'
import uploadFile from '../middleware/profileUpload';


const app  = express.Router();
app.use(express.json());

app.get('/', getAllUsers);
app.get('/:id', getUserById);
app.post('/', uploadFile.single('profile_picture'), createUser);
app.put('/:id', uploadFile.single('profile_picture'), updateUser);
app.delete('/:id', deleteUser);

export default app;