import { createSelector } from 'reselect'
import constants from '../constants'

export default (state={}, action={}) => {
  switch (action.type){

    case constants.BOOKS_FETCHED:
    case constants.BOOKS_CREATED:
      return { ... state, ...action.data.entities.books }

    default:
    return state
  }
}

//SELECTORS

export const booksSelector = state => state.books

export const allBooksSelector = createSelector(
  booksSelector,
  booksHash => Object.values(booksHash)
)
