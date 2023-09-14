const express = require('express');
const app = express();
const port = 3000;

const users = [
    {
        'name': 'Lucas Fernandes',
        'age': 19,
        'height': 1.83
    }
];

app.get('/users', (_, response) => {
    if (users.length === 0) {
        response.send();
        return;
    }

    response.send(users);
});

app.get('/users/:id', (request, response) => {
    const id = request.params.id;

    if (users[id] === undefined) {
        response.send();
        return;
    }

    response.send(users[id]);
});

app.listen(port, () => {
    console.log('Running...');
});
