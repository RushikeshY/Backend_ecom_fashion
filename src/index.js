import express from "express";
import cors from "cors";
import cookieParser  from "cookie-parser";
import path from "path"
import {connectDB} from "./config/database";
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello word");
});

const startServer = () => {
  app.listen(5000, async () => {
    console.log("server has started at port 5000");
  });
};

startServer();
