import express from "express";
import cors from "cors";
import path from "path";
import fs from "fs/promises";

// Create the express application and a variable to store the port. 8080 is convention for web servers
const app = express();
const PORT = 8080;

//We need to use CORS to allow requests from other origins (in this case from the react client running on port 3000)
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

// Declare variables
let alertData = [];
let doorStatus = " ";

// Here we load the json files, by going up from the current working directory and going to the public folder.
const alertsFilePath = path.resolve(
  process.cwd(),
  "public",
  "alerts.json"
);
const doorStatusFilePath = path.resolve(
  process.cwd(),
  "public",
  "door.json"
);

// GET Endpoint for alerts
app.get("/api/alerts", async (req, res) => {
  // We are making an asynchronous function, which means the application will still be responsive while performing tasks
  try {
    const data = await fs.readFile(alertsFilePath); // Await makes the function wait for a response before moving on (as this is an async function)
    const dataArray = JSON.parse(data);

    alertData = dataArray;
    res.json(dataArray);
  } catch (error) {
    console.error("Error fetching alerts locally:", error);
    res.status(500).json({ error: "Internal Server Error" }); //responds with errorcode 500 in case of error.
  }
});
app.put("/api/alerts", async (req, res) => {
  const updatedData = req.body;

  try {
    const currentData = await fs.readFile(alertsFilePath); // Read the existing alerts data from the file
    const currentAlerts = JSON.parse(currentData);
    const newData = [...currentAlerts, ...updatedData]; // Append the new data to the existing data
    await fs.writeFile(alertsFilePath, JSON.stringify(newData, null, 2)); // Update the alerts.json file with the new data. the parameter 2 means that 2 lines of indentation will be made in the json file. This is for human readability.
    res.json(newData); // Send response
    console.log("Server updated alerts and sent response");
  } catch (error) {
    console.error("Error updating alerts on the server:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint to update door status
app.put("/api/doorstatus", async (req, res) => {
  const updatedData = req.body;
  console.log("Received data:", updatedData);

  try {
    let newStatus;
    //Check if door is locked. Lock it is if it isnt and unlock if it is
    if (updatedData.doorStatus === "LOCKED") {
      newStatus = "UNLOCKED";
      console.log("Server set data to unlocked");
    } else if (updatedData.doorStatus === "UNLOCKED") {
      newStatus = "LOCKED";
      console.log("Server set data to locked");
    } else {
      return res.status(400).json({ error: "Invalid door status" });
    }

    // Update the door.json file with the new status
    const updatedStatus = { door: { status: newStatus } };
    await fs.writeFile(
      doorStatusFilePath,
      JSON.stringify(updatedStatus, null, 2)
    );

    res.json({ doorStatus: newStatus });
    console.log("Server updated door status and sent response");
  } catch (error) {
    console.error("Error updating door status on the server:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.post("/api/alerts", async (req, res) => {
  const newAlert = req.body;

  try {
    alertData.push(newAlert);

    // Update the alerts.json file with the new data.
    await fs.writeFile(alertsFilePath, JSON.stringify(alertData, null, 2));

    res.json(alertData);
    console.log("Server updated alerts and sent response");
  } catch (error) {
    console.error("Error adding alert on the server:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/doorstatus", async (req, res) => {
  try {
    const data = await fs.readFile(doorStatusFilePath);
    const doorStatusData = JSON.parse(data);

    doorStatus = doorStatusData.door.status;
    res.json(doorStatus);
  } catch (error) {
    console.error("Error fetching door status locally:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// Start the server on PORT variable
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
