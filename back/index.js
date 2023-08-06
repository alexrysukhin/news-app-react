const express = require("express");
require("dotenv").config();
const cors = require("cors");

const topicRouter = require("./routes/news");



const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json())
app.use('/api/news',topicRouter )

app.listen(PORT, ()=> console.log(`Server started at port ${PORT}`))