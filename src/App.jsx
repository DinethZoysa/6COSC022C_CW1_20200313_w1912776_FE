
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './SignUp'
import Login from './Login'
import Home from './Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home/>}> </Route>
      <Route path="/" element={<Signup/>}> </Route>
      <Route path="/login" element={<Login/>}> </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
