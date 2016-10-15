var http = r quire('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(8080, '64.137.255.190');
console.log('Server running at http://64.137.255.190:8080/');