import express from "express";
import morgan from "morgan";
const app = express();
const PORT = 4000;
const tasks = [
    { id: 1, task: "Buy groceries" },
    { id: 2, task: "Complete React assignment" },
    { id: 3, task: "Call the electrician" },
    { id: 4, task: "Go for a walk" },
    { id: 5, task: "Read a book" }
  ];
// Application Level Middleware
  const middleware=(req,res,next)=>{
    console.log("app level middleware=> ",Date.now());
    next()
  }
app.use(middleware)
// The End Application Level Middleware
// show send req name middleware:-
app.use(morgan('tiny'))
// The End show send req name middleware:-

app.get("/", (req, res) => {
  // console.log(req);
  res.send(tasks);
});
app.post("/", (req, res) => {
  // console.log(req);
  res.send("Hello World To First Api POST");
});
app.put("/", (req, res) => {
  // console.log(req);
  res.send("Hello World To First Api PUT");
});
app.delete("/", (req, res) => {
  // console.log(req);
  res.send("Hello World To First Api DELETE");
});
app.listen(PORT, () => console.log("Server Is Running on PORT=> ", PORT));
