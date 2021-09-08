import React, { useContext, useState } from 'react';
import AddUser from '../AddUser/AddUser';
import ToDoList from '../ToDoList/ToDoList';
import { UserContext } from '../UserContext';



const User = ({user,index}) => {

    const [isEditing,setIsEditing] = useState(false);

    const [userList,setUserList] = useContext(UserContext);
    if(isEditing){
        //setIsEditing(false);
        console.log("is editing now");
        
    return(
        <AddUser title={"Edit User"} user={user} index={index} todo={user.todo} setIsEditing={setIsEditing}/>
    )
    
    }
    return (
        <div className={"Card"}>
            Name: <h1>{user.name}</h1>
            Email: <h3>{user.email}</h3>
            <ToDoList todo={user.todo} index={index} isEditMode={isEditing} />
            <button className={"button-primary"} onClick={(e)=>{setIsEditing(true);e.preventDefault}} >Edit</button>
            
            <button className={"button-danger"} onClick={()=>setUserList(userList.filter(u=>u.email!=user.email))} >Delete</button>
        </div>
    );
}

export default User;
