import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
/*
  onFormSubmit = (event) => {
    //code should check if login matches one in database and show appropriate page depending on user
  }
*/

  const [Username, setUser] = useState('') //stores First name entered
  const [Password, setPassword] = useState('') //stores Last name entered

  const handleUsernameChange = (event) => {
    setUser(event.target.value)
    console.log(Username)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
    console.log(Password)
  }

  return (
    <div>
      <h1>Login</h1>
      <form /*onSubmit={onFormSubmit} */>
          <input type="text" id="Username" placeholder='Username' value={Username} onChange={handleUsernameChange}/>
          <br />
          <input type="password" id="Password" placeholder='Password' value={Password} onChange={handlePasswordChange}/>
          <br />
          <input type="submit" value="login" />
      </form>
      <Link to="RegPage"><button>Register</button></Link>
    </div>
  );
}

export default LoginPage