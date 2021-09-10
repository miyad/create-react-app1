import React, { useContext, useState } from 'react';
import { UserContext } from '../UserContext';
import './toDoList.css';
const ToDoList = ({todo,index,isEditMode,setIsEditing}) => {

    const [state,dispatch,setIsExec,setIsAdd] = useContext(UserContext);
    const [task,setTask] = useState("");
        const addTodo = ()=>{
                setIsAdd(true);
                if(task.trim(' ')!==""){
                    dispatch({type:"addTask",data:{index,task}})
                    setTask("");    
                }
        }

    const removeItem = (itemIndex)=>{
            setIsExec(true);
            dispatch({type:"removeTask",data:{index,itemIndex}});
        }
    if(isEditMode){
        setIsEditing(false);
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