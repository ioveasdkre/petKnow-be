import { Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import cors from 'cors';

function setSecurityHeaders(_req: Request, _res: Response, next: NextFunction) {
  const allowedOrigins = ['petknow.netlify.app','localhost:3000', 'localhost:5173', 'localhost:8000', 'localhost:8080'];

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

  cors({
    credentials: true,
    origin: allowedOrigins,
  });

  next();
}

export { setSecurityHeaders };
