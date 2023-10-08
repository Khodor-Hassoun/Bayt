require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");

const corsOptions = {
  origin: "*",
  methods: ["POST", "GET"],
};
app.use(cors(corsOptions));

app.get("/work", (req, res) => {
  axios
    .get("https://careers.moveoneinc.com/rss/all-rss.xml/", {
      headers: {
        Accept: "text/xml",
      },
      responseType: "document",
    })
    .then((response) => {
      console.log("I reached the end");
      res.send(response.data);
    })
    .catch((e) => {
      console.log(e);
    });
});

app.listen(3000, () => {
  console.log("app running on port 3000");
  console.log(process.env.API_LINK);
});
