const mongoose = require("mongoose");
const mongoURI = process.env.URI || "mongodb://localhost:27017/job-application";

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connected to mongo");
  });
};

module.exports = connectToMongo;
