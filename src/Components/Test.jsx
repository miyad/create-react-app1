import React, { useContext } from 'react';

import {UserContext} from './UserContext';

const sad = () =>{
    console.log("hello world");
    for(let i = 0;i < 3;i++){
        console.log("is it you ");
    }
}

const Test = () => {
    const [userList,setUserList] = useContext(UserContext);
    console.log("i am executed");
   // console.log(userList);
    return (
       <div >
          { 
              userList.map((user,index)=><li key={index}>{user.name}</li> )
          }
    

          <button onClick={()=>setUserList([...userList,{name:"masum",email:"asdfas",todo:[]}])}>
              change
          </button>
       </div>
    );
}

export default Test;
