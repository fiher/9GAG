import React, { Component } from 'react'

export default class AllMemes extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: props.title,
      author: props.author,
      link: props.memeUrl,
      createdOn: props.createdOn,
      comments: props.comments,
      upVotedUsers: props.upVotes,
      downVotedUsers: props.downVotes,
      upVotesCount: props.upVotesCount,
      downVotesCount: props.downVotesCount
    }
  }

  getUpvotesCount () {
    let upvotes = this.state.upVotesCount - this.state.downVotesCount
    return upvotes > 0 ? upvotes : 0
  }

  render () {
    return (
      <div>
        <div>
          {this.state.title}
        </div>
        <div>
          {this.state.createdOn}
        </div>
        <div>
          <img src={this.state.link}/>
        </div>
        <div>
          {this.getUpvotesCount()}
        </div>
        Hi from MemeInfo!
      </div>
    )
  }
}
