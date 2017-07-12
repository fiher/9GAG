/**
 * Created by PC on 11-Jul-17.
 */
import React from 'react'
import CreateMemeStore from '../stores/CreateMemeStore'
import CreateMemeActions from '../actions/CreateMemeActions'
import ReactFileReader from 'react-file-reader'
import { createFileLoader } from '../imgur-api'
export default class CreateMeme extends React.Component {
  constructor (props) {
    super(props)
    this.state = CreateMemeStore.getState()

    this.onChange = this.onChange.bind(this)
    this.handleMemeChange = this.handleMemeChange.bind(this)
    this.createMeme = this.createMeme.bind(this)
  }
  handleMemeChange (event) {
  }
  componentDidMount () {
    CreateMemeStore.listen(this.onChange)
  }
  onChange (state) {
    this.setState(state)
  }
  createMeme (event) {
    event.preventDefault()
    console.log('made it bitches')
    if(this.state.category === ''){
      this.state.category = 'NSFW'
    }
    CreateMemeActions.postMeme(this.state)
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
            <option>NSFW</option>
            <option>Girls</option>
            <option>ThemChicks</option>
          </select>
          <ReactFileReader base64= {true} handleFiles={CreateMemeActions.handleImageChange}>
            <button className='btn'>Upload</button>
          </ReactFileReader>
          <input type='submit' onClick={this.createMeme.bind(this)} value='Create Meme'/>
        </form>
      </div>
    )
  }
}
