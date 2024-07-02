const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api/hello', (req, res) => {
  const visitorName = req.query.visitor_name || 'Guest';
  const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const location = 'New York'; // For simplicity, we'll hardcode this
  const temperature = 11; // For simplicity, we'll hardcode this

  res.json({
    client_ip: clientIp,
    location: location,
    greeting: `Hello, ${visitorName}!, the temperature is ${temperature} degrees Celsius in ${location}`
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
