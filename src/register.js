import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import './login.css'
import {BrowserRouter, Route, Switch ,NavLink} from 'react-router-dom';
export default function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  let registerInfo = {
    username:'',
    email:'',
    first_name:'',
    last_name:'',
    password:''
}

function handleInput(e) {
    registerInfo = {...registerInfo,[e.target.name]:e.target.value} 
  console.log(registerInfo)   
}
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function login(event) {
    event.preventDefault();
    axios.defaults.xsrfCookieName = 'csrftoken'
    axios.defaults.xsrfHeaderName = 'X-CSRFToken'
    axios.post('http://127.0.0.1:8000/CalAPI/api/register/', registerInfo)
        .then(response => {
            alert("Registered Successfully")
            history.push("/")
        })
        .catch(err=>alert(err));
  }

  return (
    <div className="Login">
        <form onSubmit={login} method="post">
            <div class="container">
                <label for="uname"><b>Username</b></label>
                <input onChange={handleInput} type="text" placeholder="Enter Username" name="username" required />

                <label for="uname"><b>Email</b></label>
                <input onChange={handleInput} type="text" placeholder="Enter Email" name="email" required />

                <label for="uname"><b>First Name</b></label>
                <input onChange={handleInput} type="text" placeholder="Enter first name" name="first_name" required />

                <label for="uname"><b>Last Name</b></label>
                <input onChange={handleInput} type="text" placeholder="Enter last name" name="last_name" required />

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />

                <label for="psw"><b>Confirm Password</b></label>
                <input onChange={handleInput} type="password" placeholder="Enter Password" name="password" required />
                    
                <button type="submit">Register</button>
                <label>
                    <NavLink  to="/" class="btn btn-primary" >
                        Login
                    </NavLink>
                </label>
            </div>

            
        </form>
    </div>
  );
}