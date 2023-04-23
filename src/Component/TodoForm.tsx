import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { todoVal } from "../states/todoForm";
import { useNotify } from "../utils/useNotify";

export const TodoForm = () => {
  const [todos, setTodos] = useRecoilState(todoVal);
  const [val, setVal] = useState("");
  const notify = useNotify();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (val === "") {
      notify.error("Please Don't Submit Blank !");
    } else {
      setTodos([
        ...todos,
        {
          task: val,
          id: (Math.random() * 10000 + 1).toFixed(0),
          isCompleted: false,
          edit: false,
        },
      ]);
      setVal("");
    }
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
          placeholder="What is the task today?"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <button type="submit" className="todo-btn">
          Create Task
        </button>
      </form>
    </div>
  );
};
