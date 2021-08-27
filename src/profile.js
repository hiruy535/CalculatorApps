import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import './login.css'
import {BrowserRouter, Route, Switch ,NavLink} from 'react-router-dom';
export default function Profile(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  console.log(props)  
  let registerInfo = {
    username:'',
    email:'',
    first_name:'',
    last_name:'',
    password:''
}

function handleInput(e) {
    registerInfo = {...registerInfo,[e.target.name]:e.target.value}    
}
  

  function updateProfile(event) {
    event.preventDefault();
    const id = props.currentUser && props.currentUser.id
    axios.defaults.xsrfCookieName = 'csrftoken'
    axios.defaults.xsrfHeaderName = 'X-CSRFToken'
    axios.put('http://127.0.0.1:8000/CalAPI/api/change_profile/'+id+'/', registerInfo)
        .then(response => {
            alert("Updated Successfully")
            props.setCurrentUser({
                username:response.data.username,
                email:response.data.email,
                first_name:response.data.first_name,
                last_name:response.data.last_name,
            })
            history.push("/calculator")
        })
        .catch(err=>alert(err));
  }

  return (
    <div className="Login">
        <form onSubmit={updateProfile} method="post">
            <div class="container">
                <label for="uname"><b>Username</b></label>
                <input onChange={handleInput} type="text" placeholder="Enter Username" name="username" defaultValue={props.currentUser !== null && props.currentUser.username} required />

                <label for="uname"><b>Email</b></label>
                <input onChange={handleInput} type="text" placeholder="Enter Email" name="email" defaultValue={props.currentUser !== null && props.currentUser.email} required />

                <label for="uname"><b>First Name</b></label>
                <input onChange={handleInput} type="text" placeholder="Enter first name" name="first_name" defaultValue={props.currentUser !== null && props.currentUser.first_name} required />

                <label for="uname"><b>Last Name</b></label>
                <input onChange={handleInput} type="text" placeholder="Enter last name" name="last_name" defaultValue={props.currentUser !== null && props.currentUser.last_name} required />

                <label for="psw"><b>Old Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />

                <label for="psw"><b>New Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />

                <label for="psw"><b>Confirm Password</b></label>
                <input onChange={handleInput} type="password" placeholder="Enter Password" name="password" required />
                    
                <button type="submit">Update Profile</button>
                
            </div>

            
        </form>
    </div>
  );
}
