import {Resend} from "resend";
import mail from "../model/mailModel.js";
import dotenv from "dotenv";

dotenv.config();
const resend = new Resend(process.env.API_KEY);
const sendMail = async (req, res) => {
    const {email, subject, msg, name} = req.body

    try {

        const mailOption = {
            from: 'onboarding@resend.dev',
            to: "saqlainmustaq783@gmail.com",
            subject: subject,
            html: `<Strong> Name : </Strong> ${name} <p></p> <Strong> Mail Id : </Strong> ${email} <br/> <Strong> Msg : </Strong> ${msg}`
        }

        await resend.emails.send(mailOption);

        res.status(201).json({msg: "Your massage has been sent"});
        const newData = new mail({...req.body});
        await newData.save();

    } catch (err) {
        res.status(401).json({err: "Have an error! We cant send the data"});
    }
}

export {sendMail}