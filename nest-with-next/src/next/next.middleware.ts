import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { NextService } from './next.service';
import { parse } from 'url';

@Injectable()
export class NextMiddleware implements NestMiddleware {
  constructor(private readonly nextService: NextService) {}

  public async use(req: Request, res: Response, next: NextFunction) {
    if (req.url.startsWith('/api/')) {
      return next();
    }
    const app = this.nextService.getApp();
    const parsedUrl = parse(req.url, true);
    return app.getRequestHandler()(req, res, parsedUrl);
  }
}
