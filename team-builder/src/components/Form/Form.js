import React, { useState } from 'react'

 function Form(props) {
     const[teamMember, setTeamMember] = useState({
         email: '',
         name:'',
         role:''
     });

     const changesHandler = event =>{
         setTeamMember({
             ...teamMember, [event.target.name]: event.target.value
         });
     }
const submitHandler= event => {
    event.preventDefault();
    const newTeamMember = {
        ...teamMember,
        id: Date.now()
    };
    props.addNewTeamMember(newTeamMember);
    setTeamMember({email:'', name:'', role:'',})
}

    return (
        <div>
            <form onSubmit ={submitHandler}>
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