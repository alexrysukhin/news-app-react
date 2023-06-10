const express = require("express");
require("dotenv").config();

const topicRouter = require("./routes/topic");

const app = express();
const PORT = process.env.PORT || 5001;

app.use('/api/topic',topicRouter )

app.listen(PORT, ()=> console.log(`Server started at port ${PORT}`))