import { JWT_SECRET } from "@repo/backend-common/config";
import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

// Extend Express Request type to include userId
declare global {
  namespace Express {
    interface Request {
      userId?: number;
    }
  }
}

interface JWTPayload extends JwtPayload {
  id: number;
}

export const middleware = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const authHeader = req.headers["authorization"];
    
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      res.status(401).json({ message: "No token provided" });
      return;
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      res.status(401).json({ message: "No token provided" });
      return;
    }
    
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      const payload = decoded as unknown as JWTPayload;
      
      if (!payload || typeof payload.id !== 'number') {
        res.status(401).json({ message: "Invalid token" });
        return;
      }

      // Set the userId from the decoded token
      req.userId = payload.id;
      next();
    } catch (error) {
      res.status(401).json({ message: "Invalid or expired token" });
      return;
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};
