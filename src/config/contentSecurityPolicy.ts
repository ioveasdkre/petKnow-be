import { Express } from 'express';
import helmet from 'helmet';
import cors from 'cors';

function setSecurityHeaders(app: Express) {
  app.use(helmet());

  app.use(cors());
}

export { setSecurityHeaders };
