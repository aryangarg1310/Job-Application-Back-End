require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const connectToMongo = require("./database");

app.use(express.json());
app.use(require("body-parser").json());
const cors = require("cors");
app.use(cors());

connectToMongo();

app.use(express.json());
app.use(express.static("public"));

app.use("/api", require("./route"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
