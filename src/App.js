import { useState } from "react";
import AddTodo from "./components/AddTodo.jsx";
import EditTodo from "./components/EditTodo.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {
  const [todos, setTodos] = useState([]);
  const [forEditVal, setForEditVal] = useState(null);

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  function deleteTodo(id) {
    const filtred = todos.filter((item) => item.id !== id);
    setTodos(filtred);
  }

  function editTodo(editedTodo) {
    const newArr = todos.map((item) => {
      if (item.id === editedTodo.id) {
        return editedTodo;
      }
      return item;
    });
    setTodos(newArr);
  }
  return (
    <div>
      <AddTodo addTodo={addTodo} />
      {forEditVal ? (
        <EditTodo
          setForEditVal={setForEditVal}
          editTodo={editTodo}
          forEditVal={forEditVal}
        />
      ) : null}
      <TodoList
        setForEditVal={setForEditVal}
        todos={todos}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;