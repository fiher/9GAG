import React from 'react'

import MemeActions from '../actions/MemeActions'
import MemeStore from '../stores/MemeStore'

import MemeCard from './sub-components/MemeCard'

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
    console.log(this.state.memes)
    let memes = this.state.memes.map((meme, i) => {
      console.log(meme)
      return (
        <MemeCard key={meme._id}
                  meme={meme}
                  index={i}/>
      )
    })
    return (
      <div className="container">
        <h3 className="text-center">Welcome to
          <strong> Secret Imgur</strong>
        </h3>
        <div className="list-group">
          {memes}
        </div>
      </div>
    )
  }
}
