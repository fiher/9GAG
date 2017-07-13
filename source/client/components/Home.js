import React from 'react'
import CategoryMenu from './sub-components/CategoryMenu'

export default class Home extends React.Component {
  render () {
    return (
      <div>
        <CategoryMenu/>
        <h1 className="container">Hi from Home!</h1>
      </div>
    )
  }
}
