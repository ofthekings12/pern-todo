import React, { Fragment, useState, useEffect} from "react";

export default function ListTodos() {
  return (
    <Fragment>
      {" "}
      <table class="table mt-5">
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
  </tbody>
</table>
    </Fragment>
  )
}
