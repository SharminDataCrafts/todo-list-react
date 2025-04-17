import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Input = (props) => {
    // console.log(props.newTodo)
    return (
        <div style={{display:'flex', justifyContent:'center'}}>
            <TextField id="outlined-basic" label="add a task" variant="outlined" value={props.newTodo} onChange={props.updateTodoValue} />
            <Button variant="contained" onClick={props.addNewTask}>Add</Button>
        </div>
    );
};

export default Input;