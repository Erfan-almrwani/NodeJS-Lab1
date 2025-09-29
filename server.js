 feature/advanced-routing
const http = require('http')
const fs = require('fs')
const path = require('path')

const PORT = 3000

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // Display index.html file
        const filePath = path.join(__dirname, 'index.html')
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' })
                res.end('Internal Server Error')
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.end(data)
            }
        })
    } else if (req.url === '/api/ping') {
        // Simple API that returns JSON
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'pong' }))
    } else {
        // Handle any unknown routes (404)
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        res.end('404 Not Found')
    }
})


// Import core Node.js modules
const http = require('http')   // To create the server
const fs = require('fs')       // To read files
const path = require('path')   // To handle file paths

// Define port number
const PORT = 3000

// Create the server
const server = http.createServer((req, res) => {
    // Define the path to index.html file
    const filePath = path.join(__dirname, 'index.html')

    // Read HTML file asynchronously
    fs.readFile(filePath, (err, data) => {
        if (err) {
            // Handle error if file doesn't exist
            res.writeHead(500, { 'Content-Type': 'text/plain' })
            res.end('Internal Server Error')
        } else {
            // Send file content as HTML page
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(data)
        }
    })
})

// Start the server
 main
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})