import express from 'express';

const app = express();

app.get("/",async (req,res)=>{
    try {
        res.json({msg : "This is Home page of server"});
    }catch (e){
        console.log(e)
    }
})

app.listen(4000,()=>{
    console.log("Server is working at port 4000");
})