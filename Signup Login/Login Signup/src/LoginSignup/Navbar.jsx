import { Link } from "react-router-dom";
export default function Navbar()
{
  return(
   <>
         <div>
        <nav>
            <ul>
               <li>
               <a className=''> Welcome Page !</a>
                <Link to="/login">Login</Link>
                <Link to="/">Signup</Link>
               </li>

            </ul>
        </nav>
    </div>
  
   </>
  )
}