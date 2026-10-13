const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 4000;
const evilHtmlPath = path.join(__dirname, 'evil.html');

const server = http.createServer((req, res) => {
  fs.readFile(evilHtmlPath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end('Error loading evil page');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(content);
  });
});

server.listen(PORT, () => {
  console.log(`😈 Evil attacker server running at http://localhost:${PORT}`);
  console.log(`Simulates cross-origin attacker delivering hidden CSRF payloads.`);
});
