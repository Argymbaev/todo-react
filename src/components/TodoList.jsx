import React from "react";

function TodoList(props) {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {props.todos.length > 0 ? (
          props.todos.map((item) => {
            return <li key={item.id}>{item.title} <button onClick= {() => props.deleteTodo(item.id
              )}>Delete</button> {" "}
              <button onClick = {() => props.setForEditVal(item)}>Edit</button>
              </li>;
          })
        ) : (
          <h5>Тудушек нет</h5>
        )}
      </ul>
    </div>
  );
}

export default TodoList;