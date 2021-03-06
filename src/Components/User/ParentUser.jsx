import React, { useContext, useState } from 'react';

import { UserContext } from '../UserContext';
import User from './User';
import AddUser from '../AddUser/AddUser';


const ParentUser = () => {
    const [state,dispatch] = useContext(UserContext);
    const [isEditing,setIsEditing] = useState(false);
   

    
    return (
        <main>
            <AddUser title={"Add User"} user={{name:"",email:"",todo:[]}} todo={[]} setIsEditing={setIsEditing} index={-1}/>

            {
                state.users.map((user,index)=><User user={user} index={index} key={index}/>)
            }
          


        </main>
    );
}

export default ParentUser;
