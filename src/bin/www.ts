import http from 'http';
import { localEnv } from '../config/env';
localEnv();
import { app } from '../index';

const server = http.createServer(app);
const port = process.env.PORT ?? 8000;
server.listen(port, () => console.log(`Server started on port ${port}`));
