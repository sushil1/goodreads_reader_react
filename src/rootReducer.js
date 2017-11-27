import {combineReducers} from 'redux'

import user from './reducers/userReducer'
import books from './reducers/booksReducer'

export default combineReducers({
  user,
  books
})
