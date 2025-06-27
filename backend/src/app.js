const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { add } = require('./calculator');

const app = express();
app.use(cors());
app.use(bodyParser.json());

//API Gateway base path
app.use('/prod', express.Router()
  .post('/api/calculate', (req, res) => {
    try {
      const { input } = req.body;
      const result = add(input);
      res.json({ result });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  })
);

module.exports = app;
