import express from 'express';

const app = express();

app.get('/greetings', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});