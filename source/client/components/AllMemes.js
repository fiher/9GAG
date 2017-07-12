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

  componentWillUnmount () {
    MemeStore.unlisten(this.onChange)
  }

  render () {
    let memes = []
    this.state.memes.forEach((meme, i) => {
      memes.push(
        <div className='meme' key={i+1}>
          <div className='row'>
            <div className='title'>
              <span>{meme.title}</span>
            </div>
            <div className='row'>
              <div className='date'>
                <span>{meme.createdOn}</span>
              </div>
            </div>
          </div>
          <img src={meme.memeUrl}/>
        </div>
      )
    })

    return (
      <div>
        {memes}
      </div>
    )
  }
}
