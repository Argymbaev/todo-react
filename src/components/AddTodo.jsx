import React, { useState } from "react";

function AddTodo(props) {
  const [value, setValue] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if(!value.trim()) return;
          const newTodo = {
            id: Date.now(),
            title: value,
          };
          props.addTodo(newTodo);
          setValue("");
        }}
      >
        <input
          placeholder="New todo..."
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button>Add todo</button>
      </form>
    </div>
  );
}

export default AddTodo;