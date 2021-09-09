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
  const reducer = (state,action) => {
        const {data,type} = action;
        const {users} = state
        console.log("func exec");

        switch(type){
            case "addUser":
                return {...state,users:[...users,data]};
            case "delete":
                 return {users:users.filter(user=>user.email!=data)}
            case "addTask":
                console.log("in add , data = ",data);
                state.users[data.index].todo.push(data.task);
                return state;
               
                //return {users:users};
                // users[data.index].todo.push(data.task);
            case "removeTask":
                console.log("in remv, data = ",data);
               // return {...state};
            //     if(isExect){
               //  state.users[data.index].todo.splice(data.itemIndex,1);
            //     setIsExec(false);
            // }
            //return state;
                let newState = {users:[]};
                for(let i in state.users)newState.users.push(state.users[i]);
                newState.users[data.index].todo.splice(data.index,1);
                return newState;
                return {...state};
                
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
        <UserContext.Provider value={[state,dispatch]}>
            {props.children}
        </UserContext.Provider>
    );
}

