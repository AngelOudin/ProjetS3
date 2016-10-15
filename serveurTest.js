// code trouvé sur https://openclassrooms.com/courses/des-applications-ultra-rapides-avec-node-js/une-premiere-application-avec-node-js
var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);//indique que le code est valide au navigateur
  res.end('test'); // affiche test a l'utilisateur
});
server.listen(8080);// il faut ouvrir http://localhost:8080/ dans le navigateur 