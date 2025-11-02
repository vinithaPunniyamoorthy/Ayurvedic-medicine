const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/herbs', (req, res) => {
  res.sendFile(path.join(__dirname, 'herbs.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact.html'));
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact Form Submission:', { name, email, message });
  res.json({ success: true, message: 'Thank you for contacting us!' });
});

app.post('/remedy', (req, res) => {
  const { ailment, details } = req.body;
  console.log('Remedy Query:', { ailment, details });
  // Simple response based on ailment
  let response = 'Please consult a qualified Ayurvedic practitioner for personalized advice.';
  if (ailment.toLowerCase().includes('headache')) {
    response = 'For headaches, try applying a paste of sandalwood or peppermint oil.';
  } else if (ailment.toLowerCase().includes('digest')) {
    response = 'For digestion issues, consume ginger tea or fennel seeds.';
  }
  res.json({ success: true, advice: response });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
