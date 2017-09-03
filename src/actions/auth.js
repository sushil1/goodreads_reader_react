import constants from '../constants'
import api from '../api'


export const userLoggedIn = (user) => ({
  type:constants.USER_LOGGED_IN,
  user
})


export const login = (credentials) => dispatch => api.user.login(credentials).then(user => dispatch(userLoggedIn(user)))
