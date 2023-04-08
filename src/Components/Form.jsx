import React from "react";
import { useState} from "react";

const Form = () => {
  const [show, setShow] = useState("");
  const [user, setUser] = useState({
    name: '',
    email:'', 
  })
  const handleChange = (event) =>{
    setUser({...user, [event.target.name] : event.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
    let emailValidation = emailRegex.test(user.email);

    return (emailValidation && user.name.length > 5 )
    ? 
    setShow(`Gracias ${user.name}, te contactaremos cuando antes vía mail`) 
    :
    setShow(`Por favor verifique su información`)
  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit} >
          <input type="text" placeholder="Ingrese su nombre completo" value={user.name} name="name" onChange={handleChange} />
          <input type="email" placeholder="Ingrese su email" value={user.email} name="email" onChange={handleChange} />
          <button className="botonEnviar">Send</button>
        </form>
        <p>{show}</p>
      </div>
    </>
  )



};

export default Form;

