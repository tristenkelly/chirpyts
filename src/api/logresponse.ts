import { Request, Response } from "express";

export function middlewareLogResponse(req: Request, res: Response, next: () => void) {
    res.on("finish", () => {
        console.log(`[NON-OK] ${req.method} ${req.originalUrl} - Status: ${res.statusCode}`);
    })
    next();
}