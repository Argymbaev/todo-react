import React, { useState } from "react";

function EditTodo(props) {
  const [editValue, SetEditValue] = useState(props.forEditVal.title);
  return (
    <div>
      <h4>Edit Todo</h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!editValue.trim()) return;
          const editedTodo = {
            title: editValue,
            id: props.forEditVal.id,
          };
          props.editTodo(editedTodo);
          props.setForEditVal(null);
        }}
      >
        <input
          value={editValue}
          onChange={(e) => {
            SetEditValue(e.target.value);
          }}
          type="text"
        />
        <button>save</button>
      </form>
    </div>
  );
}

export default EditTodo;