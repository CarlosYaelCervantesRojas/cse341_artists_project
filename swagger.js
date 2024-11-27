const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Artists API',
    description: 'Artists API project CSE 341'
  },
  host: 'cse341-artists.onrender.com',
  schemes: ['https']
};

const outputFile = './swagger.json';
const routes = ['./routes/index.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);