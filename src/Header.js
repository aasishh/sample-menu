import React from 'react';
import AuthNav from './components/auth-nav';
import logo from './assets/logo.png';

const Header = () => {
  return (
    <div className="header-container">
      <div className="left-header-btn">
        <button type="button" className="button-52">
          Contact Us
        </button>
      </div>
      <div >
        <img alt="logo" src={logo} className="logo-section"/>
      </div>
      <div className="right-header-btns">
        <AuthNav />
      </div>
    </div>
  );
};

/* <div className="login">
          <button
            type="button"
            className="button-52"
            onClick={() => loginWithRedirect()}
          >
            Login
          </button>
        </div>
        <div className="signup">
          <button
            type="button"
            className="button-52"
            onClick={() =>
              loginWithRedirect({
                screen_hint: 'signup',
              })
            }
          >
            Sign Up
          </button>
        </div> */

export default Header;
