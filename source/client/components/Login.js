import React from 'react'
import TextInput from 'source/client/components/helper-components/TextInput'

export default class Login extends React.Component {
  render () {
    return (
      <div className="wrapper">
        <form className="loginForm">
          <TextInput
            name='username'
            placeholder='username'
            value=''
            onChange='update'
            error=''/>
          <input type='password' placeholder='Password'/>
          <input type='submit' value='Login'/>
        </form>
      </div>
    )
  }
}
