import express from "express";
import morgan from "morgan";
import userRouter from "./routers/users.js"
const app = express();
const PORT = 4000;
const tasks = [
  { id: 1, task: "Buy groceries" },
  { id: 2, task: "Complete React assignment" },
  { id: 3, task: "Call the electrician" },
  { id: 4, task: "Go for a walk" },
  { id: 5, task: "Read a book" },
];
const middleware = (req, res, next) => {
  // console.log("app level middleware=> ",Date.now());
  req.requestBy = "M.KASHIF";
  // res.status(500).send("System Wer gaya")
  // res.responseBy="sir Bilal"
  next();
};

// app.use(middleware);
app.use(express.json());
app.use(morgan("tiny"));
app.use("/user",userRouter)
app.get("/", (req, res) => {
  // console.log("req.requestBy=> ", req.requestBy);
  // console.log("res.responseBy=> ", res.responseBy);
  // console.log("req.body=> ", req.body);
  res.send(tasks);
});

// app.post("/", middleware, (req, res) => {
//   res.send("Hello World To First Api POST");
//   console.log("req.body=> ", req.body);
// });
// app.put("/", (req, res) => {
//   res.send("Hello World To First Api PUT");
// });
// app.delete("/", (req, res) => {
//   res.send("Hello World To First Api DELETE");
// });
app.listen(PORT, () => console.log("Server Is Running on PORT=> ", PORT));

