const express = require('express');
const OngController = require('./controllers/ongController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');

const incidentController = require('./controllers/incidentController');

const routes = express.Router();

routes.post('/sessions',sessionController.create);

//rotas que chama a logica dentro do arquivo OngController
routes.get('/ongs',OngController.index);
routes.post('/ongs',OngController.create);

routes.get('/profile',profileController.index);

routes.get('/incidents',incidentController.index);
routes.post('/incidents',incidentController.create);
routes.delete('/incidents/:id',incidentController.delete);




module.exports = routes;  //exportando variavel 
/*
* Métodos HTTP:
*
    * GET: Busca/listar uma informaçõa di back-end 
    * POST: Cria uma informação no back-end
    * PUT: Altera uma informação no back-end
    * DELETE: Deleta uma informação no back-end   
*/

/*
* Tipos de parâmetros: 
    * Query Params: Parâmetros nomeados enviados na rota após "?"(filtros, paginação)
    * Route Params: Parâmetros utilizados para identificar recursos 
    * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos 
recursos = "/exemplo"* 
*/