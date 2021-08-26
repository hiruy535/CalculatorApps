import Calculator from './Calculator'
import History from './History'
import Register from './register'
import Login from './login'
import {useState} from 'react'
import Profile from './profile'
import axios from 'axios'
import {BrowserRouter, Route, Switch ,NavLink,Redirect} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import MyRouter from './router'
import ProtectedRoute from './ProtectedRoute'

function App() {
  const [currentUser,setCurrentUser] = useState()
  let history = useHistory();
  console.log(history)
  const logout = (e)=>{
      axios.post("http://127.0.0.1:8000/CalAPI/api/logout/")
      .then(res=>{
        setCurrentUser({})
        //history.go("/")
        ()
      })
      .catch(err=>{
        
      })
  } 

  return (
    <BrowserRouter>
      
      <h1 style={{marginTop:'15px',marginBottom:'15px',textAlign:'center'}}>Calculator App</h1>

      <MyRouter currentUser={currentUser} setCurrentUser={setCurrentUser} />

      <Switch>
        <Route path='/' exact  >
          <Login currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </Route>

        <ProtectedRoute path='/calculator' exact  component={Calculator} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
          
        
        <ProtectedRoute path='/history' exact component={History} currentUser={currentUser} setCurrentUser={setCurrentUser} />
       
        <Route path='/register' exact  >
          <Register />
        </Route> 

        <ProtectedRoute path='/profile' exact component={Profile}  currentUser={currentUser} setCurrentUser={setCurrentUser} />
          
     </Switch>
    </BrowserRouter>
  );
}

export default App;
