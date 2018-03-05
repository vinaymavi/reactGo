/**
 * Routes for express app
 */
export default (app) => {
  app.get('/api/', (req, res) => {
    return res.send({ msg: 'Hello World' });
  });
};
