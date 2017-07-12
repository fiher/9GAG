import React from 'react'
import { Link } from 'react-router'

import NavbarUserMenu from './sub-components/NavbarUserMenu'

export default class Navbar extends React.Component {
  render () {
    let navbarUserMenu = <NavbarUserMenu userData={this.props.userData}/>

    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <Link to='/'>Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/memes/all'>All Memes</Link>
            </li>
            <li className="nav-item">
              <Link to='/users/all'>All Authors</Link>
            </li>
            <li className="nav-item">
              <Link to='/createMeme'>CreateMeme</Link>
            </li>
          </ul>
          {navbarUserMenu}
        </div>
      </nav>
    )
  }
}
