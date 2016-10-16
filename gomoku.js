var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(9001, '64.137.255.190');



var http = require('http');
var exec = require('child_process').exec;
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  exec('sudo bash hook.sh');
  console.log('git repo synced...');
  res.end(''git repo synced...'');
}).listen(9001, '64.137.255.190');