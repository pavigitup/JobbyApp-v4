import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import './index.css'

const Header = () => {
  const onClickLogout = () => {
    console.log('log out')
  }

  return (
    <div className="header-con">
      <div className="nav-right">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website-logo"
          className="header-jobby-logo"
        />
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
        </ul>
        <button
          type="button"
          onClick={onClickLogout}
          aria-label="Logout"
          className="logout-btn"
        >
          <FiLogOut className="logo" />
        </button>
      </div>
    </div>
  )
}

export default Header
