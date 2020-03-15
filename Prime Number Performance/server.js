// Express
const express = require('express')
const app = express()
const PORT = 2222

// Serve static files from /public
app.use(express.static('./public', {
  setHeaders: (res, path, stat) => {
    // Serve, wasm files with correct mime type
    if (path.endsWith('.wasm')) {
      res.set('Content-type', 'application/wasm')
    }
  }
}) )

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))