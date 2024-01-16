import { helpHttp } from "@/helpers/helpHttp";
import { useState } from "react"
export const useForm = (initalForm, validateForm) => {

    const [form, setForm] = useState(initalForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const handleChange = (e)=>{
      const {name, value} = e.target
      setForm({
        ...form,
        [name]:value
      })
    }
    
    const handleBlur = (e)=>{
      handleChange(e)
      setErrors(validateForm(form));
    }

    const handleSubmit = (e)=>{
      e.preventDefault();
      setErrors(validateForm(form));

      if(Object.keys(errors).length === 0){
        alert('Enviando form')
        setLoading(true)
        helpHttp()
        .post("https://formsubmit.co/ajax/jaso.samaritano5@gmail.com",{
          body: form,
          headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
          }
        })
        .then(res =>{
          setLoading(false);
          setResponse(true)
          setForm(initalForm)
          setTimeout(()=> setResponse(false), 5000)
        })
      }else{
        return
      }
    }

    return {
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit
    }
}