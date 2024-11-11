// const express = require("express");
// const axios =require("axios")
// require("dotenv").config();
// const {Directus} =require("@directus/sdk")
import express from "express"
import cookieParser from "cookie-parser"
import axios from "axios"
import dotenv from "dotenv"
import authRoutes from "./routes/authroutes.js"
import { createDirectus,rest,readItems } from "@directus/sdk"

const client = createDirectus('http://13.202.242.185:8055').with(rest());

dotenv.config()
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cookieParser());


// app.get("/api/users", async (req, res) => {
//   const directusApiUrl = "http://13.202.242.185:8055/items/users"; // Direct URL to the custom users table
  
//   try {
//     // Make a GET request to fetch the users from Directus
//     const response = await axios.get(directusApiUrl);

//     Send the data to the client (your frontend or other backend services)

//     res.json(response.data);
//   } catch (error) {
//     console.error("Error fetching users from Directus:", error.message);

//     // Send a failure response
//     res.status(500).json({ message: 'Error fetching users from Directus', error: error.message });
//   }
// });



app.get('/api/users', async (req, res) => {
  try {
    const result = await client.request(readItems('users'));

    // Return the list of users in the response
    return res.status(200).json(result);
  } catch (error) {
    console.error('Error fetching users:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

app.use("/api/auth",authRoutes)
// Sample Route
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
