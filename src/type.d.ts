export namespace ToDoListTypes {
  type TodoList = {
    task: string;
    id: string | number;
    isCompleted: boolean;
    edit: boolean;
  };
}
