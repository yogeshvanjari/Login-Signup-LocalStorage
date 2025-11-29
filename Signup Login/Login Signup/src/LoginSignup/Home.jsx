import Navbar from "./Navbar";
import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Home()
{
    const navigate = useNavigate();

    const logout = () =>{
        localStorage.removeItem("user");
        navigate("/")
    }

  return(
   <>
 <center>
        <div>
    <Navbar/>
        <div className='home'>
            <h2>Wellcome Home Page</h2>
            <div>
                 <button onClick={logout}>Logout</button>
            </div>
        </div>
    </div>

    </center>
   </>
  )
}