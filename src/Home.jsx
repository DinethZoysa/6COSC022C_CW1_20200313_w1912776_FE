import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Home() {
  
  const [name, setUserName] = useState("")
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/api/getAllUsers")
    .then(result => {
      if (result.data.authenticatedUser.isAuthenticated) {
        console.log(result.data.authenticatedUser);
        setUserName(result.data.authenticatedUser.username)
      } else {
        navigate("/login");
      }
    })
    .catch(err => {
      alert("Session expired, please login again");
      navigate("/login");
      console.log(err)
    })
  })

  return (
    <h2>Welcome {name} to w1912776 20200313 Dineth's 6COSC022W CW1 </h2>
  )
}

export default Home;