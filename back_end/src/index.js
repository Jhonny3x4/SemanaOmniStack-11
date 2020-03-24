const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

const PORT = 3333;

app.use(cors());
app.use(express.json()); //faz com que as rotasa sejam convertida para json 
app.use(routes);

app.listen(PORT,(req, res) => {
      console.log(`\nSevidor rodando em: http://localhost:${PORT}/\n`);
   
});