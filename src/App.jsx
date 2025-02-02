import React from 'react'
import SocialLogin from './components/Sociallogin';
import InputField from  './components/InputField';

const App = () => {
  return (
    <div className="login-container">
      <h2 className="form-title">Log in with</h2>
       <SocialLogin />

      <p className="separator"><span>or</span></p>
       
       <InputField/>

      <p className="signup-text">Don&apos;t have an account? <a href="">Signup now</a></p>
    </div>
  );
};

export default App;