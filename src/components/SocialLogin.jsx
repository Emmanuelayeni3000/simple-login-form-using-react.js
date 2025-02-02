import googleicon from '../assets/google.svg'
import appleicon from '../assets/apple.svg'

const SocialLogin = () => {
  return (
    <div className="social-login">
            <button className="social-button bg-gray-200 border border-bg-gray-400 rounded-sm">
              <img src={googleicon} alt="" className="social-icon" />
              Google
            </button>
            <button className="social-button bg-gray-200 border border-bg-gray-400 rounded-sm">
              <img src={appleicon} alt="" className="social-icon" />
              Apple
            </button>
    </div>
  )
}

export default SocialLogin