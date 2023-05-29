
import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {
        type : String,
        require : true,
        minlength : 5,
    },
    stu_id : {
        type : Number,
        require : true,
        unique : true,
    },
    phone : {
        type : Number,
        require : true,
        unique : true,
    },
    address : {
        type : String,
        require : true,
    }
})

const Student = new mongoose.model("Student",studentSchema)
//  exporting

export {Student} 