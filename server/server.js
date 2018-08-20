const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found',
    name: 'Todo App v1.0'
  })
});

app.get('/users', (req, res) => {
  const p1 = {
    name: 'Aisha',
    age: '22'
  };

  const p2 = {
    name: 'Samal',
    age: '24'
  };

  res.send([p1, p2]);
})

app.listen(3000);

module.exports.app = app