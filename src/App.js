import './App.css';
import TodoItemCreate from './components/TodoItemCreate'
import TodoList from "./components/TodoList";

function App() {
  return (

    <div className="App">
      <TodoItemCreate/>
        <TodoList/>
    </div>
  );
}

export default App;
