import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems ,onDeleteClick}) => {
  return (
    <div className="items_container">
      {todoItems.map((item) => (
        <TodoItem todoName={item.Name} todoDate={item.dueDate} onDeleteClick={onDeleteClick}></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;
