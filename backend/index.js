const express = require('express');
const app = express();

app.get('/api/ecodrone', (req, res) => {
  const ecodrone = [
    { id: 1, content: 'Humidity', value: 90 },
    { id: 2, content: 'Temperature', value: 97.5 },
    { id: 3, content: 'Wind Speed', value: 60 },
    { id: 4, content: 'Nitrogen', value: 150 },
    { id: 5, content: 'Phosphorus', value: 100 },
    { id: 6, content: 'Potassium', value: 120 }
  ];
  res.send(ecodrone);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
