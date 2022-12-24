import React from 'react'

const addUserForm = (props) =>  {

    return (
        <div> 
      <h1>Formulario</h1>
      <form action="">
        <label>Nombre</label>
        <input type="text" name="name" value="" placeholder="Ingresa el nombre"/>
       <label>Nombre de usuario</label>
        <input type="text" name="username" value="" placeholder="Ingresa el nombre de usuario" />
      </form>
      <button>Agregar usuario</button>
      </div>
    )
  }


export default addUserForm