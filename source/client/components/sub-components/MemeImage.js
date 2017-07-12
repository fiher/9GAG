import React from 'react'

export default class MemeImage extends React.Component {
  render() {
    let poster
    if (this.props.memeUrl) {
      poster = (
        <div className="pull-left thumb-lg">
          <img src={this.props.memeUrl} className="media-object"/>
        </div>
      )
    }
    return poster
  }
}