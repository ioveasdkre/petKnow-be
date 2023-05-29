import { Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import cors from 'cors';

function setSecurityHeaders(_req: Request, _res: Response, next: NextFunction) {
  helmet({
    xFrameOptions: { action: 'deny' },
    contentSecurityPolicy: {
      directives: {
        'base-uri': 'none',
        'child-src': 'none',
        'connect-src': 'self',
        'default-src': 'none',
        'font-src': 'none',
        'form-action': 'none',
        'frame-ancestors': 'none',
        'frame-src': 'none',
        'img-src': ['none', 'data:'],
        'manifest-src': 'none',
        'media-src': 'none',
        'object-src': 'none',
        'script-src': 'none',
        'script-src-attr': 'none',
        'script-src-elem': 'none',
        'style-src': 'none',
        'style-src-attr': 'none',
        'style-src-elem': 'none',
        upgradeInsecureRequests: [],
        'worker-src': 'none',
      },
    },
  });

  cors();

  next();
}

export { setSecurityHeaders };
