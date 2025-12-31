import express from "express";
import { handlerReadiness } from "./api/readiness.js";
import { middlewareLogResponse } from "./api/logresponse.js";
import { middlewareMetricsInc } from "./api/metrics.js";
import { handlerMetrics } from "./api/metricshandler.js";
import { handlerReset } from "./api/reset.js";

const app = express();
const PORT = 8080;

app.use(middlewareLogResponse);

app.use('/app', middlewareMetricsInc);

app.use('/app', express.static('./src/app'));
app.use(express.static("/app"));
app.use(express.static("/assets/logo.png"));

app.get("/api/healthz", handlerReadiness);
app.get("/admin/metrics", handlerMetrics);
app.get("/admin/reset", handlerReset);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});