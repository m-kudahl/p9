import express from 'express'; //express is a web framework for Node. We will use it to handle requests such as GET POST AND PUT
import fetch from 'node-fetch'; // We need to import fetch from Node as this is a server and React is meant for clients
import cors from 'cors'; //CORS is used to allow different websites to share and use resources. It is like crossplay on xbox and playstation :) 

const app = express(); // Initialize an instance of express app. 
const PORT = 8080; //It is convention to use port 8080 for web servers

app.use(express.json());
app.use(cors({  //  Here we setup the credentials for CORS. Without this, the alertbox running on port 3000 would not be able to access the json from this server running on port 8080
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

let alertData = []; //  Array to store alerts

// This is an endpoint. We use this one to get alerts from Github. Endpoints allow us to give a response (res) to a request (req). We are making an asynchronous (async) function, which allows us to use the await keyword. 
// This basically lets the function pause while waiting for a fetch, as well as letting the program as a whole continue working while fetching instead of freezing
app.get('/api/alerts', async (req, res) => {    
  try {
    const response = await fetch('https://raw.githubusercontent.com/m-kudahl/p9/mathias2/p9-app/public/alerts.json');
    const data = await response.json();
    alertData = data; // import data from github into alertData array
    res.json(data);
    //res.status(200).json({ message: 'Alerts fetched from Github'}) // Tags response with a HTTP status code. 2xx = good 4xx = bad request 5xx = internal server error
  } catch (error) {
    console.error('Error fetching alerts from GitHub:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint to update alerts
app.put('/api/alerts', async (req, res) => {
  const updatedData = req.body; // Get data from the request and put it in variable updatedData

  try {

    alertData = updatedData; // Update the in-memory data
    res.json(updatedData); // Respond with the updated data
    //res.status(201).json({ message: 'Updated alerts sent'})

  } catch (error) {
    console.error('Error updating alerts on the server:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint to add alerts
app.post('/api/alerts', (req, res) => {
  const newAlert = req.body; // Create new alert using input from the request

  try {

    // Add the new alert to the in-memory data (updates active alert data with new alert)
    alertData.push(newAlert);

    // Respond with the updated data
    res.json(alertData);
    //res.status(202).json({ message: 'New alert added'})
  } catch (error) {
    console.error('Error adding alert on the server:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
