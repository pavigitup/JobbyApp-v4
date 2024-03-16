import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'
import './index.css'
import Header from '../Header'

class Jobs extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="jobs-con">
          <div className="search-con">
            <label htmlFor="searchInput">o</label>
            <input
              id="searchInput"
              type="text"
              placeholder="Search"
              className="input-box"
            />
            <button
              type="button"
              aria-label="Search"
              className="search-btn"
              data-testid="searchButton"
            >
              <BsSearch className="search-icon" />
            </button>
          </div>

          <div className="pro-con">
            <img src="" alt="" className="profile-logo" />
            <h1>Rahul Attuluri</h1>
            <p>Lead Software Developer and Al-Ml expert</p>
          </div>
          <hr className="line" />
          <div>
            <h1>Type of Employment</h1>
            <input type="checkbox" className=""
          </div>
        </div>
      </div>
    )
  }
}

export default Jobs
