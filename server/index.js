const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

mongoose
    .connect("mongodb://localhost:27017/mvm_fitness", {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => console.log("MongoDB Connected"))
    .catch(() => console.log("Error occur while connecting MongoDB"));

app.use(express.json());
app.use(cors());

const port = 8000
app.listen(port, () => console.log(`Server running on ${port}`))