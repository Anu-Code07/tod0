import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { todoVal } from "../states/todoForm";

export const EditTodo = ({ editTodo, task }: any) => {
  const [todos, setTodos] = useRecoilState(todoVal);
  const [val, setVal] = useState(task?.task);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editTodo(task.id, val);
  };
  return (
    <div>
      <form className="TodoForm" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="todo-form"
          value={val}
          id=""
          className="todo-input"
          placeholder="Update Task..."
          onChange={(e) => handleChange(e)}
        />
        <button type="submit" className="todo-btn">
          Update Task
        </button>
      </form>
    </div>
  );
};
