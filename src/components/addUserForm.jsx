import React from 'react'
import {useForm} from 'react-hook-form'

const AddUserForm = (props) =>  {


    const {register, handleSubmit, formState: { errors }} = useForm();
    const onSubmit = (data, e) =>{
        props.addUser(data)
        e.target.reset()
    }
    return (
        <div> 
      <h1>Formulario </h1> 
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nombre</label>
        <input type="text" name="name" placeholder="Ingresa el nombre" 
        {...register("name", {
            required: {value: true, message: 'Campo Requerido'}
        })}
        
        />
        <div>
        <div>{errors.name?.type === 'required' && "Campo Requerido"}</div>
        </div>
       <label>Nombre de usuario</label>
        <input type="text" name="username" placeholder="Ingresa el nombre de usuario" 
                {...register("username", {
                    required: {value: true, message: 'Campo Requerido'}
                })}
                />
                 <div>
                 <div>{errors.username?.type === 'required' && "Campo Requerido"}</div>
        </div>
        <button>Agregar usuario</button>
      </form>
    
      </div>
    )
  }


export default AddUserForm