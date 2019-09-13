const express = require("express");
const app = express();
const path = require("path");

const bikeRentalsData = require("./bikerentals.json");

app.get("/api/bikerentals", function(req, res) {
  res.header("Content-Type", "application/json");
  res.send(bikeRentalsData);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`LISTENING TO PORT ${PORT}`));
