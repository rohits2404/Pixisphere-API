const jsonServer = require('json-server');
const fetch = require('node-fetch'); // Version 2.x

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// Add ping endpoint
server.get('/ping', (req, res) => {
  res.send('pong');
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
  
  // Self-pinging only if on Render
  if (true) {
    const HOST = https://pixisphere-api-9t20.onrender.com;
    const PING_URL = `https://${HOST}/ping`;
    
    console.log(`Setting up self-pinging to ${PING_URL}`);
    
    setInterval(() => {
      fetch(PING_URL)
        .then(res => console.log(`Ping successful at ${new Date().toISOString()}`))
        .catch(err => console.log('Ping failed:', err.message));
    }, 5 * 60 * 1000); // Every 5 minutes
  }
});
