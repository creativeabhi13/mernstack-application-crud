const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");
const cors = require("cors");
const app = express();
const PORT=3000;

//middleware
app.use(cors());    
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//import routes


//route
app.use("/api/users",userRoute);

app.get("/", (req, res) => {
    res.send("Hello from the NPM server");
});

//  Connect to MongoDB
mongoose
    .connect(
        "mongodb+srv://creativeabhi13:Fd4SpM0wwd40Ej0d@atstech.gbtdupv.mongodb.net/employee?retryWrites=true&w=majority&appName=atstech"
    )
    .then(() => {
        console.log("Connected to the Database");

        app.listen(PORT, () => {
            console.log(`Server is running at port.......... ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(`Connection Failed ${error}`);
    });