const http = require('http');
const fs = require('fs/promises');
const path = require('path');

const PORT = process.env.PORT || 3000;
const baseDir = __dirname;

async function readPage(filePath) {
  return fs.readFile(path.join(baseDir, filePath), 'utf8');
}

function sendText(res, statusCode, content, contentType = 'text/plain; charset=utf-8') {
  res.writeHead(statusCode, { 'Content-Type': contentType });
  res.end(content);
}

const server = http.createServer(async (req, res) => {
  const requestUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = requestUrl.pathname;

  if (pathname === '/favicon.ico') {
    sendText(res, 204, '');
    return;
  }

  if (pathname === '/' || pathname === '/home') {
    try {
      const html = await readPage('views/home.html');
      sendText(res, 200, html, 'text/html; charset=utf-8');
    } catch (error) {
      sendText(res, 500, 'Error loading home page.', 'text/plain; charset=utf-8');
    }
    return;
  }

  if (pathname === '/about') {
    try {
      const html = await readPage('views/about.html');
      sendText(res, 200, html, 'text/html; charset=utf-8');
    } catch (error) {
      sendText(res, 500, 'Error loading about page.', 'text/plain; charset=utf-8');
    }
    return;
  }

  if (pathname === '/contact') {
    try {
      const html = await readPage('views/contact.html');
      sendText(res, 200, html, 'text/html; charset=utf-8');
    } catch (error) {
      sendText(res, 500, 'Error loading contact page.', 'text/plain; charset=utf-8');
    }
    return;
  }

  if (pathname === '/styles.css') {
    try {
      const css = await readPage('public/styles.css');
      sendText(res, 200, css, 'text/css; charset=utf-8');
    } catch (error) {
      sendText(res, 500, 'Error loading stylesheet.', 'text/css; charset=utf-8');
    }
    return;
  }

  try {
    const html = await readPage('views/404.html');
    sendText(res, 404, html, 'text/html; charset=utf-8');
  } catch (error) {
    sendText(res, 404, '<h1>404 - Page Not Found</h1>', 'text/html; charset=utf-8');
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
