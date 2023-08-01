import {Link} from 'react-router-dom'

import Header from '../Header'

const Home = () => (
  <div>
    <Header />
    <h1>Welcome to meetup</h1>
    <p>Please register for the topic</p>
    <Link to="/register">
      <button type="button">Register</button>
    </Link>
    <img
      src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
      alt="meetup"
    />
  </div>
)

export default Home
