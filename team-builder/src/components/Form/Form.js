import React, { useState } from 'react'

 function Form() {
     const[teamMember, setTeamMember] = useState([]);

    return (
        <div>
            <form>
                <label htmlFor='title'>
                  <label htmlFor='name'>Name: </label>  
                <input  
                name= 'name'  
                type='text'>
                </input> <br/>
                <label htmlFor="email">Email: </label>
                <input 
                id= 'email'   
                type='text'>
                </input> <br/>
                <label htmlFor='role'>Role: </label>
                <input 
                id= 'role'   
                type='text'>
                </input><br/>
                <input 
                type='submit'
                 value='Submit'/>
                </label>
            </form>
        </div>
    )
}
export default Form;