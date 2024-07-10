const server = http.createServer(app);
initializeSocket(server);


module.exports = socket;