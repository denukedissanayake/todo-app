const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const PORT = 3050;

app.get('/', (req, res) => {
    res.json("Index.js")
})

app.listen(PORT, () => {
    console.log(`Server listening on the port::${PORT}`);
});