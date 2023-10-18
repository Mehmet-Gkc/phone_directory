import express from 'express';
import * as user from '../controller/userController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { userRegisterValidation, userLoginValidation } from "../validation/userValidation.js"


const userRouter = express.Router();

userRouter
    .post('/users/register', userRegisterValidation, user.createUserController)
    .post('/users/login', userLoginValidation, user.loginUserController)
    .post('/users/logout', user.logoutUserController)
    .post('/users/me/:id', user.getUserController)

export default userRouter;