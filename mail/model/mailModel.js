import {model, Schema} from "mongoose";

const mailSchema = Schema({
    email : {
        type : String,
    },
    subject : {
        type: String,
    },
    msg : {
        type:String,
    },
    name : {
        type:String,
    }
})

const mail = model("mails",mailSchema);
export default mail;