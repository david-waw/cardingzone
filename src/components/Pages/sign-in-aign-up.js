import React from 'react';

import SignIn from '../../components/signup/signup.js';
import SignUp from '../../components/signin/signin.js';

import './sign-in-sign-up.scss';

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
      
        <SignIn />
        <SignUp/> 
  </div>
);

export default SignInAndSignUpPage;