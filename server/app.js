import express from 'express';

const app = express();

app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
