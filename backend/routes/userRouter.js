import express from 'express';
import * as user from '../controller/userController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const userRouter = express.Router();

userRouter
    .post('/users/register', user.createUserController)
    .post('/users/login', user.loginUserController)
    .post('/users/logout', user.logoutUserController)
    .post('/users/me/:id', user.getUserController)

export default userRouter;