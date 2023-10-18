import { Router } from 'express';
import {getPhoneBooks, getPhoneBook, postPhoneBook, updateBook, deletePhoneBook} from "../controller/phoneController.js";
import { authMiddleware } from '../middleware/authMiddleware.js'

const phoneBookRouter = Router();

phoneBookRouter
    .get("/phones", authMiddleware, getPhoneBooks)
    .get("/phones/:id", authMiddleware, getPhoneBook)
    .post("/phones", authMiddleware, postPhoneBook)
    .patch("/phones/:id",authMiddleware, updateBook)
    .delete("/phones/:id",authMiddleware, deletePhoneBook)

export default phoneBookRouter;


