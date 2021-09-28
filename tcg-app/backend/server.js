const express = require('express')
const app = express()
const mongoose = require('mongoose')


app.use(cors())
app.use(express.json())
mongoose.connect(
    "mongodb+srv://kwanele:sphe1906@cluster0.wrcxy.mongodb.net/TCG-app?retryWrites=true&w=majority",
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    },

    () => {
        console.log("mongobd database connected!")
    }
);
route(app)

const port = 5100
app.listen(port, () => console.log(`server running on port: ${port}`))
