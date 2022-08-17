const { createApp } = require('./app');
const { startServer } = require('./server');

(async () => {
  const app = createApp();

  app.get('/', (req, res) => {
    res.send('Hello World!!');
  });

  startServer(app);
})().catch((err) => {
  console.error(err);
});