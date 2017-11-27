import React from 'react'
import { connect } from 'react-redux'
import {Route} from 'react-router-dom'
import PropTypes from 'prop-types'
import UserRoute from './components/routes/UserRoute'
import GuestRoute from './components/routes/GuestRoute'
import HomePage from './components/pages/HomePage'
import LoginPage from './components/pages/LoginPage'
import SignupPage from './components/pages/SignupPage'
import Dashboard from './components/pages/DashboardPage'
import ConfirmationPage from './components/pages/ConfirmationPage'
import ForgotPasswordPage from './components/pages/ForgotPasswordPage'
import ResetPasswordPage from './components/pages/ResetPasswordPage'
import NewBookPage from './components/pages/NewBookPage'
import TopNavigation from './components/navigation/TopNavigation'


const App = ({location, isAuthenticated}) => (
  <div className='ui container'>
    { isAuthenticated && <TopNavigation /> }
    <Route location={location} path='/' exact component={HomePage}/>
    <Route location={location} path='/confirmation/:token' exact component={ConfirmationPage}/>
    <GuestRoute location={location} path='/login' exact component={LoginPage}/>
    <GuestRoute location={location} path='/signup' exact component={SignupPage}/>
    <GuestRoute location={location} path='/reset_password/:token' exact component={ResetPasswordPage}/>
    <GuestRoute location={location} path='/forgot_password' exact component={ForgotPasswordPage}/>
    <UserRoute location={location} path='/dashboard' exact component={Dashboard} />
    <UserRoute location={location} path='/books/new' exact component={NewBookPage} />
  </div>
)

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired
}

function stateToProps(state){
  return{
    isAuthenticated: !!state.user.email
  }
}

export default connect(stateToProps)(App)
