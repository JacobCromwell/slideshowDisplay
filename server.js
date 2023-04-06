const express = require('express');
const path = require('path');
const mime = require('mime');

const server = express();

server.use(express.static(path.join(__dirname, 'public')));

server.get('/src/*.js', (req, res) => {
  const filePath = path.join(__dirname, req.url);
  const mimeType = mime.getType(filePath);
  res.setHeader('Content-Type', mimeType);
  if (mimeType === 'video/mp2t') {
    res.setHeader('Content-Type', 'application/typescript');
  }
  res.sendFile(filePath);
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
