import React, { useContext, useState } from 'react';
import ToDoList from '../ToDoList/ToDoList';
import { UserContext } from '../UserContext';

import './addUser.css';



const validateEmail = (email)=>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



const AddUser = ({title,todo,user,setIsEditing,index}) => {

    const [userList,setUserlist] = useContext(UserContext);

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("sumbit triggered!");
        console.log(info);
        const {name,email} = info;

        if(name.trim(' ') === ""|| email.trim(' ') === ""){
            setErrMessage("Name or Email cannot be empty!");
        }
        else if(!validateEmail(email.trim(' '))){
            setErrMessage("Please Enter a valid Email! ");
        }
        else{
            setIsEditing(false);
            if(index>=0){
                info.todo = userList[index].todo;
                userList[index] = info;
                setUserlist([...userList]);
            }
            else
            setUserlist([info,...userList]);
        }
    }


    const [info,setInfo] = useState({name:"",email:"",todo:[]});
    const [errMessage, setErrMessage] = useState("");
    return (
        <div className={"Card"}>
            <center><h2>{title}</h2></center>
        
            <form onSubmit={(e)=>handleSubmit(e)}>
               <b>Name:   </b><input defaultValue={user.name} type="text" placeholder={"username"} onChange={(e)=>setInfo({name:e.target.value,email:info.email,todo:[]})}/> <br />
                 <b>Email:  </b> <input defaultValue={user.email}  type="email" placeholder={"email"}  onChange={e=>setInfo({name:info.name,email:e.target.value,todo:[]})}/>

                 <br /> <br /><div className="error">{errMessage}</div> 
            
            <ToDoList todo={todo}/>
            <button className={"button-success"} onClick={e=>handleSubmit(e)}> save </button>            
            </form>
        </div>
    );
}

export default AddUser;
