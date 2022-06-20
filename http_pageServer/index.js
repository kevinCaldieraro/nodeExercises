const http = require('http');
const url = require('url');
const fs = require('fs');

function handleFile(req, res) {
  let path = url.parse(req.url).pathname;

  if (path == '' || path == '/') {
    path = '/index.html';
  }

  let fileName = '.' + path;

  fs.readFile(fileName, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html;charset=utf-8' });
      res.end('<h1>Page not found</h1>');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    }
  });
}

http
  .createServer((request, response) => {
    handleFile(request, response);
  })
  .listen(3000, error => {
    if (error) {
      console.log(error);
    } else {
      console.log('O servidor rodando na porta 3000');
    }
  });
