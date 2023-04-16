import { useState } from "react";
import "./App.css";
import TodoWrapper from "./Component/TodoWrapper";
import { useRecoilValue } from "recoil";

import Todo from "./Component/Todo";
function App() {
  return (
    <div className="App">
      <TodoWrapper />
    </div>
  );
}

export default App;
