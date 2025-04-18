import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Todo = ({todo, deleteTask, markAsDone, editTodo}) => {
    // console.log(todo)
    return (
        <List
            sx={{ width: '100%', maxWidth: 450, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader" style={{align:'center'}}
            >
            <ListItemButton>
            <ListItemIcon>
                <SendIcon />
            </ListItemIcon>
            <ListItemText primary={todo.task} sx={{ textDecoration: todo.isDone?'line-through':'none'}}/>
            <Button variant="contained" color="secondary" sx={{ marginLeft: 2}} onClick={()=>{editTodo(todo.id)}}>Edit</Button>
            <Button variant="contained"  color="error" onClick={()=>{deleteTask(todo.id)}} sx={{ marginLeft: 2}}>Delete</Button>
            <FormControlLabel control={<Checkbox checked={todo.isDone} onChange={()=>{markAsDone(todo.id)}}/>} label="Done"sx={{ marginLeft: 2}} />

            </ListItemButton>
      </List>
    );
};

export default Todo;