import {Router} from "express";
import {sendMail} from "../controller/mailController.js";

const mailRouter = Router();

mailRouter.post("/sendmail", sendMail);
export default mailRouter;