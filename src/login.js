import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import './login.css'
import {BrowserRouter, Route, Switch ,NavLink} from 'react-router-dom';
export default function Login({currentUser,setCurrentUser}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  let loginInfo = {
      username:'',
      password:''
  }

  function handleInput(e) {
    loginInfo = {...loginInfo,[e.target.name]:e.target.value} 
    console.log(loginInfo)   
}
  function login(event) {
    event.preventDefault();
    axios.defaults.xsrfCookieName = 'csrftoken'
    axios.defaults.xsrfHeaderName = 'X-CSRFToken'
    axios.post('http://127.0.0.1:8000/CalAPI/api/login/', loginInfo)
        .then(response => {
            console.log(response.data.data)
            setCurrentUser(response.data.data)
            history.push("/calculator")
        })
        .catch(err=>alert(err));
  }

  return (
    <div className="Login">
        <form onSubmit={login} method="post">
            <div class="container">
                <label for="uname"><b>Username</b></label>
                <input onChange={handleInput} type="text" placeholder="Enter Username" name="username" required />

                <label for="psw"><b>Password</b></label>
                <input onChange={handleInput} type="password" placeholder="Enter Password" name="password" required />
                    
                <button type="submit">Login</button>
                <label>
                <NavLink  to="/register" class="btn btn-primary" >
                      Register
                </NavLink>
                </label>
            </div>

            
        </form>
    </div>
  );
}