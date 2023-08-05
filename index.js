const express = require('express');
const cors = require('cors');
const fs = require('fs');
const upload = require(multer);
require('dotenv').config();


const app = express();

app.use(cors());
app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', (req, res) => {
  res.sendFile(`${process.cwd()}/views/index.html`);
});

app.post('/api/fileanalyse', (req, res) => {
  const file = req.body.upfile;
  // const size = fs.Stats.size(file);
  res.send(file);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
