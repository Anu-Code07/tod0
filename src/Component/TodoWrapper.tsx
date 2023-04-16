import React from "react";
import { TodoForm } from "./TodoForm";
import Todo from "./Todo";
import { todoVal } from "../states/todoForm";
import { useRecoilValue, useRecoilState } from "recoil";
import { ToDoListTypes } from "../type";
import { EditTodo } from "./EditTodo";
const TodoWrapper = () => {
  const listTodo = useRecoilValue(todoVal);
  const [todosList, setTodosList] = useRecoilState(todoVal);

  const toggleComplete = (id: number) => {
    setTodosList(
      todosList.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              isCompleted: !todo.isCompleted,
            }
          : todo
      )
    );
  };
  const deleteTodo = (id: number) => {
    setTodosList(todosList.filter((todo) => todo.id !== id));
  };
  const editTodo = (id: number) => {
    setTodosList(
      todosList.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              edit: !todo.edit,
            }
          : todo
      )
    );
  };
  const editTask = (id: number, val: any) => {
    setTodosList(
      todosList.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              task: val,
              edit: !todo.edit,
            }
          : todo
      )
    );
  };
  return (
    <div className="TodoWrapper">
      <h1>Get Things Done!</h1>
      <TodoForm />
      {listTodo.map((todo: ToDoListTypes.TodoList, index: number) => {
        return todo.edit ? (
          <EditTodo editTodo={editTask} task={todo} key={todo.id} />
        ) : (
          <Todo
            todoList={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        );
      })}
    </div>
  );
};

export default TodoWrapper;
