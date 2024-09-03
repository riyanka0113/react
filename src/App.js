import React, {useState, Fragment} from 'react';

import AddUser from './component/User/AddUser';
import UserList from './component/User/UserList';

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList, {id:Math.random().toString(), name: uName, age: uAge}];
    });
  };

  return (
    //<> or 
    <Fragment> 
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={userList}/>
    </Fragment> 
    //or </>
  );
}

export default App;
