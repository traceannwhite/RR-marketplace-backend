require("dotenv").config();
const mongoose = require("mongoose");

//env variables
const { URI } = process.env;

const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.connect(URI, config);

const db = mongoose.connection;
db.on("connect", () => console.log(`👍🏼 Mongo is connected!`));
db.on("disconnect", () => console.log(`👋🏼 Mongo is disconnected.`));
db.on("error", (err) => console.log(`❌ Error connecting ${err}`));

module.exports = mongoose;
