import http from 'http';
import { app } from '../index';
import { loadEnv } from '../config/loadEnv';

loadEnv();

const server = http.createServer(app);
const port = process.env.PORT ?? 8000;
server.listen(port, () => console.log(`Server started on port ${port}`));
