import React, { Fragment, useState, useEffect } from "react";

export default function ListTodos() {
  const [todos, setTodos] = useState([]);

  //delete todo function
  async function deleteTodo(id) {
    try {
      const res = await fetch (`http://localhost:3000/todos/${id}`, {
        method: "DELETE"
      });
      console.log(res);
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
          {/* <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr> */}
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>Edit</td>
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
