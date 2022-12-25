import React from 'react'
import {useForm} from 'react-hook-form'
function EditUserForm(props) {
    const {register, handleSubmit, setValue, formState: { errors }} = useForm({
        defaultValues: props.currentUser
    });
// props.currentUser.name


    setTimeout(function(){
        setValue('name', props.currentUser.name )
        setValue('username', props.currentUser.username )
    }, 1);


    const onSubmit = (data, e) =>{
        e.target.reset()
        data.id = props.currentUser.id
        props.updateUser(props.currentUser.id ,data)
    }

  
    return (
        <div> 
      <h1>Formulario </h1> 
    
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nombre</label>
        <input type="text" id='name' name="name"  placeholder="Ingresa el nombre" 
        {...register("name", {
            required: {value: true, message: 'Campo Requerido'}
        })}
        
        />
        <div>
        <div>{errors.name?.type === 'required' && "Campo Requerido"}</div>
        </div>
       <label>Nombre de usuario</label>
        <input type="text" id='username' name="username" placeholder="Ingresa el nombre de usuario" 
                {...register("username", {
                    required: {value: true, message: 'Campo Requerido'}
                })}
                />
                 <div>
                 <div>{errors.username?.type === 'required' && "Campo Requerido"}</div>  
        </div>
        <div>
        <div>{errors.name?.type === 'required' && "Campo Requerido"}</div>
        </div>
        <button>Editar usuario</button>
      </form>
    
      </div>
  )
}

export default EditUserForm