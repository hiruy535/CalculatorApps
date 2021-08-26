import axios from 'axios'
import {BrowserRouter, Route, Switch ,NavLink,Redirect,Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";

export default function MyRouter({currentUser,setCurrentUser}) {
  let history = useHistory();
  console.log(history)
  const logout = (e)=>{
      axios.post("http://127.0.0.1:8000/CalAPI/api/logout/")
      .then(res=>{
        setCurrentUser({})
        history.go("/")
      })
      .catch(err=>{
        
      })
  } 

  return (
    <>
      {currentUser && <ul>
        <li><NavLink  to="/calculator" class="btn btn-primary" >
                      Home
              </NavLink></li>
        <li>
              <NavLink  to="/history" class="btn btn-primary" >
              History
              </NavLink></li>
        <li>
        <NavLink  to="/profile" class="btn btn-primary" >
          Profile
          </NavLink>
         </li>
         <li>
         <Link to='/' onClick={logout}>Logout</Link>
         </li>
      </ul>}

    </>
  );
}

 


