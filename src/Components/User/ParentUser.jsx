import React, { useContext, useState } from 'react';

import { UserContext } from '../UserContext';
import User from './User';
import AddUser from '../AddUser/AddUser';
import AddUser2 from '../AddUser/AddUser2';

const ParentUser = () => {
    const [state,dispatch] = useContext(UserContext);
    const [isEditing,setIsEditing] = useState(false);
    console.log("in parent ");
   // console.log(state.users);
   // const {users} = state;
    
    return (
        <main>
            <AddUser title={"Add User"} user={{name:"",email:"",todo:[]}} todo={[]} setIsEditing={setIsEditing} index={-1}/>

            {
                state.users.map((user,index)=><User user={user} index={index} key={index}/>)
            }
            <AddUser2 title="Reducer TEst" index = {-1} user={{name:"",email:"",todo:[]}} />


        </main>
    );
}

export default ParentUser;
