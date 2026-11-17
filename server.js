import "dotenv/config";
import express from "express";
import { MongoClient } from "mongodb";

const app = express();
const port = process.env.PORT || 3001;

const uri = process.env.MONGO_URI;
//new MongoClient instance using the connection string

const client = new MongoClient(uri);
//testing the databse connection

app.get("/", async (req, res) => {
  try {
    //connect to the cluster
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    res
      .status(200)
      .json({ message: "Successfully connected to the database!" });
  } catch (error) {
    console.error("Database connection error:", error);
    res.status(500).json({ message: "Failed to connect to the database." });
  } finally {
    await client.close();
  }
});
//start the express server
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});