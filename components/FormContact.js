import React from 'react'
import { useForm } from '@/hooks/useForm'
import estilos from '@/styles/Form.module.css'

const initalForm = {
  name:'',
  email:'',
  wsp:'',
  comments:''
}
const validationsForm = (form) =>{
  let errors = {};
  let regexName =  /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail =  /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;
  let regexWsp = /^\d{9,10}$/;

  if(!form.name.trim()){
    errors.name = 'El campo nombre es requerido'
  }else if(!regexName.test(form.name.trim())){
    errors.name= 'El campo Nombre sólo acepta letras y espacios en blanco'
  }
  if(!form.email.trim()){
    errors.email = 'El campo email es requerido'
  }else if(!regexEmail.test(form.email.trim())){
    errors.email= 'El campo email es incorrecto'
  }
  


  if(!form.comments.trim()){
    errors.comments = 'El campo comments es requerido'
  }else if(!regexComments.test(form.comments.trim())){
    errors.comments= 'El campo comentarios no debe exceder los 255 caracteres'
  }

  if(!form.comments.trim()){
    errors.comments = 'El campo comments es requerido'
  }else if(!regexComments.test(form.comments.trim())){
    errors.comments= 'El campo comentarios no debe exceder los 255 caracteres'
  }

  if(!form.wsp.trim()){
    errors.wsp = 'El campo comments es requerido'
  }else if(!regexWsp.test(form.wsp.trim())){
    errors.wsp= 'Ingresa un numero valido'
  }

  return errors
}
let styles = {
  fontWeight: 'bold',
  color: '#dc3545'
}


export const FormContact = () => {
  const  {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit
  } = useForm(initalForm, validationsForm)


  return (
    <div className='container'>
      
              <h2>Contacto</h2>
              <div className={estilos.content}>

                <form className={estilos.form} onSubmit={handleSubmit} method='POST'>
                  <label >
                    Ingresa tu nombre
                  </label>
                  <input 
                  type='text' 
                  name='name' 
                  placeholder='Escribe tu nombre'
                  onBlur={handleBlur} 
                  onChange={handleChange} 
                  value={form.name} 
                  required/>
                  {errors.name && <p style={styles}>{errors.name}</p>}

                  <label >
                    Ingresa tu correo
                  </label>
                  <input 
                  type='text' 
                  name='email' 
                  placeholder='Escribe tu correo'
                  onBlur={handleBlur} 
                  onChange={handleChange} 
                  value={form.email} 
                  required/>
                  {errors.email && <p style={styles}>{errors.email}</p>}

                  <label >
                    Ingresa tu numero
                  </label>
                  <input 
                  type='text' 
                  name='wsp' 
                  placeholder='Escribe tu correo'
                  onBlur={handleBlur} 
                  onChange={handleChange} 
                  value={form.wsp} 
                  required/>
                  {errors.wsp && <p style={styles}>{errors.wsp}</p>}

                  <label >
                    Ingresa tu mensaje
                  </label>
                  <textarea name='comments' cols='50' rows='5'
                  placeholder='Escribe tu comentario'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={form.comments}
                  required></textarea>

                  <button className={estilos.btn_send} type='submit'>Enviar</button>
                </form>
                {loading && <p>cargando</p>}
                {response && <p>enviado</p>}
                <div className={estilos.data}>
                  <h4>Dirección</h4>
                  <p>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
                  <h4>Teléfono</h4>
                  <p>(671) 555-0110</p>
                  <h4>Correo</h4>
                  <p>dolores.chambers@example.com</p>
                </div>
              </div>
          </div>
  )
}
