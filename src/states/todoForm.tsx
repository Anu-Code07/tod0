import { atom } from "recoil";
import { ToDoListTypes } from "../type";
export const todoVal = atom<ToDoListTypes.TodoList[]>({
  key: "todos",
  default: [],
});
