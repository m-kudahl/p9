import express from 'express';
import cors from 'cors';
import path from 'path'; // Import the path module to work with file paths
import fs from 'fs/promises'; 

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

let alertData = [];
let doorStatus = ' ';

// Use the path module to create the absolute paths to your local JSON files
const alertsFilePath = path.join('C:', 'Users', 'Mathi', 'Documents', 'p9', 'p9', 'p9-app', 'public', 'alerts.json');
const doorStatusFilePath = path.join('C:', 'Users', 'Mathi', 'Documents', 'p9', 'p9', 'p9-app', 'public', 'door.json');

app.get('/api/alerts', async (req, res) => {
  try {
    const data = await fs.readFile(alertsFilePath, 'utf-8');
    const dataArray = JSON.parse(data);

    alertData = dataArray;
    res.json(dataArray);
  } catch (error) {
    console.error('Error fetching alerts locally:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.put('/api/alerts', async (req, res) => {
  const updatedData = req.body;

  try {
    // Read the existing alerts data from the file
    const currentData = await fs.readFile(alertsFilePath, 'utf-8');
    const currentAlerts = JSON.parse(currentData);

    // Append the new data to the existing data
    const newData = [...currentAlerts, ...updatedData];

    // Update the alerts.json file with the new data
    await fs.writeFile(alertsFilePath, JSON.stringify(newData, null, 2), 'utf-8');

    // Do not update alertData here
    // alertData = newData;

    res.json(newData);
    console.log('Server updated alerts and sent response');
  } catch (error) {
    console.error('Error updating alerts on the server:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




// Endpoint to update door status
app.put('/api/doorstatus', async (req, res) => {
  const updatedData = req.body;
  console.log('Received data:', updatedData);

  try {
    let newStatus;

    if (updatedData.doorStatus === 'LOCKED') {
      newStatus = 'UNLOCKED';
      console.log('Server set data to unlocked');
    } else if (updatedData.doorStatus === 'UNLOCKED') {
      newStatus = 'LOCKED';
      console.log('Server set data to locked');
    } else {
      return res.status(400).json({ error: 'Invalid door status' });
    }

    // Update the door.json file with the new status
    const updatedStatus = { door: { status: newStatus } };
    await fs.writeFile(doorStatusFilePath, JSON.stringify(updatedStatus, null, 2), 'utf-8');

    res.json({ doorStatus: newStatus });
    console.log('Server updated door status and sent response');
  } catch (error) {
    console.error('Error updating door status on the server:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.post('/api/alerts', async (req, res) => {
  const newAlert = req.body;

  try {
    alertData.push(newAlert);

    // Update the alerts.json file with the new data
    await fs.writeFile(alertsFilePath, JSON.stringify(alertData, null, 2), 'utf-8');

    res.json(alertData);
    console.log('Server updated alerts and sent response');
  } catch (error) {
    console.error('Error adding alert on the server:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/api/doorstatus', async (req, res) => {
  try {
    const data = await fs.readFile(doorStatusFilePath, 'utf-8');
    const doorStatusData = JSON.parse(data);

    doorStatus = doorStatusData.door.status;
    res.json(doorStatus);
  } catch (error) {
    console.error('Error fetching door status locally:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
