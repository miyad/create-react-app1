import React, { createContext, useReducer, useState } from 'react';

export const UserContext = createContext(); 

export const UserContextProvider = props => {

    const [userList, setUserList] = useState(
        [
            {
                name: "Miyad",
                email: "shahibur.rahman@gmail.com",
                todo:
                [
                    "React Tutorial",
                    "Exercise",
                    "Shopping"
                ]
            }
        ]
    );

   const [isExect,setIsExec] = useState(true);
   const [isAdd,setIsAdd] = useState(true);
   
  const reducer = (state,action) => {
        const {data,type} = action;
        const {users} = state
        console.log("func exec");
        
        switch(type){
            case "addUser":
                
                return {...state,users:[...users,data]};
              
                return state;
            case "delete":
                 return {users:users.filter(user=>user.email!=data)}
            case "edit":
                state[data.index] = data.info;
                return {...state};
            case "addTask":
                console.log("in add , data = ",data);
                if(isAdd){
                    setIsAdd(false);
                state.users[data.index].todo.push(data.task);
            }
                return state;
          
            case "removeTask":
                    //const df = true;
                    if(isExect){
                    state.users[data.index].todo.splice(data.intemIndex,1);
                    //setIsExec(false);
                        setIsExec(false);
                        setIsAdd(false);
                }
                
                return {users:state.users};
                
            default:
            return state;
        }
        
    }
    

    const initValue =
    {
            users:
            [
                {
                    name:"Shahibur",
                    email:"msr@dsinoovators.com",
                    todo:
                    [
                        "Drawing Stucture",
                        "Changing Materials",
                        "Starting Devops"
                    ]
                },
                {
                    name:"Sakib",
                    email:"sakib.io@dsinoovators.com",
                    todo:
                    [
                        "Dot Net Core",
                        "Problem Solving",
                        "Analyzing Games"
                    ]
                }
            ]
    }
    const [state,dispatch] = useReducer(reducer,initValue);
    console.log("see type = ",typeof state);
    console.log(state);
    let id = 2;

    return (
        <UserContext.Provider value={[state,dispatch,setIsExec,setIsAdd]}>
            {props.children}
        </UserContext.Provider>
    );
}

