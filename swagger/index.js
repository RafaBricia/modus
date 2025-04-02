const express = require('express');
const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerDocuments = require('./swagger.json');

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocuments));

app.listen(8001, () => {
    console.log(`O Swagger está rodando na porta ${8001}. Acesse http://localhost:${8001}/api/docs`);
});