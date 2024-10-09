import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { getRegisteredTags } from './swaggerTags';
import * as swaggerProducts from './routeSwagger';

import { DEPLOY_SERVER_URL } from './envs';

console.log(DEPLOY_SERVER_URL)

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Local Seller API',
      version: '1.0.0',
      description: 'API documentation V1.0.0',
    },
    servers: [
      {
        // url: 'http://localhost:<port>/', //local url
        url: DEPLOY_SERVER_URL, //deployed url
        description: 'Main Server',
      },
    ],
    tags: getRegisteredTags(),
  },
  apis: [],
};

const swaggerSpec = swaggerJSDoc(options);

const addSwaggerPaths = (spec: any, ...definitions: any) => {
  definitions.forEach((definition: any) => {
    Object.keys(definition).forEach((key) => {
      const pathDefinitions = definition[key];
      Object.keys(pathDefinitions).forEach((path) => {
        const methods = pathDefinitions[path];
        if (!spec.paths[path]) {
          spec.paths[path] = {};
        }
        Object.keys(methods).forEach((method) => {
          spec.paths[path][method] = methods[method];
        });
      });
    });
  });
};

addSwaggerPaths(swaggerSpec, swaggerProducts);



export const swaggerDocs = (app: any) => {
  app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};