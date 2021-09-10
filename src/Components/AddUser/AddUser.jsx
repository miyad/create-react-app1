import React, { useContext, useState } from 'react';
import { UserContext } from '../UserContext';
import './addUser.css';

const validateEmail = (email)=>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const AddUser = ({title,todo,user,isEditing,setIsEditing,index}) => {

    const [state,dispatch] = useContext(UserContext);
    const {users:userList} = state;
    const [info,setInfo] = useState(user);
    const [errMessage, setErrMessage] = useState("");

    const handleSubmit = (e)=>{      
        e.preventDefault();
        const {name,email} = info;
        if(name.trim(' ') === ""|| email.trim(' ') === ""){
            setErrMessage("Name or Email cannot be empty!");
        }
        else if(!validateEmail(email.trim(' '))){
            setErrMessage("Please Enter a valid Email! ");
        }
        else{
            setErrMessage("");
            if(index>=0){
                setIsEditing(false);
                info.todo = userList[index].todo.filter(e=>e.trim(' ').length>0);
                dispatch({type:"edit",data:{index,info}});
            }
            else{
              dispatch({type:"addUser",data:{name,email,todo:[]}});
              setInfo({name:"",email:"",todo:[]});
            }
        }
    }

    return (
        <div className={"Card"}>
            <center><h2>{title}</h2></center>
            <form onSubmit={(e)=>handleSubmit(e)}>
               <b>Name:   </b><input value={info.name}  type="text" placeholder={"username"}  onChange={(e)=>setInfo({name:e.target.value,email:info.email,todo:[]})}/> <br />
                 <b>Email:  </b> <input value={info.email}  type="email" placeholder={"email"}  onChange={e=>setInfo({name:info.name,email:e.target.value,todo:[]})}/>
                 <br /> <br /><div className="error">{errMessage}</div> 
            <center><h4>Todo List</h4></center>
            <hr />
        <div className="list">  
            <ol>
                {todo.map((item,itemIndex)=><li key={itemIndex}><input type={"text"} onChange={(e)=>userList[index].todo[itemIndex]=e.target.value} defaultValue={item}/></li>)}
            </ol>
        </div>
            <button className={"button-success"} onClick={e=>handleSubmit(e)}> save </button>            
            </form>
        </div>
    );
}

export default AddUser;