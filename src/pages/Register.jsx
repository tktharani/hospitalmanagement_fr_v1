import React, {useState} from 'react';
import { Link } from 'react-router-dom';



const Register = () => {
    const [formData , setFormData] = useState({
        firstname: "",
        lastname: "",
        username:"",
        password:""
      })
    
    
       const handleChange =(event) =>{
           const {name,value}=event.target; 
           setFormData({...formData,[name]:value})
           console.log(name,value);
       }
       const handleSubmit =(event) =>{
           event.preventDefault();
           console.log(formData);
           if(FormData.name==' '){
             console.log("not value")
           }
           else{
           const Register ={
             firstname:formData.firstname,
             lastname:formData.lastname,
             username:formData.username,
             password:formData.password
           }
         
           fetch("http://localhost:8080/registers/add",{
             headers:{
               "Content-Type":"application/json"
             },
             method: 'POST',
             body: JSON.stringify(Register)
           }) .then((response)=>{
             console.log("Data received" +response);
           })
           }
       }

  return (
    <div>
      <div className="container bg-secondary p-5">
       <h2 className='text-uppercase text-danger'>Register form</h2>
         <form onSubmit={handleSubmit}>
            <label className='text-white p-2'>FirstName:</label>
            <input type="text" name="firstname" value={formData.firstname} onChange={handleChange}></input><br></br>
            <label  className='text-white p-2'>Lastname</label>
            <input type="text" name="lastname" value={formData.lastname} onChange={handleChange}></input><br></br>
            <label className='text-white p-2'>UserName</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange}></input><br></br>
             
            <label className='text-white p-2'>Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange}></input><br></br>

            <button  className="btn btn-success m-2">Register</button>

        </form>
      </div>
    </div>
  )
}

export default Register
