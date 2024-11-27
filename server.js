require("dotenv").config();
require("./db/");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Z-key'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
  });

app.use("/", require("./routes/"));


app.use((err, req, res, next) => {
    console.log(err)
    if (err.name === "ValidationError"){
        err.status = 400;
    }
    res.status(err.status || 500);
    res.json(err);
});


process.on("SIGINT", () => {
    mongoose.connection.close();
    console.log("Mongoose connection closed");
    process.exit(0);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
});