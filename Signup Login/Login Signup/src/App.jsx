import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Singnup from './LoginSignup/Singnup.jsx'
import Login from './LoginSignup/Login.jsx'
import Home from './LoginSignup/Home.jsx';
function App() {
  

  return (
    <>
   <div>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Singnup/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Home' element={<Home/>} />

      </Routes>
    </BrowserRouter> 
  </div> 
    </>
  )
}

export default App
