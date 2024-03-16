import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="home-con">
        <Header />
        <div>
          <h1 className="heading">Find The Job That Fits Your Life</h1>
          <p className="para">
            Millions of people are searching for jobs, salary information,
            company reviews. Find the job that fits your abilities and
            potential.
          </p>
          <div className="btn-con">
            <button className="button" type="button">
              Find Jobs
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
