import React, {Fragment, useState} from 'react'

export default function EditTodos({ todo }) {

  const [description, setDescription] = useState(todo.description);
  return (
    <Fragment>
      {/* Button to Open the Modal */}
<button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${todo.todo_id}`}>
  Edit
</button>

{/* The Modal */}
<div class="modal" id={`id${todo.todo_id}`}>
  <div class="modal-dialog">
    <div class="modal-content">

     {/* Modal Header */}
      <div class="modal-header">
        <h4 class="modal-title">Edit Todo</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>

      {/* Modal body */}
      <div class="modal-body">
        <input type="text" className="form-control" value={description}/>
      </div>

      {/* Modal footer */}
      <div class="modal-footer">
      <button type="button" class="btn btn-warning" data-dismiss="modal">Edit</button>

        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
    </Fragment>
  )
}
