import express from "express";
import morgan from "morgan";
import userRouter from "./routers/users.js"
const app = express();
const PORT = 4000;
const tasks = [
  { id: 1, task: "Buy groceries", complete:true },
  { id: 2, task: "Complete React assignment" , complete:true},
  { id: 3, task: "Call the electrician" , complete:false},
  { id: 4, task: "Go for a walk" , complete:false},
  { id: 5, task: "Read a book", complete:true },
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
  res.status(200).send(tasks);
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
// params  dynamic route and url without params api is not completed.
app.get("/singleTask/:id",(req,res)=>{
  const findTask=tasks.find((data)=>data.id == req.params.id)
  if(!findTask) return res.status(404).send("Task Not Found")
    res.status(200).send(findTask)
})
// query


app.listen(PORT, () => console.log("Server Is Running on PORT=> ", PORT));

// params 
// query
// body