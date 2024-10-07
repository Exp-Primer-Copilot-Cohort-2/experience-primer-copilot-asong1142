// Create web server
// Read data from file
// Parse JSON
// Send response back to client
// Listen on port 3000

// Load modules
var http = require('http');
var fs = require('fs');

// Create server
http.createServer(function(req, res) {
  // Read file
  fs.readFile('comments.json', function(err, data) {
    // Check for errors
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('File not found');
      return;
    }

    // Parse JSON
    var comments = JSON.parse(data);

    // Send response
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(comments));
  });
}).listen(3000);

console.log('Server running on port 3000');