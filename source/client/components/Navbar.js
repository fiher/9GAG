import React from 'react'
import { Link } from 'react-router'

export default class Navbar extends React.Component {
  render () {
    return (
      <nav className="navbar">
        <ul className="nav">
          <li className="nav-item">
            <Link to='/'>Home</Link>
          </li>
          <li className="nav-item">
            <Link to='/memes/all'>All Memes</Link>
          </li>
          <li className="nav-item">
            <Link to='/users/all'>All Authors</Link>
          </li>
          <span className="message">{this.props.greetings}</span>
        </ul>
      </nav>
    )
  }
}
