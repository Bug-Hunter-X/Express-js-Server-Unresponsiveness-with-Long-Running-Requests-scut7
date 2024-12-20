const express = require('express');
const app = express();
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  app.get('/', (req, res) => {
    setTimeout(() => {
      res.send('Hello World!');
    }, 5000);
  });
  app.listen(3000, () => {
    console.log(`Worker ${process.pid} started on port 3000`);
  });
}
