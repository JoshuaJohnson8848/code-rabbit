const express = require('express');
const app = express();
const port = 3000;
const itemRoutes = require('./routes/itemRoutes');

app.use(express.json());

app.use('/items', itemRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});