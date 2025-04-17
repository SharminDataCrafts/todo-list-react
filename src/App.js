import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import TodoList from './components/TodoList/TodoList';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  //get input value
  const updateTodoValue=(e)=>{
    setNewTodo(e.target.value)
  }

  //add a todo 
  const addNewTask = ()=>{
   if(newTodo.trim()!==''){
    setTodos([...todos, {id:uuidv4(), task:newTodo, isDone:false}]) 
    setNewTodo('')
   }
  }

  //delete a todo
  const deleteTask=(id)=>{
    let newTodo = todos.filter(todo=>todo.id!==id)
    setTodos(newTodo)
  }

// // mark a todo as done -->way 1
// const markAsDone =(id)=>{
//   setTodos(todos=>
//     todos.map(todo=>{
//       if(todo.id===id){
//         return {...todo, isDone:!todo.isDone}
//       }
//       return todo
//     })
//   )
// }

// mark a todo as done -->way 2
const markAsDone = (id) =>{
  const newTodos = todos.map(todo => {
    if(todo.id === id){
      return{...todo, isDone: !todo.isDone}
    }
    return todo; 
  })
  setTodos(newTodos)
}


// mark all todos as done
const markAllAsDone = ()=>{
  setTodos(todos=>
    todos.map(todo=>({
      ...todo,
      isDone:true
    })
  ))
}


  return (
    <div className="App">
      <Header></Header>
      <Input newTodo={newTodo} updateTodoValue={updateTodoValue} addNewTask={addNewTask}></Input>
      
      {
         
         todos.length>0 && <TodoList todos={todos} deleteTask={deleteTask} markAsDone={markAsDone} markAllAsDone={markAllAsDone}	></TodoList>
      }
    </div>
  );
}

export default App;

