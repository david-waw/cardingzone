import React, { useState } from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner'

import FormInput from '../form-input/form-input';
import CustomButton from '../custombutton/custombutton';

import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/user.actions';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './sign-in.styles';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [loading, setLoading] = useState(false);
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    emailSignInStart(email, password);
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          handleChange={handleChange}
          value={email}
          label='email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          label='password'
          required
        />
        <ButtonsBarContainer>
          <CustomButton onClick={() => {
    setLoading(true);
    setTimeout(function(){ 
       setLoading(false);
      
    }, 5000);
        }} type='submit'> {loading ? (
                            <div>
                            <Spinner className="spinnerr" animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>
                            </div>
                        ) : (
                          <div>
                         SIGN IN
                            </div>
                        )}</CustomButton>
        
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);