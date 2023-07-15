import express from 'express';
import dotenv from 'dotenv';
import mongoConnect from "./db/Connect.js";
import mailRouter from "./Routes/mailRoutes.js";

dotenv.config();
const app = express();
const mongoUri = process.env.MONGO_URI;
const port = process.env.PORT;

app.use(express.json());
mongoConnect(mongoUri);
app.use(mailRouter)

app.listen(port, () => {
    console.log("Server is working at port 4000");
})