import "./App.css";
import AddTask from "./components/tasks/AddTask";
import EditTask from "./components/tasks/EditTask";
import TaskList from "./components/tasks/TaskList";

function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>
      <AddTask />
      <EditTask />
      <TaskList />
    </div>
  );
}

export default App;
