const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
require('dotenv').config();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.use('/api', require('./routes/api'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
