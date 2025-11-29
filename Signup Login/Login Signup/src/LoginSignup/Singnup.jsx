import Navbar from "./Navbar";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
export default function Singnup()
{
 
   const navigate = useNavigate()

      const userDetail = {
        name:"",
        email:"",
        password:""
    }
    const [data, setData] = useState(userDetail)

    const handleInput = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setData({...data,[name]:value})

        
    }
       
    const handleSubmit = (event) =>{
        event.preventDefault();
        if(data.email == "" || data.name == "" || data.password == ""){
            alert("Please Enter Detail!")
        }else{
            const getData = JSON.parse(localStorage.getItem("user") || "[]");
            let arr = [];
            arr = [...getData];
            arr.push(data)
            const setData = localStorage.setItem("user",JSON.stringify(arr));
            alert("SignUp Successfully")
            navigate("/login")
        }
    }

  return(
    
   <>


 <center>
        <div>
    <Navbar />
        <div className='main-page'>
           <form onSubmit={handleSubmit}>
                <div className='heading'>
                    <p>Sign Up</p>
                </div>
                <div className='account'>
                <input type='text' placeholder='Name' name="name" onChange={handleInput}/>
                <input type='email' placeholder='Email' name="email" onChange={handleInput}/>
                <input type='password' placeholder='Password' name="password" onChange={handleInput}/>
                <p>  Already have an account? <Link to="/login">Login</Link></p>

                </div>
                <button>SignUp</button>
            </form>
            <div>
                  <img src="./logo.png" alt="Logo" />
            </div>
        </div>
    </div>
    </center>
   </>
  )
}