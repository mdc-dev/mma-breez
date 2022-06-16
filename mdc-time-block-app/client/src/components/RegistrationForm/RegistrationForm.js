import React, { Component } from 'react';
import './RegistrationForm.scss'

class RegistrationForm extends Component {
  state = {
    email: '',
    password: '',
    passwordConfirm: '',
    first: '',
    last: '',

  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    const { email, password, passwordConfirm, first, last } = this.state;

    this.props.onSubmit(email, password, passwordConfirm, first, last);
    event.preventDefault();
  }

  render() {
    const { email, password, passwordConfirm, first, last} = this.state;

    return (
      <div className='LoginForm'>
        {/* <div className='card'> */}
          <div className='card-body'>
            <form onSubmit={this.handleSubmit}>
              <div className='input-group mb-3'>
                <div className="input-group-prepend">
                  <span className="input-group-text">Email</span>
                </div>
                <input
                  className='form-control'
                  id='email'
                  type='email'
                  name='email'
                  placeholder='email@provider.com'
                  unique= 'true'
                  value={email}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className='input-group mb-3'>
                <div className="input-group-prepend">
                  <span className="input-group-text">Key</span>
                </div>
                <input
                  className='form-control'
                  id='password'
                  type='password'
                  name='password'
                  placeholder='password'
                  value={password}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className='input-group mb-3'>
                <div className="input-group-prepend">
                  <span className="input-group-text">Key</span>
                </div>
                <input
                  className='form-control'
                  id='password-confirm'
                  type='password'
                  name='passwordConfirm'
                  placeholder='password (again)'
                  value={passwordConfirm}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className='input-group mb-3'>
                <div className="input-group-prepend">
                  <span className="input-group-text">Person</span>
                </div>
                <input
                  className='form-control'
                  id='first'
                  type='first'
                  name='first'
                  placeholder='First name'
                  value={first}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className='input-group mb-3'>
                <div className="input-group-prepend">
                  <span className="input-group-text">Person</span>
                </div>
                <input
                  className='form-control'
                  id='last'
                  type='last'
                  name='last'
                  placeholder='Last name'
                  value={last}
                  onChange={this.handleInputChange}
                />
              </div>






              <button className='register-button' type='submit'>Register Now!</button>
            </form>
          </div>
        {/* </div> */}
      </div>
    )
  }
}

export default RegistrationForm;
