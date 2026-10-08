# Node.js Web Server Project

This project is a simple web server built with Node.js using the built-in `http` module.

## Features
- Serves HTML pages for `/`, `/home`, `/about`, and `/contact`
- Returns a custom 404 page for unknown routes
- Includes CSS styling for a clean web-page layout
- Uses asynchronous file reading with `fs/promises`

## Run the server
```bash
npm start
```

Then open the following routes in your browser:
- http://localhost:3000/
- http://localhost:3000/home
- http://localhost:3000/about
- http://localhost:3000/contact

## Notes
- The server listens on port `3000` by default.
- You can override it with `PORT=4000 npm start`.
- Invalid routes return a friendly 404 page.

## GitHub Pages

GitHub Pages hosts the project's HTML and CSS as a static site; it does not run the Node.js server.
The Pages workflow publishes the home page at `/` and `/home/`, with the About and Contact pages at
`/about/` and `/contact/`. It runs automatically when changes are pushed to `main`.
