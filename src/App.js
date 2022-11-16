import './App.css';
import TodoList from './components/TodoList';
import TodoAdd from './components/TodoAdd';
import TodoFilter from './components/TodoFilter';

function App() {
  return (
   
    <div>
      <h1>Bonjour ton liste est prete </h1>
      <TodoAdd />
      <TodoFilter />
      <TodoList />
    </div>
    
  );
  
}

export default App;
