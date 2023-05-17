import http from 'http';
import { localEnv } from '@src/config/env';
localEnv();
import { app } from '@src/index';

const server = http.createServer(app);
const port = process.env.PORT ?? 8000;
server.listen(port, () => console.log(`Server started on port ${port}`));
