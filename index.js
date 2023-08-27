const express = require("express");
const  connect = require("./configs/db");
const urlController = require("./controllers/url-controller");
const URL = require("./models/url-model");

const app = express();

app.use(express.json());

app.use("/url", urlController);


app.listen(5000, async () => {
    try {
      await connect();
      console.log("listening to port 5000...");
    } catch (error) {
      console.log("error:", error);
    }
  });
