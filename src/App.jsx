import React, { useState } from 'react';
import UserTable from './components/userTable'
import { v4 as uuidv4 } from 'uuid'
import AddUserForm from './components/addUserForm';
import EditUserForm from './components/editUserForm';
function App() {

  const usersData = [
    { id: uuidv4(), name: "Gonzalo", username: "GonzaAhre" },
    { id: uuidv4(), name: "Carlos", username: "CarlosPro" },
  ]

  //State
  const [users, setUsers] = useState(usersData);

  //Agregar Usuarios
  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])

  }

  //Eliminar Usuario
  const deleteUser = (id) => {
   
    setUsers(users.filter(user => user.id !== id))
  }

  //Editar Usuario

  const [editing, setEditing] = useState(false)

  const [currentUser, setCurrentUser] = useState({
    id: null, name: '',username: ''
  })

  const editRow = (user) => {
   
    setCurrentUser({
      id: user.id, name: user.name, username: user.username
    })
        setEditing(true)
      
  }

  const updateUser = (id, updateUser) =>{
    setEditing(false)
    setUsers(
      users.map(user => user.id === id ? updateUser : user)


    )
  }

  return (
    <div className="container">
      <h1>CRUD App con Hooks</h1>
      <div className="flex-large">



      </div>
      <div className="flex-row">

        <div className="flex-large">
          
        {
            editing ? (
              
              <div> <h2>Editar usuario</h2>
              <EditUserForm currentUser={currentUser} updateUser={updateUser} editing={editing}></EditUserForm>
            </div>
            
            ) : (
              <div>
              <h2>Agregar usuario</h2>
              <AddUserForm addUser={addUser}></AddUserForm>

            </div>
            )
          }
      
        </div>
        <div className="flex-large">
          <h2>Usuarios existentes</h2>
          <UserTable users={users} 
          deleteUser={deleteUser} 
          editRow = {editRow}
          ></UserTable>
        </div>
      </div>
    </div>
  );
}

export default App;
