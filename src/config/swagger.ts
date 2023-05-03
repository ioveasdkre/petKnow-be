import { Options } from 'swagger-jsdoc';
import swaggerAutogen from 'swagger-autogen';

const options: Options = {
  info: {
    title: 'My API',
    version: '1.0.0',
    description: 'API documentation',
  },
  host: 'localhost:3000',
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
