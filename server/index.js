const fs = require('fs').promises;
const express = require('express');
const app = require('./app');

const port = 8080;
app.use(express.json());
app.use(express.static('../client/build'));

app.get('/api/v1/records', async (req, res) => {
  const data = await fs.readFile(path);
  const data1 = JSON.parse(data);
  res.send(data1);
});

app.post('/api/v1/record', async (req, res) => {
  try {
    const data = await fs.readFile(path);
    let data1 = JSON.parse(data);
    data1.push(req.body);
    data1 = JSON.stringify(data1);
    await fs.writeFile(path, data1);
    res.send('done');
  } catch (e) { console.log(e); }
});
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
