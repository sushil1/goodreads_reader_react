import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import LoginForm from './forms/LoginForm'


class LoginPage extends Component{

  submit = (data) => {
    console.log(data)
  }

  render(){
    return(
      <div>
        <Link to='/'>Home</Link>
        <h1>Login page</h1>

        <LoginForm submit={this.submit}/>

      </div>
    )
  }
}
export default LoginPage
