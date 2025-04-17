import React from 'react';

import Box from '@mui/material/Box';
import Todo from '../Todo/Todo';
import Button from '@mui/material/Button';




const TodoList = ({todos, deleteTask, markAsDone, markAllAsDone}) => {
    // console.log(todos)
    return (
        <Box display="flex" flexDirection='column' justifyContent="center" alignItems="center">
            <br/>        
              {todos.map(todo=> <Todo key={todo.id} todo={todo} deleteTask={deleteTask} markAsDone={markAsDone} ></Todo>)}
              <Button variant="contained" color="success" onClick={markAllAsDone}>
                Mark All as Done
            </Button>
        </Box>

    );
};

export default TodoList;