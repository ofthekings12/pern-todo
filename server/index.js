const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db")

//middleware
app.use(cors());
app.use(express.json()); // allows us to access the req.body

//ROUTES//

//Get all todos
app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo")
    res.json(allTodos.rows)
  } catch (err) {
    console.error(err.message)
  }
})
// Get specific todo
app.get("/todos/:id", async (req, res) => {
  console.log(req.params)
})

//create todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query("INSERT INTO todo (description) VALUES ($1) RETURNING *", [description]);

    res.json(newTodo.rows[0]);
  }
  catch (err) {
    console.error(err.message)
  }
})

// update todo

//delete todo

app.listen(3000, () => {
  console.log("Server is running on port 5000");
});