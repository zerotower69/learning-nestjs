import { Request, Response } from 'express';

export interface NextRequestHandler {
  (req: Request, res: Response): Promise<void>;
}
