import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./App.css";

import TodoItem from "./components/TodoItem";

function App() {
  const [id, setId] = useState("");
  const [todo, setTodo] = useState("");
  const [allTodos, setAllTodos] = useState([]);

  const onAddTodoHandler = () => {
    if (todo) {
      let newData = [];

      if (id !== "") {
        newData = allTodos.filter((item) => {
          if (item.id === id) {
            item.title = todo;
          }
          return item;
        });
      } else {
        newData = [...allTodos, { id: uuidv4(), title: todo }];
      }

      setAllTodos(newData);
      setId("");
      setTodo("");
    }
  };

  const onEditHandler = (id, title) => {
    setId(id);
    setTodo(title);
  };

  const onDeleteHandler = (id) => {
    let newData = allTodos.filter((item) => {
      return item.id !== id;
    });
    setAllTodos(newData);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <div className="formWrapper">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <button onClick={() => onAddTodoHandler()} className="submitBtn">
          Add Todo
        </button>
      </div>
      <div className="todoList">
        {allTodos.length !== 0 ? (
          allTodos.map((item) => {
            return (
              <TodoItem
                key={item.id}
                id={item.id}
                title={item.title}
                onEditHandler={onEditHandler}
                onDeleteHandler={onDeleteHandler}
              />
            );
          })
        ) : (
          <h3>You have no todos..</h3>
        )}
      </div>
    </div>
  );
}

export default App;
