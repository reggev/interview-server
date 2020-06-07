const express = require("express");
const logger = require("morgan");

const app = express();
const PORT = process.env.PORT || 4000;
// @ts-ignore
app.use(logger("short"));

app.get("/", (req, res) => {
  res.send("insert some data here");
});

app.listen(PORT, () => {
  console.info(`🌵 listening on port ${PORT}\n\tpress ctrl+c to stop...`);
});
