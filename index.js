import express from "express";
const app = express();
const PORT = 4000;
const tasks = [
    { id: 1, task: "Buy groceries" },
    { id: 2, task: "Complete React assignment" },
    { id: 3, task: "Call the electrician" },
    { id: 4, task: "Go for a walk" },
    { id: 5, task: "Read a book" }
  ];
  
app.get("/", (req, res) => {
  console.log(req);
  res.send(tasks);
});
app.post("/", (req, res) => {
  console.log(req);
  res.send("Hello World To First Api POST");
});
app.put("/", (req, res) => {
  console.log(req);
  res.send("Hello World To First Api PUT");
});
app.delete("/", (req, res) => {
  console.log(req);
  res.send("Hello World To First Api DELETE");
});
app.listen(PORT, () => console.log("Server Is Running on PORT=> ", PORT));
