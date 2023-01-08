const express = require("express");
const mongodb = require("mongodb");
const dbConnect = require("./mongoDB");

const app = express();
app.use(express.json()); // To get data from postman

// GET Api :- To retrieve data
app.get("/", async (req, res) => {
  let data = await dbConnect();
  let result = await data.find().toArray();
  res.send("Record Retrieved Successfully");
});

// POST Api :- To insert new data
app.post("/", async (req, res) => {
  let data = await dbConnect();
  let result = await data.insertOne(req.body);
  res.send("New Record Inserted");
});

// PUT Api :- To update data
app.put("/", async (req, res) => {
  let data = await dbConnect();
  let result = await data.updateOne(
    { name: req.body.name },
    { $set: req.body }
  );
  res.send("Record Updated Successfully");
});

// DELETE Api :- To delete data
app.delete("/:id", async (req, res) => {
  let data = await dbConnect();
  let result = await data.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  res.send("Record Deleted Successfully");
});
console.log(__filename);

app.listen(2120);
