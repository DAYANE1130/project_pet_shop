const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json'; 
// terá o arquivo de configuração sobre nossas rotas que estão rodando no Express.
const endpointsFiles = ['./routes/petsRoutes'];
// é o nosso caminho para as rotas a serem documentadas.
swaggerAutogen(outputFile, endpointsFiles);