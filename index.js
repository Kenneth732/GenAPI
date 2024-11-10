const express = require('express');
const fs = require('fs');
const app = express();

// Assuming data is a parsed db.json
let data = require('./db.json');

// Dynamically create routes based on db.json keys
Object.keys(data).forEach((resource) => {
  const schema = data[resource];

  // GET /resource
  app.get(`/api/${resource}`, (req, res) => {
    res.json(schema);
  });

  // POST /resource
  app.post(`/api/${resource}`, express.json(), (req, res) => {
    const newItem = req.body;
    schema.push(newItem);
    fs.writeFileSync('./db.json', JSON.stringify(data, null, 2));
    res.status(201).json(newItem);
  });

  // PUT /resource/:id
  app.put(`/api/${resource}/:id`, express.json(), (req, res) => {
    const { id } = req.params;
    const updatedItem = req.body;
    const index = schema.findIndex((item) => item.id === id);
    if (index !== -1) {
      schema[index] = updatedItem;
      fs.writeFileSync('./db.json', JSON.stringify(data, null, 2));
      res.json(updatedItem);
    } else {
      res.status(404).send('Item not found');
    }
  });

  // DELETE /resource/:id
  app.delete(`/api/${resource}/:id`, (req, res) => {
    const { id } = req.params;
    const index = schema.findIndex((item) => item.id === id);
    if (index !== -1) {
      schema.splice(index, 1);
      fs.writeFileSync('./db.json', JSON.stringify(data, null, 2));
      res.status(204).send();
    } else {
      res.status(404).send('Item not found');
    }
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
