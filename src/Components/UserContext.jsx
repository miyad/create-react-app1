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
        switch(type){
            case "addUser":
                
                return {...state,users:[...users,data]};
              
                return state;
            case "delete":
                 return {users:users.filter(user=>user.email!=data)}
            case "edit":
                state.users[data.index] = data.info;
                console.log("here data = ",data);
                return {...state};
            case "addTask":
                
                if(isAdd){
                    setIsAdd(false);
                state.users[data.index].todo.push(data.task);
            }
                return state;
          
            case "removeTask":
                    
                if(isExect){
                    state.users[data.index].todo.splice(data.intemIndex,1);
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
    return (
        <UserContext.Provider value={[state,dispatch,setIsExec,setIsAdd]}>
            {props.children}
        </UserContext.Provider>
    );
}

