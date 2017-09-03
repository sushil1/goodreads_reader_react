import constants from '../constants'


export default (state={}, action={}) => {

  switch(action.type){

    case constants.USER_LOGGED_IN:
    return action.user

    default:return state

  }
}
