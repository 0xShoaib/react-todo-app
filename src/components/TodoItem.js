import React from "react";

export default function TodoItem({
  id,
  title,
  onEditHandler,
  onDeleteHandler,
}) {
  return (
    <div className="todoItem" id={id}>
      <p>{title}</p>
      <div>
        <button onClick={() => onEditHandler(id, title)}>Edit</button>
        <button onClick={() => onDeleteHandler(id)}>Delete</button>
      </div>
    </div>
  );
}
