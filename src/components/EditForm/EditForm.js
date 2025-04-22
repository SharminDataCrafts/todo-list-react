import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const EditForm = ({editing, editTodoValue, updateList}) => {
    // console.log(editing)
    return (
        <div style={{display:'flex', justifyContent:'center'}}>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" value={editing.task} onChange={editTodoValue} />
            <Button variant="contained" sx={{marginLeft: 1}} onClick={updateList}>Update todo</Button>
        </div>
    );
};

export default EditForm;