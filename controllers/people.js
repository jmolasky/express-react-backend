const express = require("express");
const peopleRouter = express.Router();
const Person = require("../models/person");

// test route
peopleRouter.get("/", (req, res) => {
  res.send("hello world");
});

// People index route
peopleRouter.get("/people", async (req, res) => {
  try {
    res.json(await Person.find({}));
  } catch (err) {
    res.status(400).json(err);
  }
});

// People Create Route
peopleRouter.post("/people", async (req, res) => {
  try {
    res.json(await Person.create(req.body));
  } catch (err) {
    res.status(400).json(err);
  }
});

// People Delete Route
peopleRouter.delete("/people/:id", async (req, res) => {
  try {
    res.json(await Person.findByIdAndDelete(req.params.id));
  } catch (err) {
    res.status(400).json(err);
  }
});

peopleRouter.put("/people/:id", async (req, res) => {
  try {
    res.json(
      await Person.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = peopleRouter;
