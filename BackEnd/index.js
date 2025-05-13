import express from 'express';
import axios from 'axios';

const app = express();

app.get('/message', async (req, res) => {
  // esempio: prendi un messaggio da un'API esterna
  const response = await axios.get('https://api.chucknorris.io/jokes/random');
  res.json({ message: response.data.value });
});

app.listen(3001, () => console.log('Backend running on port 3001'));
