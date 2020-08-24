const fs = require('fs').promises;
const express = require('express');

const app = express();
const port = 8080;
app.use(express.json());
app.use(express.static('../client/build'));
const path = './data.json';
app.get('/api/tickets', async (req, res) => {
  const data = await fs.readFile(path);
  const data1 = JSON.parse(data);
  if (!req.query.searchText) {
    res.send(data1);
  } else {
    const data2 = data1.filter((item) => item.title.toLowerCase().includes(req.query.searchText.toLowerCase()));
    res.send(data2);
  }
});

app.post('/api/tickets/:ticketId/done', async (req, res) => {
  const data = await fs.readFile(path);
  let data1 = JSON.parse(data);
  try {
    const data2 = data1.map((item) => {
      if (item.id === req.params.ticketId) {
        item.done = true;
      }
      return item;
    });
    data1 = JSON.stringify(data2);
    await fs.writeFile(path, data1);
    res.send({ updated: true });
  } catch (e) { res.send({ updated: false }); }
});

app.post('/api/tickets/:ticketId/undone', async (req, res) => {
  const data = await fs.readFile(path);
  let data1 = JSON.parse(data);
  try {
    const data2 = data1.map((item) => {
      if (item.id === req.params.ticketId) {
        item.done = false;
      }
      return item;
    });
    data1 = JSON.stringify(data2);
    await fs.writeFile(path, data1);
    res.send({ updated: true });
  } catch (e) { res.send({ updated: true }); }
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
module.exports = app;
