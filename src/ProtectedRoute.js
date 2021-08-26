import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component,...rest }) => {
    //onst {currentUser} = rest
  return (
    <Route {...rest} render={

        props => {
        const {currentUser} = rest
        if (currentUser) {
          return <Component {...rest} {...props}  />
        } else {
          return <Redirect to={
            {
              pathname: '/',
              state: {
                from: props.location
              }
            }
          } />
        }
      }
    } />
  )
}

export default ProtectedRoute;