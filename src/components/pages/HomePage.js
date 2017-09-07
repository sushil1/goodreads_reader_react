import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../../actions/auth'

const HomePage = ({ isAuthenticated, logout }) => (
  <div>
    <h1>This is home page</h1>
    {isAuthenticated ? <button onClick={() => logout() }>Logout</button> : <div>
    <Link to='/login'>Login</Link> or
    <Link to='/signup'>Signup</Link>
    </div>}
  </div>
)

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
}

const stateToProps = (state) => {
  return{
    isAuthenticated: !!state.user.token
  }
}

export default connect(stateToProps, {logout})(HomePage)
