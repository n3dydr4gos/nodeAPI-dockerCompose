import express from 'express';
import axios from 'axios';

const app = express();

app.get('/', async (req, res) => {
  const response = await axios.get('http://backend:3001/message');
  res.send(`<h1>Messaggio: ${response.data.message}</h1>`);
});

app.listen(3000, () => console.log('Frontend running on port 3000'));
