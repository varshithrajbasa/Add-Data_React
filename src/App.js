import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
  let data =[];
  if(localStorage.getItem('users')){
    data = JSON.parse(localStorage.getItem('users'));
  }
  const [usersList, setUsersList] = useState(data);
  const addUserHandler = (users) => {
    setUsersList([users,...usersList]);
    localStorage.setItem('users',JSON.stringify([users,...usersList]));
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
