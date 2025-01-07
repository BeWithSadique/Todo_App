import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [todoDueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDueDateChange = (event) => {
    setDueDate(event.target.value);
  };
  const handleAddBtnClick = () => {
    onNewItem(todoName, todoDueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <>
      <div className="container ">
        <div className="row mt-5">
          <div className="col-6">
            <input
              type="text"
              name=""
              id=""
              value={todoName}
              placeholder="Enter Todo Here"
              onChange={handleNameChange}
            />
          </div>
          <div className="col-4">
            <input
              type="Date"
              name=""
              id=""
              value={todoDueDate}
              onChange={handleDueDateChange}
            />
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-success kg_button"
              onClick={handleAddBtnClick}
            >
              ADD
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddTodo;
