// backend/src/app.js
const express = require('express');
const { add } = require('./calculator');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post('/api/calculate', (req, res) => {
  const { input } = req.body;

  try {
    const result = add(input);
    res.json({ result });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`🧮 String Calculator API running at http://localhost:${port}`);
});
