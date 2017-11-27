import React, {Component} from 'react'
import {connect } from 'react-redux'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import LoginForm from './forms/LoginForm'
import {login} from '../../actions/auth'



class LoginPage extends Component{

  submit = (data) => this.props.login(data).then(() => this.props.history.push('/dashboard'))


  render(){
    return(
      <div>
        <Link to='/'>Home</Link>
        <h1>Login page</h1>

        <LoginForm submit={this.submit}/>

        <Link to="/forgot_password">Forgot Password</Link>

      </div>
    )
  }
}

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
}


export default connect(null, {login})(LoginPage)
