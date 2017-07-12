import React from 'react'

import MemeImage from './MemeImage'
import MemeInfo from './MemeInfo'
import MemePanelsToggle from './MemePanelsToggle'
import MemeLikePanel from './MemeLikePanel'
import MemeCommentsPanel from './MemeCommentsPanel'

export default class MovieCard extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      showLikesPanel: false,
      showCommentsPanel: false
    }

    this.toggleCommentsPanel = this.toggleCommentsPanel.bind(this)
    this.toggleLikesPanel = this.toggleLikesPanel.bind(this)
  }

  toggleCommentsPanel () {
    this.setState(prevState => ({
      showCommentsPanel: !prevState.showCommentsPanel,
      showLikesPanel: false
    }))
  }

  toggleLikesPanel () {
    this.setState(prevState => ({
      showLikesPanel: !prevState.showLikesPanel,
      showCommentsPanel: false
    }))
  }

  render () {
    return (
      <div className='animated fadeIn'>
        <div className='media meme'>
          <span className='position pull-left'>
            {this.props.index + 1}
          </span>
          <MemeImage memeUrl={this.props.meme.memeUrl}/>
          <MemeInfo meme={this.props.meme}/>
          <MemePanelsToggle
            toggleCommentsPanel={this.toggleCommentsPanel}
            toggleLikesPanel={this.toggleLikesPanel}
            showCommentsPanel={this.state.showCommentsPanel}
            showLikesPanel={this.state.showLikesPanel}
            memeId={this.props.meme._id} />
        </div>
        {this.state.showLikesPanel ?
          <MemeLikePanel memeId={this.props.meme._id} /> : null}
        {this.state.showCommentsPanel ?
          <MemeCommentsPanel memeId={this.props.meme._id} /> : null}
        <div id='clear'/>
      </div>
    )
  }
}