const express = require('express');
const cors = require('cors');

const { ServerError } = require('../config/serverConfig');
const { requestLogger } = require('../App/middelwares/requestLogger');

const { messageRouter } = require('./router/messageRouter');

const db = require('../models');

const app = express();

app.use(cors());
app.use(express.json());

app.use(requestLogger);
app.get('/', (req, res, next) => {
  res.json({ message: 'server is Up and Running!' });
});

app.use('/message', messageRouter);

// 404 handler
app.use('*', (req, res, next) => {
  next(new ServerError('NOT_FOUND', 404));
});

// error handler
app.use((err, req, res, next) => {
  if (!err.status) {
    console.error(err);
    process.exit(0);
  }
  console.log('Custom Server Error>', err.message);
  res.status(err.status).json({ message: err.message, status: err.status });
});

module.exports = {
  app
}
