///////////////////////////////
// DEPENDENCIES
////////////////////////////////
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

const { PORT = 3001, DATABASE_URL } = process.env;

///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////
mongoose.connect(DATABASE_URL);
const db = mongoose.connection;
db.on("connected", () => console.log("mongo connected"));
db.on("disconnected", () => console.log("mongo disconnected"));
db.on("error", (error) => console.log(error));

///////////////////////////////
// MODELS
////////////////////////////////
// const PeopleSchema = new mongoose.Schema({
//   name: String,
//   image: String,
//   title: String,
// });

// const People = mongoose.model("People", PeopleSchema);

///////////////////////////////
// MiddleWare
////////////////////////////////
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Mount routes
app.use("/", require("./controllers/people"));

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
