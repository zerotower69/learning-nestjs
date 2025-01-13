import { Injectable } from '@nestjs/common';
import { NextServer } from 'next/dist/server/next';
import { Request, Response } from 'express';

@Injectable()
export class NextService {
  private app: NextServer;

  public getApp(): NextServer {
    return this.app;
  }

  public setApp(app: NextServer): void {
    this.app = app;
  }

  public render(
    req: Request,
    res: Response,
    pathname: string,
    query?: any,
  ): Promise<void> {
    return this.app.render(req, res, pathname, query);
  }

  public renderError(
    req: Request,
    res: Response,
    err: Error,
    pathname: string,
    query?: any,
  ): Promise<void> {
    return this.app.renderError(err, req, res, pathname, query);
  }
}
