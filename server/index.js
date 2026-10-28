const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.get('/health', (req, res) => {
  res.json({ status: 'ok'});
});

//start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});