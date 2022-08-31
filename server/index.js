const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(cors());

app.listen(3000), () => {
  console.log("Sever is running on port 5000");
}