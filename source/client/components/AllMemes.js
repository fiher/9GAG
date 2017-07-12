import React from 'react'

import MemeActions from '../actions/MemeActions'
import MemeStore from '../stores/MemeStore'

export default class AllMemes extends React.Component {
  constructor (props) {
    super(props)
    this.state = MemeStore.getState()

    this.onChange = this.onChange.bind(this)
  }
  onChange (state) {
    this.setState(state)
  }

  componentDidMount () {
    MemeStore.listen(this.onChange)

    MemeActions.getAllMemes()
  }
  render () {
    let memes = []
    for (let i = 0; i < this.state.memes.length; i++) {
      memes.push(
        <div className='meme'>
        <div className='row'>
          <div className='title'>
            <span>{this.state.memes[i].title}</span>
          </div>
          <div className='row'>
            <div className='date'>
              <span>{this.state.memes[i].createdOn}</span>
            </div>
          </div>
        </div>
          <img src={this.state.memes[i].memeUrl}/>
      </div>
      )
    }
    return (
      <div>
        {memes}
        <h1 className="container">Hi from AllMemes!</h1>
      </div>
    )
  }
}
