import { Request, Response } from "express";
import { apiConfig } from "../config.js";

export function middlewareMetricsInc(req: Request, res: Response, next: () => void) {
    res.on("finish", () => {       
        apiConfig.fileserverHits += 1; 
    })
    next();
}