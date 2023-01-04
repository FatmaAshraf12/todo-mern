import React from "react";

const TodoItems = (props) => {
  const {items, deleteItems} = props;
  let length = items.length;

  const list = length ? (
    items.map((item) => {
      return (
        <tr key={item._id}>
          <td>{item.item}</td>
          <td>{item.complete ? <h3>done</h3> : <h4>not yet</h4>}</td>
          <td>{item.user.name}</td>
          <td onClick={() => deleteItems(item._id)}>DELETE</td>
        </tr>
      );
    })
  ) : (
    <tr>
      <td>No items</td>
    </tr>
  );
  return (
    <div>
      <h2>TODO LIST</h2>
      <table>
        <thead>
          <tr>
            <td>Task</td>
            <td>Complete</td>
            <td>User</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </table>
    </div>
  );
};

export default TodoItems;
