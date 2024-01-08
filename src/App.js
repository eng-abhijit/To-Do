import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

import "./App.css";

function App() {
  return (
    <>
      <center className="todo_container">
        <AppName />
        <AddTodo />
      </center>
    </>
  );
}

export default App;
