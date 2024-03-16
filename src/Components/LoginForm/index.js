import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  render() {
    return (
      <div className="bg-con">
        <div className="jobby-con">
          <div className="jobby-app-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
              className="website-logo"
            />
          </div>
          <div className="details-con">
            <label htmlFor="username">USERNAME</label>
            <input placeholder="Username" className="user-input" />
          </div>
          <div className="details-con">
            <label htmlFor="password">PASSWORD</label>
            <input placeholder="Password" className="user-input" />
          </div>
          <button type="button">Login</button>
        </div>
      </div>
    )
  }
}

export default LoginForm
