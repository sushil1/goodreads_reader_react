import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import ConfirmEmailMessage from './messages/ConfirmEmailMessage'


const DashboardPage = ({isConfirmed}) => (
    <div>
    {!isConfirmed && <ConfirmEmailMessage />}
    </div>
  )

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired
}

function stateToProps(state){
  return {
    isConfirmed: !!state.user.confirmed
  }
}

export default connect(stateToProps, null)(DashboardPage)
