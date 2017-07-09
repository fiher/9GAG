import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
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
            <Link to='/authors/all'>All Authors</Link>
          </li>
          <span className="message">{this.props.greetings}</span>
        </ul>
      </nav>
    )
  }
}
