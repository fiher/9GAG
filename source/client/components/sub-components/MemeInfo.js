import React from 'react'
import { Link } from 'react-router'

export default class MemeInfo extends React.Component {
  render () {
    let createdDate = this.props.meme.createdOn.split("T")[0]

    return (
      <div className="media-body">
        <h4 className="media-heading">
          <Link to={`/memes/${this.props.meme._id}`}>
            {this.props.meme.title}
          </Link>
        </h4>
        <small>Category: {this.props.meme.category}</small>
        <div className='meme-date'>
          <small>Created on: {createdDate}</small>
        </div>
        <br />
        <span className="likes">Likes:
          <strong> {this.props.meme.upVotedMemes ?
            this.props.meme.upVotedMemes.length : 0}
          </strong>
        </span>
      </div>
    )
  }
}