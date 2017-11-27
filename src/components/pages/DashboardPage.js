import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import ConfirmEmailMessage from './messages/ConfirmEmailMessage'
import {allBooksSelector} from '../../reducers/booksReducer'
import AddBooksCta from '../ctas/AddBooksCta'
import {fetchBooks} from '../../actions/books'

class DashboardPage extends Component{

  componentDidMount = () => this.onInit(this.props)


  onInit = props => props.fetchBooks()


  render(){
    const {isConfirmed, books} = this.props

    return(
      <div>
      {!isConfirmed && <ConfirmEmailMessage />}

      { books.length === 0 ? <AddBooksCta /> : <p>You have books!</p> }
      </div>
    )
  }
}


DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
  fetchBooks: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired).isRequired
}

function stateToProps(state){
  return {
    isConfirmed: !!state.user.confirmed,
    books: allBooksSelector(state)
  }
}

export default connect(stateToProps, {fetchBooks})(DashboardPage)
