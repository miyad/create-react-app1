import React, { useContext, useState } from 'react';
import { UserContext } from '../UserContext';
import './toDoList.css';
const ToDoList = ({todo,index,isEditMode,setIsEditing}) => {

    const [userList,setUserList] = useContext(UserContext);
    const [task,setTask] = useState("");
        const addTodo = ()=>{
            if(task.trim(' ')!==""){
            userList[index].todo.push(task);
            setTask("");
            setUserList([...userList]);
            }
           // console.log("add task");
        }


    const removeItem = (itemIndex)=>{
        userList[index].todo.splice(itemIndex,1);
        setUserList([...userList]);
    }
    if(isEditMode){
        setIsEditing(false);
    return (
        <div>
        <center><h4>Todo List</h4></center>
            <hr />
        <div className="list">
            
            <ol>
            {todo.map((item,index)=><li key={index}><input type={"text"} defaultValue={item}/></li>)}
            <li>
                <input type="text" placeholder={"Enter a task"}></input>
            </li>
            </ol>
        </div>
        </div>
    );  
    }
    else
    return (
        <div>
        <center><h4>Todo List</h4></center>
            <hr />
        <div className="list">
            
            <ol>
            {todo.map((item,index)=><li key={index}><div className={"item"}>{item}<button className={"button-remove"} onClick={()=>removeItem(index)} >remove</button></div></li>)}
            <li>
                <div className="textField">
                    <input type="text" value={task} placeholder={"Enter a task"} onChange={e=>setTask(e.target.value)}></input> <button className={"button"} onClick={()=>addTodo()}>Add</button>
                </div>
            </li>
            </ol>
        </div>
       
        </div>
    );
}

export default ToDoList;