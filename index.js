const express = require('express');

// We could potentially have multiple application
const app = express();

app.get("/", (req, res) => {
    res.send({hi: "there"})
});;

const PORT = process.env.PORT || 5000;
app.listen(PORT);