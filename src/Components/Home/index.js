import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="home-con">
    <Header />
    <div>
      <h1 className="heading">Find The Job That Fits Your Life</h1>
      <p className="para">
        Millions of people are searching for jobs, salary information, company
        reviews. Find the job that fits your abilities and potential.
      </p>
      <div className="btn-con">
        <Link to="/jobs">
          <button className="button" type="button">
            Find Jobs
          </button>
        </Link>
      </div>
    </div>
  </div>
)

export default Home
