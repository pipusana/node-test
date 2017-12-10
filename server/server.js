const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
  });
});

app.get('/users', (req, res) => {
  res.send([{
    name: 'korn',
    age: 23
  }, {
    name: 'jimmie',
    age: 23
  }, {
    name: 'bone',
    age: 22
  }]);
});
// GET /users
// Give users a name prop and age prop

app.listen(3000);
module.exports.app = app;
