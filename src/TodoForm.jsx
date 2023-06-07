import React, { useState } from 'react'
import { ListItem } from '@mui/material'
import {TextField} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import {Create} from "@mui/icons-material"
import InputAdornment from "@mui/material/InputAdornment"
import {IconButton} from "@mui/material"

const TodoForm = ({addTodo}) => {
    const [text,setText]=useState("")

const handleChange=(e)=>{
    setText(e.target.value);
}

const handleSubmit=(evt) =>{
    evt.preventDefault();
    addTodo(text);
    setText("")
}

  return (
    
      <ListItem>
        <form onSubmit={handleSubmit}>
        <TextField id="outlined-basic" label="ADD TODO" variant="outlined"
        onChange={handleChange}
        value={text}

        />
        </form>
      </ListItem>
    
  )
}

export default TodoForm

{/*InputProps={{endAdornment}}

        endAdornment={
          <InputAdornment position="end">
              <IconButton
                aria-label="create todo"
                edge="end"
                type="submit"
              >
<Create/>
              </IconButton>
        </InputAdornment>
    }
          
}
*/}
