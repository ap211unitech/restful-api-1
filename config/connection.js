const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DATABASE CONENCTED...")
});

mongoose.Promise = global.Promise;