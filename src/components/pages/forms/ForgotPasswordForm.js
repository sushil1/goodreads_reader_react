import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Form, Button, Message} from 'semantic-ui-react'
import isEmail from 'validator/lib/isEmail'


class ForgotPasswordForm extends Component{

  state = {
    data: {
      email:''
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
    if(!isEmail(data.email)) errors.email = 'Invalid Email'
    return errors
  }


  render(){

    const { errors, data, loading } = this.state

    return(
      <Form onSubmit={this.onSubmit} loading={loading}>
        {!!errors.global && <Message negative>{errors.global}</Message>}
        <Form.Field error={!!errors.email}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id="email"
            name="email"
            placeholder="Enter your email"
            value={data.email}
            onChange={this.onChange}
          />
        </Form.Field>
        <Button primary>Reset Password</Button>
      </Form >
    )
  }

}

ForgotPasswordForm.propTypes = {
  submit: PropTypes.func.isRequired
}


export default ForgotPasswordForm
