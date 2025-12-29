import { Request, Response } from "express";
import { apiConfig } from "../config.js";

export function handlerMetrics(req: Request, res: Response) {
    res.send(`Hits: ${apiConfig.fileserverHits}`);
}