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

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})