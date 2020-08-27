const fs = require('fs').promises;
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('../client/build'));
const path = './data.json';
app.get('/api/tickets', async (req, res) => {
  const tickets = await fs.readFile(path);
  const ticketsJson = JSON.parse(tickets);
  if (!req.query.searchText) {
    res.send(ticketsJson);
  } else {
    const ticketsArray = ticketsJson.filter((item) => item.title.toLowerCase().includes(req.query.searchText.toLowerCase()));
    res.send(ticketsArray);
  }
});

app.post('/api/tickets/:ticketId/done', async (req, res) => {
  const tickets = await fs.readFile(path);
  let ticketsJson = JSON.parse(tickets);
  try {
    const ticketsArray = ticketsJson.map((item) => {
      if (item.id === req.params.ticketId) {
        item.done = true;
      }
      return item;
    });
    ticketsJson = JSON.stringify(ticketsArray);
    await fs.writeFile(path, ticketsJson);
    res.send({ updated: true });
  } catch (e) { res.send({ updated: false }); }
});

app.post('/api/tickets/:ticketId/undone', async (req, res) => {
  const tickets = await fs.readFile(path);
  let ticketsJson = JSON.parse(tickets);
  try {
    const ticketsArray = ticketsJson.map((item) => {
      if (item.id === req.params.ticketId) {
        item.done = false;
      }
      return item;
    });
    ticketsJson = JSON.stringify(ticketsArray);
    await fs.writeFile(path, ticketsJson);
    res.send({ updated: true });
  } catch (e) { res.send({ updated: true }); }
});
module.exports = app;

