const express = require('express');

app.get('/', (req, res) => {
  res.send('Home page')
})

app.listen(5000, () => {
  console.log('App listening on port 5000')
})