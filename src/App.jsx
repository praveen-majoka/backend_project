import './App.css';
import Todo from './components/todo';
import TodoList from './components/todo_list';

function App() {
  return (
    <>
    <div className='bg-black w-full h-screen mx-auto flex flex-col items-center justify-center'>

    <Todo/>
    <TodoList/>
    </div>
    </>
  );
}

export default App;
