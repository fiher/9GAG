/**
 * Created by PC on 11-Jul-17.
 */
import React from 'react'
import MemeActions from '../actions/MemeActions'
import MemeStore from '../stores/MemeStore'
import Imgur from '../imgur-api'
export default class CreateMeme extends React.Component {
  constructor (props) {
    super(props)
    this.state = MemeStore.getState()
    this.state = {
      meme: {
        title: '',
        image: '',
        category: ''
      },
      error: ''
    }
    this.handleMemeChange = this.handleMemeChange.bind(this)
    this.createMeme = this.createMeme.bind(this)
  }
  handleMemeChange (event) {
    const target = event.target
    const field = target.name
    const value = target.value
    const meme = this.state.meme
    meme[field] = value
    // this.setState({meme})
  }
  createMeme (event) {
    let response = Imgur.createFileLoader(this.state.meme.image)
    if (response.success) {
      console.log(response)
      // this.state.meme.image = response.data.link
    }
    MemeActions.postMeme(this.state.meme)
  }
  render () {
    return (
      <div>
        <form>
          <div className="inputField">
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              name='title'
              id='title'
              placeholder='title'
              onChange={this.handleMemeChange.bind(this)}
              value=''/>
          </div>
          <select onChange={this.handleMemeChange.bind(this)}>
            <option>NSFW</option>
            <option>Girls</option>
            <option>ThemChicks</option>
          </select>
          <input type='file' onChange={this.handleMemeChange.bind(this)}/>
          <input type='submit' onClick={this.createMeme.bind(this)} value='Create Meme'/>
        </form>
      </div>
    )
  }
}
