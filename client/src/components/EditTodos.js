import React, { Fragment, useState } from "react";

export default function EditTodos({ todo }) {

  //Edit Text function 
const editText = async (id) => {
  try {
    const body = { description }

    const res = await fetch(`http://localhost:3000/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(body)

    })
    console.log(res)
  } catch (err) {
    console.error(err.message)
  }
}

  const [description, setDescription] = useState(todo.description);
  return (
    <Fragment>
      {/* Button to Open the Modal */}
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>

      {/* The Modal */}
      <div class="modal" id={`id${todo.todo_id}`}>
        <div class="modal-dialog">
          <div class="modal-content">
            {/* Modal Header */}
            <div class="modal-header">
              <h4 class="modal-title">Edit Todo</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            {/* Modal body */}
            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            {/* Modal footer */}
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={() => editText(todo.todo_id)}
              >
                Edit
              </button>

              <button type="button" class="btn btn-danger" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
