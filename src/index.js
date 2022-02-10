const express = require('express');
const app = express();
const router = require('./router');
const PORT = process.env.PORT || 3000;

app.use("/reddit", router);

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
})

app.get("/", (req, res) => {
    res.send({"message": "server is running"})
})