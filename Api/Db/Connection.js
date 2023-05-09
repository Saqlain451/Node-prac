import mongoose from "mongoose";

const mongoConnect = async()=>{
    try {
        const connection = await mongoose.connect("mongodb://127.0.0.1:27017/student-api");
        console.log("Connected...");
    } catch (error) {
        console.log(error);
    }
}

mongoConnect()

export default mongoConnect;