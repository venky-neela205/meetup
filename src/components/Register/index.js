import {Component} from 'react'

import Header from '../Header'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {
    selectedTopic: topicsList[0].id,
    name: '',
    isError: false,
  }

  onChangeInput = e => {
    this.setState({name: e.target.value})
  }

  onSelectTopic = e => {
    this.setState({selectedTopic: e.target.value})
  }

  onSubmitForm = e => {
    e.preventDefault()
    const {name, selectedTopic} = this.state
    if (name !== '') {
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({isError: true})
    }
  }

  render() {
    const {selectedTopic, isError} = this.state
    return (
      <div>
        <Header />
        <img
          src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
          alt="website register"
        />
        <h1>Let us join</h1>
        <form onSubmit={this.onSubmitForm}>
          <label htmlFor="name">NAME</label>
          <input id="name" type="text" onChange={this.onChangeInput} />
          <label htmlFor="topic">TOPICS</label>
          <select
            id="topic"
            value={selectedTopic}
            onChange={this.onSelectTopic}
          >
            {topicsList.map(({id, displayText}) => (
              <option key={id} value={id}>
                {displayText}
              </option>
            ))}
          </select>
          <button type="submit">Register Now</button>
        </form>
        {isError && <p>Please enter your name</p>}
      </div>
    )
  }
}

export default Register
