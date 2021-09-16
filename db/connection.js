require("dotenv").config(); // load .env variables
const mongoose = require("mongoose"); //import fresh mongoose object

//DESTRUCTURE ENV VARIABLES
const { URI } = process.env;

// CONNECT TO MONGO
mongoose.connect = mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// CONNECTION EVENTS
mongoose.connection
  .on("open", () => console.log("DATABASE STATE", "Connection Open"))
  .on("close", () => console.log("DATABASE STATE", "Connection Open"))
  .on("error", (error) => console.log("DATABASE STATE", error));

// EXPORT CONNECTION
module.exports = mongoose;
