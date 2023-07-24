const express = require("express");
const cors = require("cors");
// const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// midlwares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("job portal is running");
});

app.listen(port, () => {
  console.log(`job portal is running on port ${port}`);
});
