import React, { useContext, useState } from 'react';
import { UserContext } from '../UserContext';
import './toDoList.css';
const ToDoList = ({todo,index,isEditMode,setIsEditing}) => {

    const [state,dispatch] = useContext(UserContext);
    const [task,setTask] = useState("");
        const addTodo = ()=>{
            if(task.trim(' ')!==""){
            dispatch({type:"addTask",data:{index,task}})
            //userList[index].todo.push(task);
            setTask("");
            //setUserList([...userList]);
            }
           // console.log("add task");
        }


    const removeItem = (itemIndex)=>{
       // userList[index].todo.splice(itemIndex,1);
        //setUserList([...userList]);
        console.log(" index of item = ",itemIndex);
        console.log("before invoke remvoeItem");
        dispatch({type:"removeTask",data:{index,itemIndex}});
    }
    if(isEditMode){
        setIsEditing(false);
        console.log("editing mode");
    return (
        <div>
       
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
