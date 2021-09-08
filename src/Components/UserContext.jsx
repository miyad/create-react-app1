import React, { createContext, useState } from 'react';

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
     

    return (
        <UserContext.Provider value={[userList,setUserList]}>
            {props.children}
        </UserContext.Provider>
    );
}


