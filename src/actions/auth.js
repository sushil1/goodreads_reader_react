import constants from '../constants'
import api from '../api'


export const userLoggedIn = (user) => ({
  type:constants.USER_LOGGED_IN,
  user
})

export const userLoggedOut = () => ({
  type:constants.USER_LOGGED_OUT
})


export const login = (credentials) => dispatch => api.user.login(credentials).then(user => {
  localStorage.bookwormJWT = user.token
  dispatch(userLoggedIn(user))
})

export const logout = () => dispatch => {
  localStorage.removeItem('bookwormJWT')
  dispatch(userLoggedOut())
}

export const confirm = (token) => (dispatch) => api.user.confirm(token).then(user => {
  localStorage.bookwormJWT = user.token
  dispatch(userLoggedIn(user))
})
