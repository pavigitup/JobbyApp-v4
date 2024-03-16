import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div className="header-con">
      <div className="nav-right">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="header-jobby-logo"
          />
        </Link>
      </div>
      <div className="nav-left-large-container">
        <ul className="nav-con">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/jobs">Jobs</Link>
          </li>
        </ul>
        <button type="button" onClick={onClickLogout} aria-label="Logout">
          Logout
        </button>
      </div>
      <div className="nav-left">
        <ul className="nav-con">
          <li>
            <Link to="/">
              <AiFillHome className="logo" />
            </Link>
          </li>
          <li>
            <Link to="/jobs">
              <BsFillBriefcaseFill className="logo" />
            </Link>
          </li>
          <li>
            <button
              type="button"
              onClick={onClickLogout}
              aria-label="Logout"
              className="logout-btn"
            >
              <FiLogOut className="logo" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default withRouter(Header)
