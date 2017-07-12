import alt from '../alt'

import FormActions from '../actions/FormActions'
import UserActions from '../actions/UserActions'

class FormStore {
  constructor () {
    this.bindActions(FormActions)

    this.bindListeners({
      onRegisterUserFail: UserActions.registerUserFail,
      onRegisterUserSuccess: UserActions.registerUserSuccess,
      onLoginUserSuccess: UserActions.loginUserSuccess,
      onLoginUserFail: UserActions.loginUserFail
    })

    this.username = ''
    this.password = ''
    this.confirmedPassword = ''
    this.firstName = ''
    this.lastName = ''
    this.age = ''
    this.gender = ''
    this.formSubmitState = ''
    this.usernameValidationState = ''
    this.passwordValidationState = ''
    this.message = ''
  }

  onRegisterUserSuccess () {
    console.log('FormStore register success')

    this.username = ''
    this.password = ''
    this.confirmedPassword = ''
    this.firstName = ''
    this.lastName = ''
    this.age = ''
    this.gender = ''

    this.formSubmitState = 'has-success'
    this.usernameValidationState = ''
    this.passwordValidationState = ''
    this.message = 'User register successful'
  }

  onRegisterUserFail (err) {
    console.log('FormStore register error', err)

    // Mongo code for duplicate key error
    if (err.code === 11000) {
      this.formSubmitState = 'has-error'
      this.message = 'Username already in use.'
      return
    }

    this.formSubmitState = 'has-error'
    this.message = err.errmsg
  }

  onLoginUserSuccess () {
    this.formSubmitState = 'has-success'
    this.usernameValidationState = ''
    this.passwordValidationState = ''
    this.message = 'User login successful'
  }

  onLoginUserFail (err) {
    this.formSubmitState = 'has-error'
    this.usernameValidationState = 'has-error'
    this.passwordValidationState = 'has-error'
    this.message = err.message
  }

  onUsernameValidationFail () {
    this.usernameValidationState = 'has-error'
    this.passwordValidationState = ''
    this.formSubmitState = ''
    this.message = 'Enter username'
  }

  onPasswordValidationFail () {
    this.usernameValidationState = ''
    this.passwordValidationState = 'has-error'
    this.formSubmitState = ''
    this.message = 'Invalid password, or password do not match'
  }

  onUnauthorizedAccessAttempt () {
    this.formSubmitState = 'has-error'
    this.usernameValidationState = ''
    this.passwordValidationState = ''
    this.message = 'Please login'
  }

  onHandleUsernameChange (e) {
    this.username = e.target.value
  }

  onHandlePasswordChange (e) {
    this.password = e.target.value
  }

  onHandleConfirmedPasswordChange (e) {
    this.confirmedPassword = e.target.value
  }

  onHandleFirstNameChange (e) {
    this.firstName = e.target.value
  }

  onHandleLastNameChange (e) {
    this.lastName = e.target.value
  }

  onHandleAgeChange (e) {
    this.age = e.target.value
  }

  onHandleGenderChange (e) {
    this.gender = e.target.value
  }
}

export default alt.createStore(FormStore)