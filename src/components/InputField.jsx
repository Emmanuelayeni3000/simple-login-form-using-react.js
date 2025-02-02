import { SlEnvolope } from "react-icons/sl";
import { SlLock } from "react-icons/sl";

const InputField = () => {
  return (
    <form action="" className="login-form">
        <div className="input-wrapper">
          <input type="email" placeholder='Enter your Email' className="input-field" required />
          <SlEnvolope className='icon inline-block'/>
        </div>

        <div className="input-wrapper">
          <input type="password" placeholder='Enter your Password' className="input-field" required />
          <SlLock className='icon inline-block'/>
        </div>
        <a href="" className="forgot-pass-link"> Forgot password? </a>
        <button type='submit' className="login-button">Log in </button>
      </form>
  );
};

export default InputField;