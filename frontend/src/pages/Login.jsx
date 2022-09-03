import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext';

import Header from './Header';

function Login() {
  let {loginUser, user} = useContext(AuthContext);

  return (
    <div>
        <form onSubmit={loginUser}>
            <input type="text" name="username" placeholder='Username'></input>
            <input type="password" name="password" placeholder='Password'></input>
            <input type="submit"></input>
        </form>
    </div>
  )

}

export default Login;