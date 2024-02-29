import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [formData , setFormData] = useState({
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
           const Login ={
             username:formData.username,
             password:formData.password
           }
         
           fetch(`http://localhost:8080/register/check?username=${formData.username}&password=${formData.password}`)
           .then((response)=>{
            if(!response.ok){
              throw new Error("Failed to fetch data");
            }
            return response.json();
         })
         .then((data) =>{

          if(data == !formData.username && data == !formData.password){
            return  alert("Enter valid details");
          }else {
              console.log("Data",data)
              setFormData(data    )
          }
         })
         .catch((error) =>{
           console.error("Error during fetch", error);
         });

      }

    }


  return (
    <div>
        <div className="container bg-secondary p-5">
        <form onSubmit={handleSubmit}>
        <label className="color:white p-3">UserName</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange}></input><br></br>
             
            <label className="p-4">Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange}></input><br></br>

            <button type="button" className="btn btn-success mx-4 px-3">Login</button>

            <Link to="/register" className="color:red;">Create New Account</Link>
        </form>   
        <div className="container">
           {Array.isArray(formData)&& formData.map((formData)=>(
            <div className="card" key={formData.id}>
                <h1>Welcome{formData.firstname}{formData.lastname}</h1>
                </div>
            ))}
            
    </div>
    </div>
       </div> 
        )
        
}
        


export default Login
