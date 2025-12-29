import express from "express";
import { handlerReadiness } from "./api/readiness.js";
import { middlewareLogResponse } from "./api/logresponse.js";

const app = express();
const PORT = 8080;

app.use(middlewareLogResponse);
app.use("/app", express.static("./src/app"));
app.use(express.static("/app"));
app.use(express.static("/assets/logo.png"));


app.get("/healthz", handlerReadiness);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});