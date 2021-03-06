import React from 'react'
import CreateMemeStore from '../stores/CreateMemeStore'
import CreateMemeActions from '../actions/CreateMemeActions'
import ReactFileReader from 'react-file-reader'
import CategoryActions from '../actions/CategoryActions'
import CategoryStore from '../stores/CategoryStore'

export default class CreateMeme extends React.Component {
  constructor (props) {
    super(props)
    this.state = CreateMemeStore.getState()
    this.categories = CategoryStore.getState()
    this.onChange = this.onChange.bind(this)
    this.handleMemeChange = this.handleMemeChange.bind(this)
    this.createMeme = this.createMeme.bind(this)
  }

  handleMemeChange (event) {
  }

  componentDidMount () {
    CreateMemeStore.listen(this.onChange)
    CategoryActions.getAllCategories()
    CategoryActions.getAllCategories()
    this.categories = CategoryStore.getState()
  }

  componentWillUnmount () {
    CreateMemeStore.unlisten(this.onChange)
  }

  onChange (state) {
    this.setState(state)
  }

  createMeme (event) {
    event.preventDefault()
    console.log('made it bitches')
    if (this.state.category === '') {
      this.state.category = 'NSFW'
    }
    this.state.author = localStorage.userID
    CreateMemeActions.postMeme(this.state)
  }

  render () {
    console.log(this.categories)
    let categories = this.categories.categories.map((category, i) => (
        <option key={i + 1}>
          {category.name}
        </option>
      )
    )
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
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              name='title'
              id='title'
              placeholder='title'
              onChange={CreateMemeActions.handleTitleChange}
              value={this.state.title}/>
          </div>
          <select onChange={CreateMemeActions.handleCategoryChange}>
            {categories}
          </select>
          <ReactFileReader base64={true} handleFiles={CreateMemeActions.handleImageChange}>
            <button className='btn'>Upload</button>
          </ReactFileReader>
          <input type='submit' onClick={this.createMeme.bind(this)} value='Create Meme'/>
        </form>
      </div>
    )
  }
}
