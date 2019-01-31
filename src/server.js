'use strict';

const express = require('express');

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

const server = app.listen(3000);
console.log(`Server up and running`);

process.once('SIGINT', function () {
  console.log('Got SIGINT');
  server.close();
});