import React, { useContext, useState } from 'react';
import AddUser from '../AddUser/AddUser';
import ToDoList from '../ToDoList/ToDoList';
import { UserContext } from '../UserContext';
import {reducer} from '../UserContext';


const User = ({user,index}) => {

    const [isEditing,setIsEditing] = useState(false);

    const [state,dispatch] = useContext(UserContext);
    if(isEditing){
       
       
        
    return(
        <AddUser title={"Edit User"} user={user} index={index} todo={user.todo} isEditing={isEditing} setIsEditing={setIsEditing}/>
    )
    
    }
    return (
        <div className={"Card"}>
            Name: <h1>{user.name}</h1>
            Email: <h3>{user.email}</h3>
            <ToDoList todo={state.users[index].todo} index={index} isEditMode={isEditing} />
            <button className={"button-primary"} onClick={(e)=>{setIsEditing(true);}} >Edit</button>
            
            <button className={"button-danger"} onClick={()=>dispatch({type:"delete",data:user.email})} >Delete</button>
        </div>
    );
}

export default User;
