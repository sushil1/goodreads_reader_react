import constants from '../constants'


export default (state={}, action={}) => {

  switch(action.type){

    case constants.USER_LOGGED_IN:
    return action.user

    case constants.USER_LOGGED_OUT:
    return {}

    default:return state

  }
}
