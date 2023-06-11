import { Options } from 'swagger-jsdoc';
import swaggerAutogen from 'swagger-autogen';
import { port, env } from '../config/env';
import path from 'path';

const host = env === 'prod' ? 'petknow-be.onrender.com' : `localhost:${port}`;
const schemes = env === 'prod' ? 'https' : 'http';

const options: Options = {
  info: {
    title: '寵知 API',
    version: '1.0.0',
    description: 'API 文件',
  },
  host: host,
  schemes: [schemes],
  securityDefinitions: {
    apiKeyAuth: {
      type: 'apiKey',
      in: 'headers',
      name: 'authorization',
      description: '請加上 API Token',
    },
  },
};

const rootDir = path.resolve(process.cwd());
const outputFile = path.join(rootDir, 'swagger_output.json');
const endpointsFiles = [path.join(rootDir, 'src/router/*.router.ts')];

swaggerAutogen(outputFile, endpointsFiles, options);
