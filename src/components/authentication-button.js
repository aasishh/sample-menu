import React from 'react';

import LoginButton from './login-button';
import SignupButton from './signup-button';
import LogoutButton from './logout-button';

import { useAuth0 } from '@auth0/auth0-react';

const AuthenticationButton = () => {
  const { isAuthenticated, user } = useAuth0();
  //const { name } = user;

  return isAuthenticated ? (
    <div className="right-header-btns">
      <div className="user-name">name</div>
      <LogoutButton />
    </div>
  ) : (
    <div className="right-header-btns">
      <div className="auth-area"><LoginButton /></div>
      <SignupButton />
    </div>
  );
};

export default AuthenticationButton;
