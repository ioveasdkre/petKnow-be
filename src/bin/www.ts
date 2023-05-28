import http from 'http';
import { port } from '../config/env';
import { app } from '../index';

const server = http.createServer(app);
server.listen(port, () => console.log(`Server started on port ${port}`));
