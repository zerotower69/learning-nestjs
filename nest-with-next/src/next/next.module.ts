import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { NextService } from './next.service';
import { NextController } from './next.controller';
import next, { NextServer, NextServerOptions } from 'next/dist/server/next';
import { NextMiddleware } from './next.middleware';

@Module({
  controllers: [NextController],
  providers: [NextService],
  exports: [NextService],
})
export class NextModule{
  constructor(private readonly next: NextService) {}

  public async prepare(
    options?: NextServerOptions & {
      turbo?: boolean;
      turbopack?: boolean;
    },
  ) {
    const app = next(
      Object.assign(
        {
          dev: process.env.NODE_ENV !== 'production',
          dir: process.cwd(),
        },
        options || {},
      ),
    ) as NextServer;
    return app.prepare().then(() => {
      this.next.setApp(app);
      console.log('Next.js app prepared');
    });
  }
}
