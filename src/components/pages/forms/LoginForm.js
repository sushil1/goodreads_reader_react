import React, {Component} from 'react'
import {Form, Button, Message, Segment} from 'semantic-ui-react'
import Validator from 'validator'
import InlineError from '../messages/InlineError'
import PropTypes from 'prop-types'

class LoginForm extends Component{

  state = {
    data: {
      email:'',
      password:''
    },
    loading:false,
    errors:{}
  }

  onChange = e => this.setState({ data: {...this.state.data, [e.target.name]: e.target.value}})

  onSubmit = () => {
    const errors = this.validate(this.state.data)
    this.setState({errors})

    if(Object.keys(errors).length === 0){
      this.setState({ loading:true})
      this.props
        .submit(this.state.data)
        .catch(err => this.setState({errors:err.response.data.errors, loading:false})
      )
    }
  }

  validate = ({email, password}) => {
    const errors = {}

    if(!Validator.isEmail(email)){
      errors.email = 'Invalid Email'
    }
    if(!password){
      errors.password = 'Cant be blank'
    }

    return errors
  }

  render(){
    const {data, errors, loading} = this.state
    return(
      <Segment style={{ maxWidth: 450, height:'100%' }}>
      <Form onSubmit={this.onSubmit} loading={loading}>
        {errors.global && <Message negative>
          <Message.Header>Something went wrong</Message.Header>
          <p>{errors.global}</p>
          </Message>}
        <Form.Field error={!!errors.email}>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            id='email'
            name='email' placeholder='user@example.com'
            value={data.email}
            onChange={this.onChange}
            />
            {errors.email && <InlineError text={errors.email}/>}
        </Form.Field>
        <Form.Field error={!!errors.password}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password' placeholder='Enter your password'
            value={data.password}
            onChange={this.onChange}
            />
            {errors.password && <InlineError text={errors.password}/>}
        </Form.Field>
        <Button>Login</Button>
      </Form>
      </Segment>
    )
  }
}


LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
}

export default LoginForm
