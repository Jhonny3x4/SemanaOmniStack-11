const express = require('express');

const app = express();

app.get('/',(request, response) => {
    return response.json({
        evento: 'Semana OmniStrack 11.0',
        aluno: 'Antonio Filho'
    });
});

app.listen(3333);