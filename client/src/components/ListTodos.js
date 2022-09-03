import React, { Fragment, useState, useEffect } from "react";
import EditTodos from "./EditTodos";

export default function ListTodos() {
  const [todos, setTodos] = useState([]);

  //delete todo function
  async function deleteTodo(id) {
    try {
      const res = await fetch (`http://localhost:3000/todos/${id}`, {
        method: "DELETE"
      });
      setTodos(todos.filter(todo => todo.todo_id !== id))
    } catch (err) {
      console.error(err.message)
    }
  }

  async function getTodos() {
    const res = await fetch("http://localhost:3000/todos");

    const todoArray = await res.json();
    setTodos(todoArray);
  }
  useEffect(() => {
    getTodos();
  }, []);

  console.log(todos);

  return (
    <Fragment>
      {" "}
      <table className="table mt-5">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>

          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td><EditTodos todo={todo}/></td>
              <td>
                <button className="btn btn-danger" onClick={()=>deleteTodo(todo.todo_id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}
