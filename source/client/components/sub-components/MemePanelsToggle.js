import React from 'react'
import { Link } from 'react-router'

export default class MemePanelsToggle extends React.Component {
  render () {
    return (
      <div className="pull-right btn-group">
        <a className="btn btn-primary"
           onClick={this.props.toggleCommentsPanel}>
          {this.props.showCommentsPanel ? 'Hide' : 'Comments'}
        </a>
        <a className="btn btn-primary"
           onClick={this.props.toggleLikesPanel}>
          {this.props.showLikesPanel ? 'Hide' : 'Like'}
        </a>
        <Link to={`/meme/${this.props.memeId}/comment/add`}
              className="btn btn-warning">
          Write comment
        </Link>
      </div>
    )
  }
}