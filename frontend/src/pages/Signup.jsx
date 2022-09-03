import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext';

function Login() {
  let {signUp, user} = useContext(AuthContext);

  return (
    <div>
        <form onSubmit={signUp}>
            <input type="text" name="username" placeholder='Username'></input>
            <input type="password" name="password" placeholder='Password'></input>
            <input type="password" name="confirm_password" placeholder='Confirm Password'></input>
            <input type="submit"></input>
        </form>
    </div>
  )

}

export default Login;