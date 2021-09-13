const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    msg: 'Hello from the server',
    app: 'natours',
  });
});

app.post('/', (req, res) => {
  res.send('You can post to this endpoint')
})

const port = 5000;
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
