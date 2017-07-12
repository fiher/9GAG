
import React from 'react'
import CategoryActions from '../actions/CategoryActions'
import CategoryStore from '../stores/CategoryStore'
export default class CreateCategory extends React.Component {
  constructor (props) {
    super(props)
    this.state = CategoryStore.getState()
    this.onChange = this.onChange.bind(this)
    this.createCategory = this.createCategory.bind(this)
  }
  componentDidMount () {
    CategoryStore.listen(this.onChange)
  }
  componentWillUnmount () {
    CategoryStore.unlisten(this.onChange)
  }
  onChange (state) {
    this.setState(state)
  }
  createCategory (event) {
    event.preventDefault()

    CategoryActions.addCategory(this.state.name)
  }
  render () {
    return (
      <div>
        <div className='has-error'>
          {this.state.error}
        </div>
        <div className='has-success'>
          {this.state.success}
        </div>
        <form>
          <div className="inputField">
            <label htmlFor='title'>Name</label>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='name'
              onChange={CategoryActions.handleNameChange}
              value={this.state.name}/>
          </div>
          <input type='submit' onClick={this.createCategory.bind(this)} value='Create Category'/>
        </form>
      </div>
    )
  }
}
