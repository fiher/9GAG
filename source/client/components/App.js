import React, { Component } from 'react'

import { Routes } from '../Routes'
import Navbar from './Navbar'
import Footer from './Footer'

export default class App extends Component {
  render () {
    return (
      <div className='app'>
        <Navbar greetings='Hello to you too!'/>
        <Routes />
        <Footer />
      </div>
    )
  }
}
