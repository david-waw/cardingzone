import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner'

import FormInput from '../form-input/form-input';
import CustomButton from '../custombutton/custombutton';

import { signUpStart } from '../../redux/user/user.actions';

import { SignUpContainer, SignUpTitle } from './sign-up.styles';



const SignUp = ({ signUpStart }) => {
  const [loading, setLoading] = useState(false);
 

  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have a account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />
        <CustomButton onClick={() => {
    setLoading(true);
    setTimeout(function(){ 
       setLoading(false);
      
    }, 5000);
        }}
  type='submit'>{loading ? (
                            <div>
                            <Spinner className="spinnerr" animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>
                            </div>
                        ) : (
                          <div>
                         SIGN UP
                            </div>
                        )}</CustomButton>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);