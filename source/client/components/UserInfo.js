import React from 'react'

import UserStore from '../stores/UserStore'

export default class UserProfile extends React.Component {
  constructor (props) {
    super(props)

    this.state = UserStore.getState()

    this.onChange = this.onChange.bind(this)
  }

  onChange (state) {
    this.setState(state)
  }

  componentDidMount () {
    UserStore.listen(this.onChange)
  }

  componentWillUnmount () {
    UserStore.unlisten(this.onChange)
  }

  render () {
    return (
      <div className="container">
        Hi from UserProfileInfo
      </div>
    )
  }
}