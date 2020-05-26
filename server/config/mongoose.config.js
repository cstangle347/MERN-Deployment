const mongoose = require("mongoose");
const dbName = "petShelter";

mongoose.connect(`'mongodb://localhost/${dbName}'`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    })
    .then(() => { console.log(`'Established a connection to ${dbName}'`);
    })
    .catch(err => { console.log("Mongoose connection failed", err);
    });