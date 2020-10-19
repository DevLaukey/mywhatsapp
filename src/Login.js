import React from 'react';
import './Login.css'
import { Button } from '@material-ui/core';
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer" ;
import { useStateValue} from "./StateProvider"
import { SET_USER } from 'react'

function Login() {
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider).then((result) =>
        {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch((error) => alert(error.message));
    };
    return (
        <div className="login">
          <div className="login_container">
              <img src="https://raw.githubusercontent.com/DevLaukey/Victor-2.0/master/laukey%20.ico" alt="Logo"/>
              <div className="login_text">
                  <h1>Sign In</h1>
              </div>
              <Button onClick={signIn}>
                  Sign In With Google
              </Button>
          </div>
        </div>
    )
}

export default Login
