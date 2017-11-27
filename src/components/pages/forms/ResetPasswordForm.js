import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Form, Button, Message} from 'semantic-ui-react'


class ResetPasswordForm extends Component{

  state = {
    data: {
      token: this.props.token,
      password:'',
      passwordConfirmation:''
    },
    loading: false,
    errors: {}
  }

  onChange = e =>
  this.setState({
    ...this.state,
    data: { ...this.state.data, [e.target.name]: e.target.value }
  })

  onSubmit = e => {
    e.preventDefault()
    const errors = {}
    this.setState({ errors })

    if(Object.keys(errors).length === 0){
      this.setState({ loading:true })
      this.props.submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading:false })
        )
    }
  }

  validate = data => {
    const errors = {}
    if(!data.password) errors.password = 'Password cant be empty'
    if(data.password !== data.passwordConfirmation) errors.password = 'Password must match'
    return errors
  }


  render(){

    const { errors, data, loading } = this.state

    return(
      <Form onSubmit={this.onSubmit} loading={loading}>
        {!!errors.global && <Message negative>{errors.global}</Message>}
        <Form.Field error={!!errors.password}>
          <label htmlFor='password'>New Password</label>
          <input
            type='password'
            id="password"
            name="password"
            placeholder="Enter new password"
            value={data.password}
            onChange={this.onChange}
          />
        </Form.Field>

        <Form.Field error={!!errors.passwordConfirmation}>
          <label htmlFor='passwordConfirmation'>Confirm Password</label>
          <input
            type='password'
            id="passwordConfirmation"
            name="passwordConfirmation"
            placeholder="Confirm your new password"
            value={data.passwordConfirmation}
            onChange={this.onChange}
          />
        </Form.Field>

        <Button primary>Reset Password</Button>
      </Form >
    )
  }

}

ResetPasswordForm.propTypes = {
  submit: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired
}


export default ResetPasswordForm
