import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import AddUser from './Components/AddUser/AddUser';
import Test from './Components/Test';
import ParentUser from './Components/User/ParentUser';
import User from './Components/User/User';
import {UserContextProvider} from './Components/UserContext';
import {UserContext} from './Components/UserContext';

function App() {

 // const [userList,setUserList] = useContext(UserContext);
  return (
        
        <UserContextProvider>
            <center><h1>User Todo List</h1> </center>
            
                {/* {userList.map((user,index)=><User user={user} key={index}/>)} */}

                <ParentUser/>
                
                
              
            
        </UserContextProvider>
  );
}

export default App;
