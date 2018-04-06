const http = require('http');
const app = require('../app');

// const server = http.createServer(function(req, res){
//     res.writeHead(200, {'Content-type': 'text/html'});
//     res.end('GCIT Lms Application - May Node be with you!!!');
// })

const server = http.createServer(app);

server.listen(3000);
console.log('LMS Node running on 3000');