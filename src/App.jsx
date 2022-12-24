import React, {useState} from 'react';
import UserTable from './components/userTable'
import {v4 as uuidv4} from 'uuid'
import AddUserForm from './components/addUserForm';
function App() {

  const usersData = [
    {id:  uuidv4(), name: "Gonzalo", username: "GonzaAhre"},
    {id:  uuidv4(), name: "Carlos", username: "CarlosPro"},
  ]
  
  //State
const [users, setUsers] = useState(usersData);

//Agregar Usuarios
const addUser = (user) =>{
  user.id = uuidv4()
  setUsers([
    ...users,
    user
  ])
}
  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
        <AddUserForm addUser={addUser}></AddUserForm>
          
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users}></UserTable>
        </div>
      </div>
    </div>
  );
}

export default App;
