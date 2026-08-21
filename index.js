const http = require("node:http");

const port = process.env.PORT || 3000;

const server = http.createServer((_request, response) => {
  response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  response.end(`<!doctype html>
<html lang="es">
  <head><meta charset="utf-8"><title>Hello World</title></head>
  <body><h1>Hello, world!</h1><p>Servidor Node.js funcionando.</p></body>
</html>`);
});

server.listen(port, () => {
  console.log(`Hello World disponible en http://localhost:${port}`);
});
