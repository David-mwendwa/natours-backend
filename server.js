const app = require('./index')

const port = 5000;
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
