import React from 'react'

export default class MemeInfo extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      meme: {}
    }
  }

  render () {
    return (
      <div>
        <div>
          {this.state.meme.title}
        </div>
        <div>
          {this.state.meme.createdOn}
        </div>
        <div>
          <img src={this.state.meme.link}/>
        </div>
        <div>
          {/*{this.getUpvotesCount()}*/}
        </div>
        Hi from MemeInfo!
      </div>
    )
  }
}
