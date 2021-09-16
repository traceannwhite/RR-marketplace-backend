require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("./db/connection");
const UserRouter = require("./controllers/User"); //import User Routes
const ProductRouter = require("./controllers/addProduct"); // import addProduct Routes

// port
const { PORT } = process.env || 3000;

//application object
const app = express();

// middleware
app.use(cors()); // add cors headers
app.use(express.json()); //parse json bodies
app.use(morgan("tiny")); //log request for debugging

// test the server
app.get("/", (req, res) => res.send(`Server is working.`));
// routes
app.use("/user", UserRouter); // send all "/user" requests to UserRouter for routing
app.use("/addProduct", ProductRouter); // send all "/addProduct" request to ProductRouter

// app.use("/products");
// app.use("/____");
// app.use("/____");

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
