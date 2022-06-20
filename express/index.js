const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use('/myBlog', express.static(path.join(__dirname, 'client')));

app.get('/', (req, res) => {
  res.send('<h1>Message from GET</h1>');
});

app.listen(PORT, () => {
  console.log(`Sever running on port ${PORT}`);
});
