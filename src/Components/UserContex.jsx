import React, { createContext, useState } from 'react';

export const UserContex = createContext(); 


const UserContexProvider = props => {

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
        <UserContex.Provider>
            {props.children}
        </UserContex.Provider>
    );
}


