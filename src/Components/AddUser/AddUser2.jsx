import React, { useContext, useState } from 'react';
import { UserContext } from '../UserContext';

import './addUser.css';

const validateEmail = (email)=>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}




const AddUser2 = ({title,user,index}) => {

    const [userList,dispatch] = useContext(UserContext);
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [errMessage,setErrMessage] = useState("");


    const handleSubmit = (e)=>{
        e.preventDefault();
        
        
        if(name.trim(' ') === ""|| email.trim(' ') === ""){
            setErrMessage("Name or Email cannot be empty!");
        }
        else if(!validateEmail(email.trim(' '))){
            setErrMessage("Please Enter a valid Email! ");
        }
        else{
            setErrMessage("");
            if(index >= 0){

            }
            else{
               // dispatch({type:"3",data:"dsa"});
               console.log("iadsd here");
        
                dispatch({type:"3",data:{name,email,todo:[]}});
            }

        }

    }


    return (
        <div className={"Card"}>
            <center><h2>{title}</h2></center>
        
            <form onSubmit={(e)=>handleSubmit(e)}>
               <b>Name:   </b><input value={name}  type="text" placeholder={"username"}  onChange={(e)=>setName(e.target.value)}/> <br />
                 <b>Email:  </b> <input value={email}  type="email" placeholder={"email"}  onChange={e=>setEmail(e.target.value)}/>

                 <br /> <br /><div className="error">{errMessage}</div> 
            
            {/* <ToDoList todo={todo}  setIsEditing={setIsEditing}/> */}
            <center><h4>Todo List</h4></center>
            <hr />
        <div className="list">
            
            <ol>
            {user.todo.map((item,itemIndex)=><li key={itemIndex}><input type={"text"} onChange={(e)=>{}} defaultValue={item}/></li>)}
           
            </ol>
        </div>

            <button className={"button-success"} onClick={e=>handleSubmit(e)}> save </button>            
            </form>
        </div>
    );
}



export default AddUser2;
