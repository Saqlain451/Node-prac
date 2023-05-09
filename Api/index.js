import express from "express";
import mongoConnect from "./Db/Connection.js";
import { router } from "./Router/Routers.js";
const app = express();
app.use(express.json());
app.use(router);

app.listen(4000, () => {
  console.log("server is ready");
});
