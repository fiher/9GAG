import alt from '../alt'
import UserActions from '../actions/UserActions'

class UserStore {
  constructor () {
    this.bindActions(UserActions)

    this.loggedInUserId = ''
    this.username = ''
    this.roles = []

    this.addUserParams = this.addUserParams.bind(this)
  }

  onRegisterUserSuccess (user) {
    this.addUserParams(user)
  }

  onLoginUserSuccess (user) {
    this.addUserParams(user)
  }

  onLoginUserFail () {
    console.log('Failed login attempt')
  }

  onLogoutUserSuccess () {
    this.loggedInUserId = ''
    this.username = ''
    this.roles = ''

    localStorage.clear()
  }

  addUserParams (user) {
    this.loggedInUserId = user._id
    this.username = user.username
    this.roles = user.roles

    localStorage.setItem('userId', JSON.stringify(this.loggedInUserId))
    localStorage.setItem('username', JSON.stringify(this.username))
  }
}

export default alt.createStore(UserStore)