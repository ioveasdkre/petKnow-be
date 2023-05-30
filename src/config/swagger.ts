import { Options } from 'swagger-jsdoc';
import swaggerAutogen from 'swagger-autogen';
import { port, env } from '../config/env';

const host = env === 'prod' ? 'petknow-be.onrender.com' : `localhost:${port}`;

const options: Options = {
  info: {
    title: '寵知 API',
    version: '1.0.0',
    description: 'API 文件',
  },
  host: host,
  schemes: ['http', 'https'],
  securityDefinitions: {
    apiKeyAuth: {
      type: 'apiKey',
      in: 'headers',
      name: 'authorization',
      description: '請加上 API Token',
    },
  }, // 對應 PostController.deletePost
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['./src/router/*.router.ts'];

swaggerAutogen(outputFile, endpointsFiles, options);
