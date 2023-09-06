import { Router } from 'express';
import {getPhoneBooks, getPhoneBook, postPhoneBook, updateBook, deletePhoneBook} from '../controller/generalController.js'

const phoneBookRouter = Router();

phoneBookRouter
    .get("/phones", getPhoneBooks)
    .get("/phones/:id", getPhoneBook)
    .post("/phones",  postPhoneBook)
    .patch("/phones/:id", updateBook)
    .delete("/phones/:id", deletePhoneBook)

export default phoneBookRouter;


