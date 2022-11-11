const express = require("express");
const cors = require("cors");
const { json } = require("express");
require('dotenv').config();
const app = express();
const port = process.env.PORT

//middelware :
app.use(cors());
app.use(express.json());

//test node :
app.get('/', (req, res) => res.send('sfmu server is open'));

app.listen(port, () => console.log(port, "port is open"))
