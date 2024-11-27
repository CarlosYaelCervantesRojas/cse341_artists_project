const mongoose = require("mongoose");


mongoose.connect(process.env.URI)
    .then(() => {
        console.log("DB connected");
    })
    .catch((err) => {
        console.log(err);
    })