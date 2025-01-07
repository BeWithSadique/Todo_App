import AppName from "./component/Appname";
import AddTodo from "./component/AddTodo";
import TodoItems from "./component/TodoItems";
import WelcomeMsg from "./component/WelcomeMsg";

import "./App.css";
import { useState } from "react";
function App() {
  const [todoItems, setTodoItems] = useState([]);

  //handle the add items
  const handleNewItem = (itemName, itemDueName) => {
    console.log(`new item: ${itemName} and ${itemDueName}`);

    const newTodoItem = [
      ...todoItems,
      { Name: itemName, dueDate: itemDueName },
    ];
    setTodoItems(newTodoItem);
  };

  //handle the  delete items
  const handleDeleteItem = (todoItemsName) => {
    const newTodoItems = todoItems.filter(
      (item) => item.name !== todoItemsName
    );
    setTodoItems(newTodoItems);
    console.log(`item delete:${todoItemsName}`);
  };
  return (
    <center className="todo_container">
      <div className="container">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        {todoItems.length === 0 && <WelcomeMsg></WelcomeMsg>}
        <TodoItems
          todoItems={todoItems}
          onDeleteClick={handleDeleteItem}
        ></TodoItems>
      </div>
    </center>
  );
}

export default App;
