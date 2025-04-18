import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import TodoList from './components/TodoList/TodoList';
import { v4 as uuidv4 } from 'uuid';
import EditForm from './components/EditForm/EditForm';

function App() {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [editing, setEditing] = useState(null);

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

  //edit a todo
  const editTodo = (id)=>{
    const todoToEdit = todos.find(todo=>todo.id===id)
    setEditing({...todoToEdit})
    // console.log(editing)
  }

  const editTodoValue=(e)=>{
    setEditing({...editing, task:e.target.value})
    // console.log(editing)
  }

  //add a todo 
  const updateList = ()=>{
    const value = editing.task
    if(value!==''){
     const updatedTodos = todos.map(todo=>todo.id===editing.id ? {...todo, task:value}:todo)
     setTodos(updatedTodos) 
     setEditing(null)
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
      {editing ? (<EditForm editing={editing} newTodo={newTodo} editTodoValue={editTodoValue} updateList={updateList}></EditForm>):(<>
        <Input newTodo={newTodo} updateTodoValue={updateTodoValue} addNewTask={addNewTask}></Input>
      
        {
           
           todos.length>0 && <TodoList todos={todos} deleteTask={deleteTask} markAsDone={markAsDone} markAllAsDone={markAllAsDone} 
           editTodo={editTodo}	></TodoList>
        }
        </>)
      }
      
    </div>
  );
}

export default App;

