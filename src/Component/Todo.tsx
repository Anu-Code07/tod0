import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { ToDoListTypes } from "../type";
import { useEffect, useState } from "react";
import { todoVal } from "../states/todoForm";
import { useRecoilValue } from "recoil";
type Props = {
  todoList: ToDoListTypes.TodoList;
  toggleComplete: Function;
  deleteTodo: Function;
  editTodo: Function;
};
const Todo = ({ todoList, toggleComplete, deleteTodo, editTodo }: Props) => {
  const storeList = useRecoilValue(todoVal);

  useEffect(() => {
    localStorage.setItem("finalList", JSON.stringify(storeList));
  }, [storeList, todoList, deleteTodo]);
  return (
    <div className="Todo">
      <p
        className={`${todoList.isCompleted ? "completed" : ""}`}
        onClick={() => {
          toggleComplete(todoList.id);
        }}
      >
        {todoList.task}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => {
            editTodo(todoList.id);
          }}
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => deleteTodo(todoList.id)}
        />
      </div>
    </div>
  );
};

export default Todo;
